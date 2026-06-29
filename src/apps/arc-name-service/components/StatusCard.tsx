"use client";

interface StatusCardProps {
  available: boolean;
  owner: string;
  expires: string;
  balance: string;
}

export default function StatusCard({
  available,
  owner,
  expires,
  balance,
}: StatusCardProps) {
  return (
    <div className="space-y-5">

      <div className="rounded-xl bg-[#1b2434] p-5">

        <h2 className="font-semibold mb-3">
          Status
        </h2>

        <p className={available ? "text-green-400" : "text-red-400"}>
          {available ? "✅ Available" : "❌ Registered"}
        </p>

      </div>

      <div className="rounded-xl bg-[#1b2434] p-5">

        <h2 className="font-semibold mb-3">
          Owner
        </h2>

        <p className="text-gray-300 break-all">
          {owner}
        </p>

      </div>

      <div className="rounded-xl bg-[#1b2434] p-5">

        <h2 className="font-semibold mb-3">
          Expiration
        </h2>

        <p className="text-gray-300">
          {expires}
        </p>

      </div>

      <div className="rounded-xl bg-[#1b2434] p-5">

        <h2 className="font-semibold mb-3">
          Wallet Balance
        </h2>

        <p className="text-cyan-400 font-semibold">
          {balance} Test USDC
        </p>

      </div>

    </div>
  );
}