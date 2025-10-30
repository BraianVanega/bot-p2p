import Overview from "./components/overview";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

  const response = await fetch(`${baseUrl}/api/binance/orders`, {
    cache: "no-store",
  });

  const orders = await response.json();
  console.log(orders);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-2xl mb-6 font-semibold">Binance P2P Reporter</h1>

      <div className="flex flex-col gap-3 mb-6 max-w-lg">
        <button
          onClick={() => {}}
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-3"
        >
          Obtener órdenes
        </button>
      </div>

      <Overview orders={orders} />
    </div>
  );
}
