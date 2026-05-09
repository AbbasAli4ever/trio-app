import { Card, CardContent } from "../../components/ui/card";
import { HeroSection } from "./sections/HeroSection";
import { PackageCustomizerSection } from "./sections/PackageCustomizerSection";
import { PackageGallerySection } from "./sections/PackageGallerySection";
import { PromoBannerSection } from "./sections/PromoBannerSection";

const screenSections = [
  {
    id: "promo-banner",
    component: <PromoBannerSection />,
    wrapperClassName: "w-full",
  },
  {
    id: "hero",
    component: <HeroSection />,
    wrapperClassName: "w-full px-3 pt-5 sm:px-4",
  },
  {
    id: "package-gallery",
    component: <PackageGallerySection />,
    wrapperClassName: "w-full px-3 pt-4 sm:px-4 sm:pt-5",
  },
  {
    id: "package-customizer",
    component: <PackageCustomizerSection />,
    wrapperClassName: "w-full px-3 pt-4 pb-5 sm:px-4 sm:pt-5 sm:pb-6",
  },
];

export const BroseDecor = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f6f7]" data-model-id="60:3591">
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="flex h-auto w-full flex-col gap-0 p-0">
          {screenSections.map((section) => (
            <section key={section.id} className={section.wrapperClassName}>
              {section.component}
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};
