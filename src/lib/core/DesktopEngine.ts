export interface AppDefinition {
  id: string;
  name: string;
  icon: string;
  description: string;
  version: string;
  component: string;
}

export const installedApps: AppDefinition[] = [
  {
    id: "wallet",
    name: "Wallet",
    icon: "👛",
    description: "Manage your Arc wallet",
    version: "1.0.0",
    component: "WalletApp",
  },
  {
    id: "token-studio",
    name: "Token Studio",
    icon: "🪙",
    description: "Deploy ARC Tokens",
    version: "1.0.0",
    component: "TokenStudio",
  },
  {
    id: "nft-studio",
    name: "NFT Studio",
    icon: "🖼️",
    description: "Create NFT Collections",
    version: "1.0.0",
    component: "NFTStudio",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "📊",
    description: "Track your assets",
    version: "1.0.0",
    component: "Portfolio",
  },
  {
    id: "app-store",
    name: "App Store",
    icon: "📦",
    description: "Discover Arc Apps",
    version: "1.0.0",
    component: "AppStore",
  },
];