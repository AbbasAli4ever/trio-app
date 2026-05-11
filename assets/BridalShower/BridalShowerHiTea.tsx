import { AddOnsSection } from "./sections/AddOnsSection";
import { EventDetailSection } from "./sections/EventDetailSection";
import { HeroSection } from "./sections/HeroSection";
import { MenuCategoriesSection } from "./sections/MenuCategoriesSection";

export const BridalShowerHiTea = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen bg-[#f7f6f7]" data-model-id="157:388">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-6 px-4 py-5 sm:px-6 sm:py-6 pb-10">
        <HeroSection />
        <EventDetailSection />
        <MenuCategoriesSection />
        <AddOnsSection />
      </div>
    </main>
  );
};