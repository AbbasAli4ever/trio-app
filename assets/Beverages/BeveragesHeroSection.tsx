import { useNavigate } from "react-router-dom";

const heroContent = {
  eyebrow: "TRIO by Maham",
  title: "Beverages",
  backLabel: "BACK TO HOME",
  backgroundImage:
    "https://c.animaapp.com/mp158p9uFQYlPn/img/hero-section-1.png",
  backIcon: "https://c.animaapp.com/mp158p9uFQYlPn/img/weui-arrow-outlined.svg",
};

export const BeveragesHeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-4 sm:px-6">
      <div
        className="relative w-full overflow-hidden rounded-3xl min-h-[210px] sm:min-h-[240px] lg:min-h-[285px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,3,23,1)_0%,rgba(55,12,100,0.9)_30%,rgba(55,12,100,0.72)_42%,rgba(55,12,100,0.32)_52%,rgba(13,3,23,0)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[210px] sm:min-h-[240px] lg:min-h-[285px] flex-col justify-between p-6 sm:p-8 lg:p-10">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex w-fit items-center gap-2 text-left"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white">
              <img className="h-4 w-4" alt="back" src={heroContent.backIcon} />
            </span>
            <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[normal] tracking-[0] text-white">
              {heroContent.backLabel}
            </span>
          </button>
          <header className="max-w-[359px]">
            <p className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal italic leading-[normal] tracking-[0] text-white">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-1 [font-family:'Playfair_Display',Helvetica] text-[48px] font-medium leading-[0.95] tracking-[0] text-white sm:text-[54px]">
              {heroContent.title}
            </h1>
          </header>
        </div>
      </div>
    </section>
  );
};
