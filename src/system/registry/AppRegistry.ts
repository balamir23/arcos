import { installedApps } from "@/lib/core/DesktopEngine";

export function getInstalledApps() {
  return installedApps;
}

export function getApp(id: string) {
  return installedApps.find(app => app.id === id);
}