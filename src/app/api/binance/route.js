import getP2POrders from "@/utils/axios";

export default async function handler(req, res) {
  const data = await getP2POrders();
  console.log(data);
  res.status(200).json(data);
}
