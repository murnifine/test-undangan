import { NextRequest, NextResponse } from "next/server";

// import Midtrans from "midtrans-client"
const Midtrans = require("midtrans-client");
// Create Core API instance
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export async function POST(req: NextRequest) {
  const { id, harga } = await req.json();

  let parameter = {
    transaction_details: {
      order_id: id,
      gross_amount: harga,
    },
    credit_card: {
      secure: true,
    },
  };

  const token = await snap.createTransactionToken(parameter);
  console.log("ini tokenyaaaaaaaaaaaaaaaaaaaaaaa");
  console.log("ini tokenyaaaaaaaaaaaaaaaaaaaaaaa", { token });
  return NextResponse.json({ token });
}
