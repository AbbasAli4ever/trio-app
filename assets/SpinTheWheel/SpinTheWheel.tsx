import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";

const wheelOptions = [
  {
    id: "bite",
    label: "Bite",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-1.png",
    imageAlt: "Image",
    wheelImage:
      "https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png",
    cta: "Spin the Bite wheel",
    subtitle: "A bestseller from the kitchen",
  },
  {
    id: "bouquet",
    label: "Bouquet",
    image:
      "https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-realistic-babys--2917355984-2.png",
    imageAlt: "Magnific create a",
    wheelImage:
      "https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png",
    cta: "Spin the Bite wheel",
    subtitle: "A bestseller from the kitchen",
  },
  {
    id: "experience",
    label: "Experience",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/image-2.png",
    imageAlt: "Image",
    wheelImage:
      "https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2-1.png",
    cta: "Spin the Bite wheel",
    subtitle: "A bestseller from the kitchen",
  },
];

export const SpinTheWheel = (): JSX.Element => {
  const [selectedWheel, setSelectedWheel] = useState(wheelOptions[0]);

  return (
    <main className="min-h-screen w-full bg-[#f7f6f7]" data-model-id="172:1158">
      <section className="mx-auto flex w-full max-w-[1024px] flex-col px-6 pb-16 pt-[18px]">
        <header className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,rgba(119,85,150,1)_0%,rgba(198,109,239,1)_100%)]">
          <div className="absolute inset-y-0 left-0 w-[72%] bg-[linear-gradient(90deg,rgba(13,3,23,1)_0%,rgba(55,12,100,0.78)_42%,rgba(55,12,100,0.3)_52%,rgba(13,3,23,0)_100%)]" />
          <div className="absolute -left-[240px] top-1/2 h-[720px] -translate-y-1/2 opacity-[0.14] [font-family:'Font_Awesome_5_Free-Solid',Helvetica] text-[720px] leading-[720px] text-white">
            
          </div>
          <div className="relative z-10 flex min-h-[214px] items-start justify-between gap-6 px-[30px] pb-8 pt-[30px]">
            <div className="flex max-w-[420px] flex-col">
              <Button
                variant="ghost"
                className="h-auto w-fit p-0 text-white hover:bg-transparent hover:text-white"
                asChild
              >
                <button type="button" aria-label="Back to home">
                  <span className="inline-flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white text-[#1e0736]">
                      <ChevronLeftIcon className="h-4 w-4" />
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-xs font-medium tracking-[0]">
                      BACK TO HOME
                    </span>
                  </span>
                </button>
              </Button>
              <div className="mt-[38px]">
                <p className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal italic tracking-[0] text-white">
                  TRIO by Maham
                </p>
                <h1 className="mt-1 [font-family:'Playfair_Display',Helvetica] text-[58px] font-medium leading-none tracking-[0] text-white">
                  Spin the Wheel
                </h1>
              </div>
            </div>
            <img
              className="relative z-10 mt-[-6px] h-[220px] w-[220px] shrink-0 self-center object-contain object-right sm:h-[245px] sm:w-[245px] md:mr-[-14px] md:h-[270px] md:w-[270px]"
              alt="Magnific create a"
              src="https://c.animaapp.com/mp18tsxfgJ0g8r/img/magnific-create-a-3d-restaurant-sp-2916037334-2.png"
            />
          </div>
        </header>
        <section className="mx-auto flex w-full max-w-[620px] flex-col items-center pt-[18px] text-center">
          <div className="flex flex-col items-center">
            <p className="[font-family:'Montserrat',Helvetica] text-[19px] font-normal tracking-[0] text-x-1e-0736">
              Indecisive?
            </p>
            <h2 className="mt-1 [font-family:'Playfair_Display',Helvetica] text-[58px] font-medium leading-none tracking-[0] text-x-1e-0736">
              Spin the Wheel
            </h2>
          </div>
          <p className="mt-5 [font-family:'Montserrat',Helvetica] text-[19px] font-normal leading-[1.2] tracking-[0] text-x-1e-0736/70">
            Three wheels, one tap.
            <br />
            We pick you say yes (or spin again).
          </p>
          <div
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
            role="tablist"
            aria-label="Wheel categories"
          >
            {wheelOptions.map((option) => {
              const isSelected = selectedWheel.id === option.id;

              return (
                <Button
                  key={option.id}
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedWheel(option)}
                  className={`h-auto rounded-[53.88px] border-[1.96px] bg-white px-4 py-2 shadow-drop-shadow hover:bg-white ${
                    isSelected
                      ? "border-[#1d0636] text-x-1e-0736"
                      : "border-transparent text-x-1e-0736"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <span className="inline-flex items-center gap-1">
                    <img
                      className="h-7 w-7 object-cover"
                      alt={option.imageAlt}
                      src={option.image}
                    />
                    <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0]">
                      {option.label}
                    </span>
                  </span>
                </Button>
              );
            })}
          </div>
          <img
            className="mt-7 h-[408px] w-[408px] object-contain"
            alt="Magnific create a"
            src={selectedWheel.wheelImage}
          />
          <Button className="mt-4 h-auto rounded-[90px] bg-[#775596] px-4 py-2.5 text-white shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#775596]/95">
            <span className="[font-family:'Inter',Helvetica] text-base font-medium tracking-[0]">
              {selectedWheel.cta}
            </span>
          </Button>
          <p className="mt-5 [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] text-x-1e-0736">
            {selectedWheel.subtitle}
          </p>
        </section>
      </section>
    </main>
  );
};
