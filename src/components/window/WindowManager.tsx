"use client";

import Window from "../../system/window/Window";

interface WindowItem {
  id: string;
  title: string;
}

interface Props {
  windows: WindowItem[];
  closeWindow: (id: string) => void;
}

export default function WindowManager({
  windows,
  closeWindow,
}: Props) {
  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <h1 className="text-2xl font-bold">
            {window.title}
          </h1>

          <p className="mt-4 text-gray-400">
            ArcOS Application
          </p>
        </Window>
      ))}
    </>
  );
}