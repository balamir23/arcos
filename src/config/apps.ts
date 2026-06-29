export interface AppDefinition {
  id: string;
  name: string;
  icon: string;
  description: string;
  version: string;
}

export const apps: AppDefinition[] = [
  {
    id: "wallet",
    name: "Wallet",
    icon: "👛",
    description: "Manage your Arc wallet",
    version: "1.0.0",
  },
  {
    id: "token-studio",
    name: "Token Studio",
    icon: "🪙",
    description: "Deploy ARC Tokens",
    version: "1.0.0",
  },
  {
    id: "nft-studio",
    name: "NFT Studio",
    icon: "🖼️",
    description: "Create NFT Collections",
    version: "1.0.0",
  },
  {
    id: "bridge",
    name: "Bridge",
    icon: "🌉",
    description: "Bridge assets",
    version: "1.0.0",
  },
  {
    id: "arc-name-service",
    name: "Arc Name",
    icon: "🌐",
    description: "Register your Arc identity",
    version: "1.0.0",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "📊",
    description: "Track your assets",
    version: "1.0.0",
  },
  {
    id: "app-store",
    name: "App Store",
    icon: "📦",
    description: "Discover Arc applications",
    version: "1.0.0",
  },
];