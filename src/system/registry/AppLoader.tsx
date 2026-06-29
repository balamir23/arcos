"use client";

import WalletApp from "@/apps/wallet/WalletApp";
import TokenStudio from "@/apps/token-studio/TokenStudio";
import NFTStudio from "@/apps/nft-studio/NFTStudio";
import BridgeApp from "@/apps/bridge/BridgeApp";
import ArcNameService from "@/apps/arc-name-service/ArcNameService";

interface Props {
  appId: string;
}

export default function AppLoader({ appId }: Props) {
  switch (appId) {
    case "wallet":
      return <WalletApp />;

    case "token-studio":
      return <TokenStudio />;

    case "nft-studio":
      return <NFTStudio />;

    case "bridge":
      return <BridgeApp />;

    case "arc-name-service":
      return <ArcNameService />;

    default:
      return (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">
              Coming Soon
            </h2>

            <p>
              This application is under development.
            </p>
          </div>
        </div>
      );
  }
}