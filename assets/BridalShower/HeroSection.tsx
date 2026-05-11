import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const heroContent = {
  eyebrow: "TRIO by Maham",
  title: "Hi-Tea",
  backLabel: "BACK TO HOME",
  backgroundImage:
    "https://c.animaapp.com/mp158p9uFQYlPn/img/hero-section-2.png",
  backIcon: "https://c.animaapp.com/mp158p9uFQYlPn/img/weui-arrow-outlined.svg",
};

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-[210px] sm:min-h-[240px] lg:min-h-[285px]"
      style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      aria-label="Hi-Tea hero section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,3,23,1)_0%,rgba(55,12,100,0.78)_42%,rgba(55,12,100,0.3)_52%,rgba(13,3,23,0)_100%)]" />
      <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-between px-5 py-5 sm:min-h-[240px] sm:px-8 sm:py-8 lg:min-h-[285px] lg:px-10 lg:py-10">
        <nav aria-label="Back navigation">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/")}
            className="h-auto p-0 text-white hover:bg-transparent hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black sm:h-8 sm:w-8">
                <img
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  alt="back"
                  src={heroContent.backIcon}
                />
              </span>
              <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-medium tracking-[0] leading-none text-white sm:text-xs">
                {heroContent.backLabel}
              </span>
            </span>
          </Button>
        </nav>
        <header className="max-w-[359px]">
          <p className="[font-family:'Playfair_Display',Helvetica] text-lg font-normal italic leading-none tracking-[0] text-white sm:text-xl">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-2 [font-family:'Playfair_Display',Helvetica] text-[44px] font-medium leading-none tracking-[0] text-white sm:text-[54px]">
            {heroContent.title}
          </h1>
        </header>
      </div>
    </section>
  );
};