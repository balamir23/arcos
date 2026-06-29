export interface ArcApplication {
  id: string;
  name: string;
  icon: string;
  description: string;
  version: string;
  component: string;
}

export const apps: ArcApplication[] = [
  {
    id: "wallet",
    name: "Wallet",
    icon: "👛",
    description: "Manage your wallet",
    version: "0.1.0",
    component: "WalletApp",
  },
  {
    id: "token-studio",
    name: "Token Studio",
    icon: "🪙",
    description: "Deploy ERC20 Tokens",
    version: "0.1.0",
    component: "TokenStudio",
  },
  {
    id: "nft-studio",
    name: "NFT Studio",
    icon: "🖼️",
    description: "Create NFT Collections",
    version: "0.1.0",
    component: "NFTStudio",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: "📊",
    description: "Portfolio Overview",
    version: "0.1.0",
    component: "PortfolioApp",
  },
  {
    id: "prediction",
    name: "Prediction Arena",
    icon: "📈",
    description: "Trade with virtual funds",
    version: "0.1.0",
    component: "PredictionApp",
  },
  {
    id: "bridge",
    name: "Bridge",
    icon: "🌉",
    description: "Bridge Assets",
    version: "0.1.0",
    component: "BridgeApp",
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "⌨️",
    description: "ArcOS Terminal",
    version: "0.1.0",
    component: "TerminalApp",
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",
    description: "System Settings",
    version: "0.1.0",
    component: "SettingsApp",
  },
];