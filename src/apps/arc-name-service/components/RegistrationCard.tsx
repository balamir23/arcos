"use client";

export interface RegistrationOption {
  year: string;
  price: number;
}

interface RegistrationCardProps {
  periods: RegistrationOption[];
  selected: RegistrationOption;
  onSelect: (period: RegistrationOption) => void;
}

export default function RegistrationCard({
  periods,
  selected,
  onSelect,
}: RegistrationCardProps) {
  return (
    <div className="rounded-xl bg-[#1b2434] p-6">

      <h2 className="text-xl font-semibold mb-5">
        Registration Period
      </h2>

      <div className="space-y-3">

        {periods.map((period) => (

          <label
            key={period.year}
            className={`flex items-center justify-between rounded-lg p-4 cursor-pointer transition

            ${
              selected.year === period.year
                ? "bg-cyan-600"
                : "bg-[#111827] hover:bg-[#1d2636]"
            }`}
          >

            <div>

              <p className="font-medium">
                {period.year}
              </p>

              <p className="text-sm text-gray-300">
                {period.price} Test USDC
              </p>

            </div>

            <input
              type="radio"
              checked={selected.year === period.year}
              onChange={() => onSelect(period)}
            />

          </label>

        ))}

      </div>

    </div>
  );
}