import { Card, CardContent } from "../../../../components/ui/card";

const heroContent = {
  backLabel: "BACK TO HOME",
  brand: "TRIO by Maham",
  title: "Activities",
  backgroundImage: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/hero-section.png",
  backIcon: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/weui-arrow-outlined.svg",
};

export const ActivitiesHeroSection = (): JSX.Element => {
  return (
    <section className="mt-6 w-full px-6">
      <Card className="relative w-full overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="relative min-h-[210px] p-0 sm:min-h-[240px] lg:min-h-[285px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(13,3,23,1)_0%,rgba(55,12,100,0.78)_42%,rgba(55,12,100,0.3)_52%,rgba(13,3,23,0)_100%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex min-h-[210px] flex-col justify-between p-8 sm:min-h-[240px] sm:p-10 lg:min-h-[285px]">
            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 text-left"
              aria-label={heroContent.backLabel}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <img
                  className="h-4 w-4"
                  alt="Weui arrow outlined"
                  src={heroContent.backIcon}
                />
              </span>
              <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium tracking-[0] text-white">
                {heroContent.backLabel}
              </span>
            </button>
            <header className="max-w-[359px]">
              <p className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal italic tracking-[0] text-white">
                {heroContent.brand}
              </p>
              <h1 className="[font-family:'Playfair_Display',Helvetica] text-[42px] font-medium leading-none tracking-[0] text-white sm:text-[48px] lg:text-[54px]">
                {heroContent.title}
              </h1>
            </header>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};