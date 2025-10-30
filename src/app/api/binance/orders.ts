// /pages/api/binance/orders.ts
import { Spot } from "@binance/connector";
import { NextResponse } from "next/server";

const client = new Spot(
  process.env.NEXT_PUBLIC_BINANCE_API_KEY!,
  process.env.NEXT_PUBLIC_BINANCE_API_SECRET!
);

export async function GET() {
  try {
    const response = await client.getOrders("BTCUSDT");
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
