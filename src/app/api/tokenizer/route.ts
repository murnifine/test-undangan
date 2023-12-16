import { addNewOrder } from "@/actions/action-order";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { profile_id, harga } = await req.json();

//   const newOrder = await addNewOrder(harga, profile_id);

//   let parameter = {
//     transaction_details: {
//       order_id: newOrder.id,
//       gross_amount: harga,
//     },
//     credit_card: {
//       secure: true,
//     },
//   };

//   // try {
//   //   const paymentStatus = await snap.transaction.status(id);
//   //   console.log({ paymentStatus });

//   //   if (paymentStatus.transaction_status === "pending") {
//   //     const a = await snap.transaction.cancel(id);
//   //     console.log("expired", { a, paymentStatus });
//   //   }
//   // } catch (error) {
//   //   console.log({ error });
//   // } finally {
//   //   // const token = "ddddddd";
//   //   // console.log("ini tokenyaaaaaaaaaaaaaaaaaaaaaaa", { token, id, harga });
//   // }

//   const token = await snap.createTransactionToken(parameter);
//   return NextResponse.json({ token });
// }
