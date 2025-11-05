import crypto from "crypto";
import { NextResponse } from "next/server";

const API_KEY = process.env.BINANCE_API_KEY!;
const API_SECRET = process.env.BINANCE_API_SECRET!;
const BASE_URL = "https://api.binance.com";

export async function GET() {
  try {
    const timestamp = Date.now();
    const query = `symbol=BTCUSDT&timestamp=${timestamp}`;

    // Firma HMAC SHA256
    const signature = crypto
      .createHmac("sha256", API_SECRET)
      .update(query)
      .digest("hex");

    const url = `${BASE_URL}/api/v3/allOrders?${query}&signature=${signature}`;

    const res = await fetch(url, {
      headers: {
        "X-MBX-APIKEY": API_KEY,
      },
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error(
      "❌ Error al traer órdenes:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
