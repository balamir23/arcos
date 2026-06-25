"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-12 backdrop-blur-xl bg-black/30 border-b border-white/10 flex items-center justify-between px-6 z-50">

      <h1 className="font-bold text-cyan-400">
        ArcOS
      </h1>

      <span className="text-white">
        {time}
      </span>

    </header>
  );
}