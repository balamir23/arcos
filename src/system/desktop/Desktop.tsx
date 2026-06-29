"use client";

import { motion } from "framer-motion";

import { getInstalledApps } from "@/system/registry/AppRegistry";

import TopBar from "@/system/topbar/TopBar";
import Dock from "@/system/dock/Dock";
import WindowManager from "@/system/window/WindowManager";

import { useWindowStore } from "@/store/windowStore";

export default function Desktop() {
  const apps = getInstalledApps();

  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="w-screen h-screen bg-[#0b1220] text-white relative overflow-hidden">

      <TopBar />

      <div className="grid grid-cols-5 gap-10 p-10 pt-20">

        {apps.map((app) => (

          <motion.div
            key={app.id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={() =>
              openWindow({
                id: app.id,
                appId: app.id,
                title: app.name,
                x: 100,
                y: 100,
                width: 820,
                height: 520,
                minimized: false,
                maximized: false,
                focused: true,
              })
            }
            className="flex flex-col items-center cursor-pointer select-none"
          >

            <div className="text-6xl mb-3">
              {app.icon}
            </div>

            <span className="text-sm text-center">
              {app.name}
            </span>

          </motion.div>

        ))}

      </div>

      <WindowManager />

      <Dock />

    </div>
  );
}