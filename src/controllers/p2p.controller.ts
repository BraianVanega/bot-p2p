import { NextResponse } from "next/server";
import { fetchBinanceOrders } from "@/services/p2p.service";

export async function getOrders(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_BINANCE_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_BINANCE_API_SECRET;

  const fetchOrders = async () => {
    const orders = await client.getOrders("BTCUSDT");
    return orders.data;
  };

  return fetchOrders();
}
