import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const heroContent = {
  eyebrow: "TRIO by Maham",
  title: "Occasion Decor",
  backLabel: "BACK TO HOME",
  backgroundImage: "https://c.animaapp.com/moybk94uF21O9Y/img/hero-section.png",
  backIcon: "https://c.animaapp.com/moybk94uF21O9Y/img/weui-arrow-outlined.svg",
};

export const HeroSection = (): JSX.Element => {
  return (
    <section
      aria-label="Occasion decor hero banner"
      className="mt-11 w-full px-3 sm:px-6"
    >
      <Card className="overflow-hidden rounded-[24px] border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div
            className="relative min-h-[152px] w-full overflow-hidden rounded-[24px] bg-cover bg-center bg-no-repeat sm:min-h-[220px] lg:min-h-[285px]"
            style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,3,23,1)_0%,rgba(55,12,100,0.78)_42%,rgba(55,12,100,0.3)_52%,rgba(13,3,23,0)_100%)]" />
            <div className="relative z-10 flex h-full min-h-[152px] flex-col items-start justify-between px-5 py-5 sm:min-h-[220px] sm:px-10 sm:py-10 lg:min-h-[285px]">
              <Button
                type="button"
                variant="ghost"
                className="h-auto gap-2 rounded-full p-0 text-left text-white hover:bg-transparent hover:text-white"
              >
                <img
                  className="h-8 w-8 shrink-0"
                  alt="Weui arrow outlined"
                  src={heroContent.backIcon}
                />
                <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-medium tracking-[0] leading-[normal] text-white sm:text-xs">
                  {heroContent.backLabel}
                </span>
              </Button>
              <header className="flex max-w-[359px] flex-col items-start">
                <p className="mt-[-1.00px] [font-family:'Playfair_Display',Helvetica] text-base font-normal italic tracking-[0] leading-[normal] text-white sm:text-xl">
                  {heroContent.eyebrow}
                </p>
                <h1 className="mt-[-1.00px] [font-family:'Playfair_Display',Helvetica] text-[34px] font-medium tracking-[0] leading-none text-white sm:text-[44px] lg:text-[54px]">
                  {heroContent.title}
                </h1>
              </header>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};