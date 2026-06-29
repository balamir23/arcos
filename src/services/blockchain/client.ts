import { createPublicClient, http } from "viem";
import { ARC_NETWORK } from "./config";

export const publicClient = createPublicClient({
  transport: http(ARC_NETWORK.rpcUrl),
});