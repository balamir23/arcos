"use client";

export default function FaucetApp() {
  return (
    <div className="w-full h-full bg-[#101826] text-white p-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-2">
        Circle Faucet
      </h1>

      <p className="text-gray-400 mb-8">
        Request Test USDC for Arc Testnet from the official Circle Faucet.
      </p>

      <div className="max-w-2xl rounded-2xl border border-cyan-500/20 bg-[#151f30] p-8">

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Get Test USDC
          </h2>

          <p className="text-gray-400 leading-7">
            Click the button below to open the official Circle Faucet.
            Connect your wallet, select the Arc Testnet network and
            request Test USDC. After receiving your tokens, return to
            ArcOS and continue using the applications.
          </p>
        </div>

        <div className="space-y-4">

          <a
            href="https://faucet.circle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-cyan-500 py-3 text-lg font-semibold transition hover:bg-cyan-400"
          >
            Open Circle Faucet
          </a>

          <div className="rounded-xl border border-cyan-500/20 bg-[#101826] p-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-400">
                Network
              </span>

              <span className="font-medium">
                Arc Testnet
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-400">
                Token
              </span>

              <span className="font-medium">
                Test USDC
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-400">
                Provider
              </span>

              <span className="font-medium">
                Circle Faucet
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}