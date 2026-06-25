"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { getInstalledApps } from "@/system/registry/AppRegistry";

import Dock from "@/system/dock/Dock";
import TopBar from "@/system/topbar/TopBar";
import Window from "@/system/window/Window";

import WalletApp from "@/apps/wallet/WalletApp";

export default function Desktop() {
  const apps = getInstalledApps();

  const [openedApp, setOpenedApp] = useState<string | null>(null);

  return (
    <div className="w-screen h-screen bg-[#0b1220] text-white relative overflow-hidden">

      <TopBar />

      <div className="grid grid-cols-5 gap-10 p-10 pt-20">

        {apps.map((app) => (

          <motion.div
            key={app.id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={() => setOpenedApp(app.id)}
            className="flex flex-col items-center cursor-pointer select-none"
          >

            <div className="text-6xl mb-3">

              {app.icon}

            </div>

            <span className="text-sm">

              {app.name}

            </span>

          </motion.div>

        ))}

      </div>

      {openedApp === "wallet" && (

        <Window
          title="Arc Wallet"
          onClose={() => setOpenedApp(null)}
        >

          <WalletApp />

        </Window>

      )}

      <Dock />

    </div>
  );
}