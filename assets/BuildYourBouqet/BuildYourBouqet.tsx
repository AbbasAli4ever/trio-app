import { Card, CardContent } from "../../components/ui/card";
import { BouquetBuilderSection } from "./sections/BouquetBuilderSection";
import { ProductHeroSection } from "./sections/ProductHeroSection/ProductHeroSection";

const sections = [
  { id: "product-hero", Component: ProductHeroSection },
  { id: "bouquet-builder", Component: BouquetBuilderSection },
];

export const BuildYourBouquet = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f6f7]" data-model-id="171:589">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-4 py-4 sm:px-5 lg:px-6">
        {sections.map(({ id, Component }) => (
          <Card
            key={id}
            className="overflow-hidden rounded-none border-0 bg-transparent shadow-none"
          >
            <CardContent className="p-0">
              <section aria-label={id} className="w-full">
                <Component />
              </section>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};