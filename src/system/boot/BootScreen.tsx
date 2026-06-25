"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Desktop from "@/system/desktop/Desktop";

const bootMessages = [
  "[ OK ] Bootloader Loaded",
  "[ OK ] Kernel Loaded",
  "[ OK ] Memory Initialized",
  "[ OK ] Arc Network Connected",
  "[ OK ] Wallet Service Started",
  "[ OK ] Window Manager Ready",
  "[ OK ] App Registry Loaded",
  "[ OK ] Desktop Ready",
];

export default function BootScreen() {
  const [messages, setMessages] = useState<string[]>([]);
  const [bootFinished, setBootFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setMessages((prev) => [...prev, bootMessages[index]]);
      index++;

      if (index === bootMessages.length) {
        clearInterval(interval);

        setTimeout(() => {
          setBootFinished(true);
        }, 1200);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (bootFinished) {
    return <Desktop />;
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-green-400"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-[700px] font-mono">
        <h1 className="mb-8 text-5xl font-bold text-cyan-400">
          ArcOS
        </h1>

        {messages.map((message, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2"
          >
            {message}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}