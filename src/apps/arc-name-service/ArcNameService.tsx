"use client";

import { useMemo, useState } from "react";

import SearchCard from "./components/SearchCard";
import RegistrationCard, {
  RegistrationOption,
} from "./components/RegistrationCard";
import PaymentSummary from "./components/PaymentSummary";
import StatusCard from "./components/StatusCard";
import MyNames from "./components/MyNames";
import ProfileCard from "./components/ProfileCard";

import { myNames } from "./data";
import { checkName } from "./services";

const periods: RegistrationOption[] = [
  { year: "1 Year", price: 2 },
  { year: "2 Years", price: 3.5 },
  { year: "3 Years", price: 4.8 },
  { year: "4 Years", price: 5.8 },
  { year: "5 Years", price: 6.5 },
];

export default function ArcNameService() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(periods[0]);

  const result = useMemo(() => {
    if (!name.trim()) return null;

    return checkName(name.trim());
  }, [name]);

  const available =
    name.trim().length > 0 &&
    result === null;

  return (
    <div className="w-full h-full bg-[#101826] text-white p-8 overflow-auto">

      <h1 className="text-3xl font-bold mb-8">
        Arc Name Service
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="space-y-6">

          <SearchCard
            value={name}
            onChange={setName}
            available={available}
          />

          <RegistrationCard
            periods={periods}
            selected={selected}
            onSelect={setSelected}
          />

          <button
            disabled={!available}
            className={`w-full rounded-lg py-3 font-semibold transition ${
              available
                ? "bg-cyan-500 hover:bg-cyan-400"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            Register Name
          </button>

        </div>

        <PaymentSummary
          period={selected.year}
          price={selected.price}
        />

        <div className="space-y-6">

          <StatusCard
            available={available}
            owner={result?.owner ?? "-"}
            expires={result?.expires ?? "-"}
            balance="0"
          />

          <MyNames
            names={myNames}
          />

          <ProfileCard />

        </div>

      </div>

    </div>
  );
}