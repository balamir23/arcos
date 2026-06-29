"use client";

import WalletApp from "@/apps/wallet/WalletApp";

interface Props {
  appId: string;
}

export default function AppLoader({ appId }: Props) {
  switch (appId) {
    case "wallet":
      return <WalletApp />;

    default:
      return (
        <div className="p-8">

          <h2 className="text-2xl font-bold">
            Coming Soon
          </h2>

          <p className="mt-4 text-gray-400">
            This application is under development.
          </p>

        </div>
      );
  }
}