import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const showtimes = [
  { time: "10:00 AM", availability: "25/25 Left", seats: 25 },
  { time: "12:30 PM", availability: "25/25 Left", seats: 25 },
  { time: "3:00 PM", availability: "18/25 Left", seats: 18 },
  { time: "5:30 PM", availability: "10/25 Left", seats: 10 },
  { time: "8:00 PM", availability: "5/25 Left", seats: 5 },
];

export const ShowtimeSelectionSection = (): JSX.Element => {
  const [selected, setSelected] = useState<string | null>("3:00 PM");

  return (
    <section className="relative flex w-full flex-col items-start gap-3.5">
      <header className="w-full">
        <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold leading-[normal] tracking-[0] text-[#1d0636]">
          Showtime — Pick Any
        </h2>
      </header>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {showtimes.map((slot) => {
          const isSelected = selected === slot.time;
          const isFull = slot.seats === 0;
          const isLow = slot.seats > 0 && slot.seats <= 5;
          const availabilityColor = isFull
            ? "text-red-400"
            : isLow
              ? "text-orange-400"
              : "text-[#b076ee]";

          return (
            <button
              key={slot.time}
              type="button"
              onClick={() => !isFull && setSelected(slot.time)}
              className={`w-full rounded-2xl border text-left transition-all ${
                isSelected
                  ? "border-[#775596] bg-[#dbb5ff30] shadow-[0_0_0_2px_#77559640]"
                  : isFull
                    ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-60"
                    : "border-black bg-white hover:border-[#775596] hover:bg-[#f9f5fe]"
              }`}
            >
              <CardContent className="flex flex-col gap-4 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`[font-family:'Manrope',Helvetica] text-[22px] font-medium leading-[normal] tracking-[0] sm:text-2xl ${isSelected ? "text-[#775596]" : "text-x-1e-0736"}`}
                  >
                    {slot.time}
                  </h3>
                  <p
                    className={`[font-family:'Manrope',Helvetica] text-sm font-medium leading-[normal] tracking-[0] ${availabilityColor}`}
                  >
                    {slot.availability}
                  </p>
                </div>
                <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-x-1e-0736 opacity-70">
                  {isSelected
                    ? "✓\u00a0\u00a0Selected · pick your movie"
                    : "●\u00a0\u00a0Open slot · pick your movie"}
                </p>
              </CardContent>
            </button>
          );
        })}
      </div>
    </section>
  );
};
