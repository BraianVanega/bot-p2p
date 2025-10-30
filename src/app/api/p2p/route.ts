import { getOrders } from "@/controllers/p2p.controller";

export async function POST(request: Request) {
  return getOrders(request);
}
