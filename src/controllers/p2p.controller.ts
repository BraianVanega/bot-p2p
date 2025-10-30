import { Spot } from "@binance/connector";

const apiKey = process.env.NEXT_PUBLIC_BINANCE_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_BINANCE_API_SECRET;

const client = new Spot(apiKey as string, apiSecret as string);

export async function getMyOrders(): Promise<any> {
  try {
    const response = await client.getOrders("BTCUSDT");
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
}
