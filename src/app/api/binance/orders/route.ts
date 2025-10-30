import { Spot } from "@binance/connector";
import { NextResponse } from "next/server";

const client = new Spot(
  process.env.BINANCE_API_KEY as string,
  process.env.BINANCE_API_SECRET as string
);

console.log(client);
console.log(process.env.BINANCE_API_KEY);
console.log(process.env.BINANCE_API_SECRET);

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
