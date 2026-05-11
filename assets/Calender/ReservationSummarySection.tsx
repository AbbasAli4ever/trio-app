import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const TOTAL_SEATS = 25;
const PRICE_PER_SEAT = 800;

export const ReservationSummarySection = (): JSX.Element => {
  const [ticketCount, setTicketCount] = useState(1);
  const seatsLeft = TOTAL_SEATS - 3; // 3 already taken
  const totalPrice = ticketCount * PRICE_PER_SEAT;
  const takenSeats = TOTAL_SEATS - seatsLeft;

  const decrement = () => setTicketCount((prev) => Math.max(1, prev - 1));
  const increment = () =>
    setTicketCount((prev) => Math.min(seatsLeft, prev + 1));

  return (
    <section className="relative w-full">
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex w-full flex-col items-start gap-5 p-0">
          <header className="w-full">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold leading-[normal] tracking-[0] text-[#1d0636]">
              Tickets
            </h2>
          </header>

          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="inline-flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={decrement}
                aria-label="Decrease ticket count"
                disabled={ticketCount <= 1}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#775596] text-[#775596] transition-all hover:bg-[#775596] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <MinusIcon className="h-5 w-5" />
              </button>
              <output
                aria-live="polite"
                className="flex min-w-[48px] items-center justify-center text-center [font-family:'Bebas_Neue',Helvetica] text-[48px] font-normal leading-none tracking-[0] text-x-1e-0736"
              >
                {ticketCount}
              </output>
              <button
                type="button"
                onClick={increment}
                aria-label="Increase ticket count"
                disabled={ticketCount >= seatsLeft}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#775596] text-white transition-all hover:bg-[#6c4d89] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex w-full flex-col items-start gap-1 sm:w-auto sm:items-end">
              <p className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-[normal] tracking-[0] text-x-1e-0736 opacity-60">
                {seatsLeft}/{TOTAL_SEATS} Seats Left
              </p>
              <p className="[font-family:'Bebas_Neue',Helvetica] text-[42px] font-normal leading-none tracking-[0] text-x-1e-0736">
                RS {totalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          <div
            className="flex h-6 w-full items-center gap-1.5"
            role="progressbar"
            aria-label={`${takenSeats} of ${TOTAL_SEATS} seats taken`}
            aria-valuenow={takenSeats}
            aria-valuemin={0}
            aria-valuemax={TOTAL_SEATS}
          >
            {Array.from({ length: TOTAL_SEATS }).map((_, index) => (
              <span
                key={`seat-${index}`}
                className={`h-4 flex-1 rounded-2xl transition-all ${
                  index < takenSeats + ticketCount - 1
                    ? "bg-[#775596]"
                    : index < takenSeats + ticketCount
                      ? "bg-[#775596]"
                      : "bg-[#7755961a]"
                }`}
              />
            ))}
          </div>
          <p className="[font-family:'Montserrat',Helvetica] text-xs font-medium text-x-1e-0736 opacity-50">
            {ticketCount} seat{ticketCount !== 1 ? "s" : ""} selected ·{" "}
            {seatsLeft - ticketCount} remaining
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

