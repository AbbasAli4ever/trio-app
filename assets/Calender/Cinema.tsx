import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CinemaHeroSection } from "./sections/CinemaHeroSection/CinemaHeroSection";
import { DateSelectionSection } from "./sections/DateSelectionSection";
import { OfferDetailsSection } from "./sections/OfferDetailsSection";
import { ReservationSummarySection } from "./sections/ReservationSummarySection";
import { ShowtimeSelectionSection } from "./sections/ShowtimeSelectionSection";

export const Cinema = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen bg-[#f7f6f7]" data-model-id="146:2084">
      <section className="mx-auto flex w-full max-w-[1024px] flex-col gap-6 px-4 py-5 sm:px-6 sm:py-6">
        <CinemaHeroSection />
        <OfferDetailsSection />
        <DateSelectionSection />
        <ShowtimeSelectionSection />
        <ReservationSummarySection />
        <footer className="flex w-full justify-end pt-2 pb-6">
          <Button
            type="button"
            className="h-auto w-full max-w-[374px] rounded-[10px] bg-[#775596] px-4 py-2.5 text-white shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#6c4d89]"
          >
            <span className="[font-family:'Inter',Helvetica] text-base font-medium tracking-[0] leading-[normal]">
              Reserve 1 Seat
            </span>
            <ArrowRightIcon className="ml-0.5 h-4 w-4" />
          </Button>
        </footer>
      </section>
    </main>
  );
};
