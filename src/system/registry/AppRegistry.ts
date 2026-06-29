import { apps } from "@/config/apps";

export function getInstalledApps() {
  return apps;
}

export function getApp(id: string) {
  return apps.find((app) => app.id === id);
}