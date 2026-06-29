"use client";

interface SearchCardProps {
  value: string;
  onChange: (value: string) => void;
  available: boolean;
}

export default function SearchCard({
  value,
  onChange,
  available,
}: SearchCardProps) {
  return (
    <div className="rounded-xl bg-[#1b2434] p-6">

      <h2 className="text-xl font-semibold mb-5">
        Search Name
      </h2>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-[#111827] border border-gray-700 px-4 py-3 outline-none focus:border-cyan-500"
        placeholder="username.arc"
      />

      <div className="mt-4">

        {value.length === 0 ? (

          <p className="text-gray-400">
            Enter a name to search.
          </p>

        ) : available ? (

          <p className="text-green-400 font-semibold">
            ✅ {value} is available
          </p>

        ) : (

          <p className="text-red-400 font-semibold">
            ❌ {value} is already registered
          </p>

        )}

      </div>

    </div>
  );
}