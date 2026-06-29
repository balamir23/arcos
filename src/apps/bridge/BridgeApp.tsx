"use client";

export default function BridgeApp() {
  return (
    <div className="w-full h-full bg-[#101826] text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        Arc Bridge
      </h1>

      <div className="grid gap-6">

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            From Network
          </label>

          <select className="w-full rounded-lg bg-[#1b2434] p-3 outline-none">
            <option>Ethereum Sepolia</option>
            <option>Base Sepolia</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Destination
          </label>

          <select className="w-full rounded-lg bg-[#1b2434] p-3 outline-none">
            <option>Arc Testnet</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Amount
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="10"
          />
        </div>

        <button className="mt-6 rounded-lg bg-cyan-500 py-3 font-semibold hover:bg-cyan-400">
          Bridge Assets
        </button>

      </div>

    </div>
  );
}