"use client";

export default function NFTStudio() {
  return (
    <div className="w-full h-full bg-[#101826] text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        NFT Studio
      </h1>

      <div className="grid gap-6">

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Collection Name
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="Arc Genesis"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Symbol
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="ARCNFT"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Metadata URI
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="ipfs://..."
          />
        </div>

        <button
          className="mt-6 rounded-lg bg-cyan-500 py-3 font-semibold hover:bg-cyan-400"
        >
          Deploy NFT Collection
        </button>

      </div>

    </div>
  );
}