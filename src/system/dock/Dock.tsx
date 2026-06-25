"use client";

import { installedApps } from "@/lib/core/DesktopEngine";

export default function Dock() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2">

      <div className="flex items-end gap-3 rounded-2xl bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20">

        {installedApps.map((app) => (

          <button
            key={app.id}
            className="text-5xl transition duration-200 hover:scale-125"
          >
            {app.icon}
          </button>

        ))}

      </div>

    </div>
  );
}