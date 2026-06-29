import { ArcName } from "./types";

const reserved: ArcName[] = [
  {
    name: "admin.arc",
    owner: "Arc Foundation",
    expires: "Permanent",
  },
  {
    name: "arc.arc",
    owner: "Arc Foundation",
    expires: "Permanent",
  },
  {
    name: "wallet.arc",
    owner: "Arc Foundation",
    expires: "Permanent",
  },
];

export function checkName(name: string): ArcName | null {
  return (
    reserved.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    ) || null
  );
}