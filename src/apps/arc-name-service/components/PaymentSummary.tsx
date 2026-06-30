"use client";

import { useState } from "react";

interface PaymentSummaryProps {
  period: string;
  price: number;
}

export default function PaymentSummary({
  period,
  price,
}: PaymentSummaryProps) {
  const [approved, setApproved] = useState(false);

  return (
    <div className="rounded-xl border border-cyan-500 bg-[#0f172a] p-6">

      <h2 className="text-xl font-semibold mb-6">
        Payment Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Selected Period
          </span>

          <span>{period}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Registration Fee
          </span>

          <span>{price} Test USDC</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Payment Token
          </span>

          <span>Test USDC</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Network
          </span>

          <span>Arc Testnet</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Approval Status
          </span>

          <span
            className={
              approved
                ? "text-green-400"
                : "text-yellow-400"
            }
          >
            {approved ? "Approved" : "Approval Required"}
          </span>
        </div>

      </div>

      <hr className="border-gray-700 my-6" />

      <div className="flex justify-between text-xl font-bold mb-6">
        <span>Total</span>

        <span className="text-cyan-400">
          {price} Test USDC
        </span>
      </div>

      <button
        onClick={() => setApproved(true)}
        disabled={approved}
        className={`w-full rounded-lg py-3 font-semibold transition ${
          approved
            ? "bg-green-600 cursor-default"
            : "bg-cyan-500 hover:bg-cyan-400"
        }`}
      >
        {approved ? "USDC Approved" : "Approve Test USDC"}
      </button>

    </div>
  );
}