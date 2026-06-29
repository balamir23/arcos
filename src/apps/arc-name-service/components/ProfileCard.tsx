"use client";

export default function ProfileCard() {
  return (
    <div className="rounded-xl bg-[#1b2434] p-6">

      <h2 className="text-xl font-semibold mb-5">
        Profile
      </h2>

      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-2xl font-bold">
          ?
        </div>

        <div>

          <h3 className="font-semibold">
            No Profile
          </h3>

          <p className="text-sm text-gray-400">
            Create your Arc identity after registering a name.
          </p>

        </div>

      </div>

      <div className="mt-6 space-y-3">

        <button className="w-full rounded-lg bg-cyan-600 py-3 font-semibold hover:bg-cyan-500">
          Edit Profile
        </button>

        <button className="w-full rounded-lg bg-[#111827] py-3 font-semibold hover:bg-[#1f2937]">
          View Public Profile
        </button>

      </div>

    </div>
  );
}