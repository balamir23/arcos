"use client";

import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import { CONTRACTS } from "@/contracts/addresses";

export default function WalletApp() {
  const { address, isConnected } = useAccount();

  const { connect } = useConnect();

  const { disconnect } = useDisconnect();

  const { data: arcBalance } = useBalance({
    address,
  });

  const { data: usdcBalance } = useBalance({
    address,
    token: CONTRACTS.TEST_USDC as `0x${string}`,
  });

  return (
    <div className="w-full h-full bg-[#101826] text-white p-6 overflow-auto">

      <h1 className="text-3xl font-bold mb-8">
        Arc Wallet
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">
            Status
          </p>

          <h2
            className={`text-xl mt-2 ${
              isConnected
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {isConnected ? "Connected" : "Not Connected"}
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">
            Network
          </p>

          <h2 className="text-xl mt-2">
            Arc Testnet
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">
            Wallet Address
          </p>

          <h2 className="mt-2 break-all text-sm">
            {address ?? "-"}
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5">
          <p className="text-gray-400 text-sm">
            ARC Balance
          </p>

          <h2 className="text-xl mt-2">
            {arcBalance
              ? Number(arcBalance.formatted).toFixed(4)
              : "0"}{" "}
            ARC
          </h2>
        </div>

        <div className="rounded-xl bg-[#192233] p-5 col-span-2">
          <p className="text-gray-400 text-sm">
            Test USDC Balance
          </p>

          <h2 className="text-xl mt-2">
            {usdcBalance
              ? Number(usdcBalance.formatted).toFixed(2)
              : "0"}{" "}
            USDC
          </h2>
        </div>

      </div>

      {!isConnected ? (
        <button
          onClick={() =>
            connect({
              connector: injected(),
            })
          }
          className="mt-10 rounded-lg bg-cyan-500 hover:bg-cyan-400 px-6 py-3 font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={() => disconnect()}
          className="mt-10 rounded-lg bg-red-500 hover:bg-red-400 px-6 py-3 font-semibold"
        >
          Disconnect
        </button>
      )}

    </div>
  );
}