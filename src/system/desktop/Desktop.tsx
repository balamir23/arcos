"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { getInstalledApps } from "@/system/registry/AppRegistry";
import AppLoader from "@/system/registry/AppLoader";

import Dock from "@/system/dock/Dock";
import TopBar from "@/system/topbar/TopBar";
import Window from "@/system/window/Window";

interface OpenWindow {
  id: string;
  title: string;
}

export default function Desktop() {
  const apps = getInstalledApps();

  const [windows, setWindows] = useState<OpenWindow[]>([]);

  function openWindow(id: string, title: string) {
    setWindows((prev) => {
      if (prev.find((w) => w.id === id)) return prev;
      return [...prev, { id, title }];
    });
  }

  function closeWindow(id: string) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div className="w-screen h-screen bg-[#0b1220] text-white relative overflow-hidden">

      <TopBar />

      <div className="grid grid-cols-5 gap-10 p-10 pt-20">

        {apps.map((app) => (

          <motion.div
            key={app.id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={() => openWindow(app.id, app.name)}
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

      {windows.map((window) => (

        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >

          <AppLoader appId={window.id} />

        </Window>

      ))}

      <Dock />

    </div>
  );
}