"use client";

export default function WalletApp() {
  return (
    <div className="w-full h-full bg-[#101826] text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        Arc Wallet
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">Status</p>

          <h2 className="text-green-400 text-xl mt-2">
            Not Connected
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">Network</p>

          <h2 className="text-xl mt-2">
            Arc Testnet
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">Wallet Address</p>

          <h2 className="mt-2 text-sm break-all">
            -
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">Balance</p>

          <h2 className="text-xl mt-2">
            0 ARC
          </h2>
        </div>

      </div>

      <button
        className="mt-10 rounded-lg bg-cyan-500 hover:bg-cyan-400 px-6 py-3 font-semibold"
      >
        Connect Wallet
      </button>

    </div>
  );
}