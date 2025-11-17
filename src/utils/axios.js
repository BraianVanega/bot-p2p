import axios from "axios";
import crypto from "crypto";

const API_KEY = process.env.BINANCE_API_KEY;
const API_SECRET = process.env.BINANCE_API_SECRET;

const BASE_URL = "https://api.binance.com";

// Rango de fechas
const startTimestamp = new Date("2024-11-15 00:00:00").getTime();
const endTimestamp = new Date("2024-11-15 23:59:59").getTime();

export default async function getP2POrders() {
  try {
    const timestamp = Date.now();

    const query = `startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}&timestamp=${timestamp}`;

    const signature = crypto
      .createHmac("sha256", API_SECRET)
      .update(query)
      .digest("hex");

    const url = `${BASE_URL}/sapi/v1/c2c/orderMatch/listUserOrderHistory?${query}&signature=${signature}`;

    const { data } = await axios.get(url, {
      headers: {
        "X-MBX-APIKEY": API_KEY,
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(
      "Error obteniendo órdenes:",
      error.response?.data || error.message
    );
  }
}
