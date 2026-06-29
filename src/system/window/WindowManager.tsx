"use client";

import Window from "./Window";
import { useWindowStore } from "@/store/windowStore";
import AppLoader from "@/system/registry/AppLoader";

export default function WindowManager() {
  const windows = useWindowStore((state) => state.windows);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <AppLoader appId={window.appId} />
        </Window>
      ))}
    </>
  );
}