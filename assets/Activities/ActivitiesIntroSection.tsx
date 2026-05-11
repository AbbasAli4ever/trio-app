import { Card, CardContent } from "../../../../components/ui/card";

const introContent = {
  meta: "CAFE-CRAFT · 60–90 MIN · MATERIALS INCLUDED",
  title: "Make Something Lovely",
};

export const ActivitiesIntroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="activities-intro-title"
      className="w-full px-4 pt-6 md:px-6"
    >
      <Card className="h-auto w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-start gap-1 p-0">
          <p className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[normal] tracking-[2px] text-[#775596]">
            {introContent.meta}
          </p>
          <h2
            id="activities-intro-title"
            className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold leading-[1.2] tracking-[0] text-x-1e-0736"
          >
            {introContent.title}
          </h2>
        </CardContent>
      </Card>
    </section>
  );
};
