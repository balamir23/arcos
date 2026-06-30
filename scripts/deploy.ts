import { network } from "hardhat";

async function main() {
  const { viem } = await network.connect();

  const [deployer] = await viem.getWalletClients();

  console.log("Deployer:", deployer.account.address);

  const usdc = await viem.deployContract("TestUSDC");

  console.log("TestUSDC:", usdc.address);

  const treasury = await viem.deployContract("Treasury", [
    deployer.account.address,
  ]);

  console.log("Treasury:", treasury.address);

  const priceManager = await viem.deployContract("PriceManager", [
    deployer.account.address,
  ]);

  console.log("PriceManager:", priceManager.address);

  const arcName = await viem.deployContract("ArcNameService", [
    usdc.address,
    treasury.address,
    priceManager.address,
  ]);

  console.log("ArcNameService:", arcName.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});