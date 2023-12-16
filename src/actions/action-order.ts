"use server";

import prisma from "@/lib/prisma";
import { PaymentStatus } from "@/types/types";
import { revalidatePath } from "next/cache";
const Midtrans = require("midtrans-client");

// Create Core API instance
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function getPaymentToken(price: number, profileId: number) {
  const newOrder = await addNewOrder(price, profileId);

  let parameter = {
    transaction_details: {
      order_id: newOrder.id,
      gross_amount: price,
    },
    credit_card: {
      secure: true,
    },
  };

  const token = await snap.createTransactionToken(parameter);

  return token;
}

export async function addNewOrder(price: number, profileId: number) {
  const data = await prisma.order.create({
    data: {
      price,
      status: "pending",
      profileId,
    },
  });
  //   console.log({ data });
  return data;
}

export async function getOrderByProfileId(profileId: number) {
  const data = await prisma.order.findMany({
    where: {
      profileId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export async function updateStatusOrderSuccess(
  orderId: string,
  profileId: number
) {
  const data = await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: "success",
    },
  });

  //   hapus order lain yang pending
  await prisma.order.deleteMany({
    where: {
      status: "pending",
      profileId: data.profileId,
    },
  });

  revalidatePath(`/user/share?profileId=${profileId}`);

  return data;
}

export async function getTransactionStatus(orderId: string) {
  const transactionStatus: PaymentStatus = await snap.transaction.status(
    orderId
  );

  return transactionStatus;
}

export async function verifyTransaction(orderId: string, profileId: number) {
  try {
    const transactionStatus: PaymentStatus = await snap.transaction.status(
      orderId
    );

    if (transactionStatus.transaction_status === "settlement") {
      await updateStatusOrderSuccess(orderId, profileId);
    }

    return transactionStatus;
  } catch (error) {
    console.log({ error, message: "action order" });
  }
}
