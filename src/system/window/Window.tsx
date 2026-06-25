"use client";

import { motion } from "framer-motion";

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Window({
  title,
  onClose,
  children,
}: WindowProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="absolute left-1/2 top-1/2 w-[820px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl border border-cyan-500 bg-[#111827]"
    >
      <div className="flex items-center justify-between bg-[#0f172a] border-b border-cyan-500 px-5 py-3">

        <span className="font-semibold text-cyan-300">
          {title}
        </span>

        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-300 text-xl"
        >
          ✕
        </button>

      </div>

      <div className="p-6 h-full overflow-auto">
        {children}
      </div>
    </motion.div>
  );
}