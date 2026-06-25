"use client";

export default function WalletApp() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Arc Wallet
      </h1>

      <div className="space-y-4">

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="text-gray-400">Wallet Address</p>

          <p className="font-mono mt-2">
            Not Connected
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="text-gray-400">ARC Balance</p>

          <h2 className="text-2xl mt-2">
            0 ARC
          </h2>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">

          Connect Wallet

        </button>

      </div>

    </div>
  );
}