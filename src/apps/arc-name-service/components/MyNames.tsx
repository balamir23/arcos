"use client";

interface NameItem {
  name: string;
  expires: string;
}

interface MyNamesProps {
  names: NameItem[];
}

export default function MyNames({ names }: MyNamesProps) {
  return (
    <div className="rounded-xl bg-[#1b2434] p-6">

      <h2 className="text-xl font-semibold mb-5">
        My Names
      </h2>

      {names.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          You don't own any .arc names yet.
        </div>
      ) : (
        <div className="space-y-4">

          {names.map((item) => (

            <div
              key={item.name}
              className="rounded-lg bg-[#111827] p-4"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold text-cyan-400">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Expires {item.expires}
                  </p>

                </div>

                <div className="flex gap-2">

                  <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm hover:bg-cyan-500">
                    Renew
                  </button>

                  <button className="rounded-lg bg-[#2b3445] px-4 py-2 text-sm hover:bg-[#374151]">
                    Transfer
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}