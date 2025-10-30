import axios from "axios";

export async function fetchBinanceOrders({
  cookie,
  csrfToken,
  userAgent,
}: {
  cookie: string;
  csrfToken: string;
  userAgent: string;
}) {
  const url = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/order/list";

  const headers = {
    "content-type": "application/json",
    cookie,
    csrftoken: csrfToken,
    "user-agent": userAgent,
  };

  const body = {
    page: 1,
    rows: 20,
    orderStatus: "ALL",
    orderType: "ALL",
  };

  const res = await axios.post(url, body, { headers });
  return res.data;
}
