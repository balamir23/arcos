"use client";

export default function TokenStudio() {
  return (
    <div className="w-full h-full bg-[#101826] text-white p-6">

      <h1 className="text-3xl font-bold mb-8">
        Token Studio
      </h1>

      <div className="grid gap-6">

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Token Name
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="Arc Token"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Symbol
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="ARC"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Total Supply
          </label>

          <input
            className="w-full rounded-lg bg-[#1b2434] p-3 outline-none"
            placeholder="1000000"
          />
        </div>

        <button
          className="mt-6 rounded-lg bg-cyan-500 py-3 font-semibold hover:bg-cyan-400"
        >
          Deploy Token
        </button>

      </div>

    </div>
  );
}