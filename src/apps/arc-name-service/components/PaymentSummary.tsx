"use client";

interface PaymentSummaryProps {
  period: string;
  price: number;
}

export default function PaymentSummary({
  period,
  price,
}: PaymentSummaryProps) {
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

          <span>
            {period}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Registration Fee
          </span>

          <span>
            {price} Test USDC
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Payment Token
          </span>

          <span>
            Test USDC
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Network
          </span>

          <span>
            Arc Testnet
          </span>
        </div>

      </div>

      <hr className="border-gray-700 my-6"/>

      <div className="flex justify-between text-xl font-bold">

        <span>Total</span>

        <span className="text-cyan-400">
          {price} Test USDC
        </span>

      </div>

    </div>
  );
}