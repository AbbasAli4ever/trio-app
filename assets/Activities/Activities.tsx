import { Card, CardContent } from "../../components/ui/card";
import { ActivitiesCatalogSection } from "./sections/ActivitiesCatalogSection";
import { ActivitiesHeroSection } from "./sections/ActivitiesHeroSection";
import { ActivitiesIntroSection } from "./sections/ActivitiesIntroSection";

const sections = [
  {
    id: "activities-hero",
    component: <ActivitiesHeroSection />,
    wrapperClassName: "w-full",
  },
  {
    id: "activities-intro",
    component: <ActivitiesIntroSection />,
    wrapperClassName: "w-full",
  },
  {
    id: "activities-catalog",
    component: <ActivitiesCatalogSection />,
    wrapperClassName: "w-full",
  },
];

export const Activities = (): JSX.Element => {
  return (
    <main
      className="flex w-full flex-col bg-[#f7f6f7]"
      data-model-id="157:1285"
    >
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col gap-4 p-0">
          {sections.map((section) => (
            <section key={section.id} className={section.wrapperClassName}>
              {section.component}
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};