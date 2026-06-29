"use client";

import { useState } from "react";
import Window from "./Window";

export interface OpenWindow {
  id: string;
  title: string;
}

export default function WindowManager() {
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
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <h2 className="text-2xl font-bold">{window.title}</h2>

          <p className="mt-4 text-gray-400">
            ArcOS Application
          </p>
        </Window>
      ))}
    </>
  );
}