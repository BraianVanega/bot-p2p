import axios from "axios";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    cookie,
    csrfToken,
    userAgent,
  }: { cookie: string; csrfToken: string; userAgent: string } =
    await request.json();
  try {
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
    return NextResponse.json({ data: res.data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
