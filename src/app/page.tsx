"use client";
import { useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/fetch-p2p", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cookie, csrfToken, userAgent }),
      });
      const data = await res.json();
      setOrders(data.data?.data || []);
    } catch (err) {
      alert("Error al traer datos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-2xl mb-6 font-semibold">Binance P2P Reporter</h1>

      <div className="flex flex-col gap-3 mb-6 max-w-lg">
        <input
          className="p-2 rounded bg-gray-800"
          placeholder="Cookie"
          value={cookie}
          onChange={(e) => setCookie(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-800"
          placeholder="CSRF Token"
          value={csrfToken}
          onChange={(e) => setCsrfToken(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-800"
          placeholder="User-Agent"
          value={userAgent}
          onChange={(e) => setUserAgent(e.target.value)}
        />
        <button
          onClick={fetchOrders}
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-3"
        >
          {loading ? "Cargando..." : "Obtener órdenes"}
        </button>
      </div>

      {orders.length > 0 && (
        <div className="overflow-x-auto bg-gray-800 rounded-lg p-4">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Fecha</th>
                <th>Tipo</th>
                <th>Monto</th>
                <th>Moneda</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o: any, i: number) => (
                <tr key={i}>
                  <td>
                    {o.createTime
                      ? new Date(o.createTime).toLocaleString()
                      : "—"}
                  </td>
                  <td>{o.orderType}</td>
                  <td>{o.tradeAmount}</td>
                  <td>{o.asset}</td>
                  <td>{o.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
