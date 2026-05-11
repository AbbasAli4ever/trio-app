import { BeverageCategoryFilterSection } from "./sections/BeverageCategoryFilterSection";
import { BeverageGridSection } from "./sections/BeverageGridSection";
import { BeveragesHeroSection } from "./sections/BeveragesHeroSection/BeveragesHeroSection";

export const Beverages = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen bg-[#f7f6f7]" data-model-id="157:2001">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-6 py-4 pb-10">
        <BeveragesHeroSection />
        <BeverageCategoryFilterSection />
        <BeverageGridSection />
      </div>
    </main>
  );
};
