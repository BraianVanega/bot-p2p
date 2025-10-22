import axios from "axios";

export async function POST(req) {
  try {
    const { cookie, csrfToken, userAgent } = await req.json();

    const url = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/order/list";

    const headers = {
      "content-type": "application/json",
      cookie: cookie,
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
    return Response.json({ data: res.data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
