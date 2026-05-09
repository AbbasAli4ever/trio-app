import { useMemo, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PackageCustomizerSection = (): JSX.Element => {
  const browseOptions = useMemo(
    () => [
      {
        id: "default",
        label: "Default",
        swatches: ["#f9dcd7", "#d4595c", "#9e272b"],
      },
      {
        id: "pink-white",
        label: "Pink & White",
        swatches: ["#fbe4ec", "#f2a8b8", "#ffffff"],
        lastHasBorder: true,
      },
      {
        id: "all-white",
        label: "All White",
        swatches: ["#ffffff", "#f4ecec", "#d3c4c4"],
      },
      {
        id: "black-silver",
        label: "Black & Silver",
        swatches: ["#1a1a1a", "#c0c0c0", "#ffffff"],
      },
      {
        id: "lavender",
        label: "Lavender",
        swatches: ["#e8def9", "#b9a3e0", "#6e5ba0"],
      },
    ],
    [],
  );

  const flowerOptions = useMemo(
    () => [
      {
        id: "red-roses",
        label: "Red Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-1-1.png",
      },
      {
        id: "white-roses",
        label: "White Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-2-1.png",
      },
      {
        id: "pink-roses",
        label: "Pink Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-5-1.png",
      },
      {
        id: "tulips",
        label: "Tulips",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-6-1.png",
      },
      {
        id: "babys-breath",
        label: "Baby's Breath",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png",
      },
      {
        id: "lavender-sprays-1",
        label: "Lavender Sprays",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-8-1.png",
      },
      {
        id: "lavender-sprays-2",
        label: "Lavender Sprays",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-9.png",
      },
    ],
    [],
  );

  const finishingFlowerOptions = useMemo(
    () => [
      {
        id: "finish-red-roses",
        label: "Red Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-1-1.png",
      },
      {
        id: "finish-white-roses",
        label: "White Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-2-1.png",
      },
      {
        id: "finish-pink-roses",
        label: "Pink Roses",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-5-1.png",
      },
      {
        id: "finish-tulips",
        label: "Tulips",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-6-1.png",
      },
      {
        id: "finish-babys-breath",
        label: "Baby's Breath",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png",
      },
      {
        id: "finish-lavender-sprays-1",
        label: "Lavender Sprays",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-8-1.png",
      },
      {
        id: "finish-lavender-sprays-2",
        label: "Lavender Sprays",
        image: "https://c.animaapp.com/moybk94uF21O9Y/img/image-7-2.png",
      },
    ],
    [],
  );

  const addOns = useMemo(
    () => [
      {
        id: "balloon-arch",
        label: "Balloon Arch",
        price: "+Rs 3,500",
        image:
          "https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1.png",
      },
      {
        id: "fairy-light-wall",
        label: "Fairy Light Wall",
        price: "+Rs 2,500",
        image:
          "https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-1.png",
      },
      {
        id: "custom-neon-sign",
        label: "Custom Neon Sign",
        price: "+Rs 6,000",
        image:
          "https://c.animaapp.com/moybk94uF21O9Y/img/magnific-create-a-realistic-balloo-2917545837-1-2.png",
      },
    ],
    [],
  );

  const [selectedBrowse, setSelectedBrowse] = useState("default");
  const [selectedFlower, setSelectedFlower] = useState("pink-roses");
  const [selectedFinishingFlower, setSelectedFinishingFlower] =
    useState("finish-pink-roses");
  const [selectedAddon, setSelectedAddon] = useState("balloon-arch");

  const splitIntoRows = <T,>(items: T[], firstRowCount: number) => [
    items.slice(0, firstRowCount),
    items.slice(firstRowCount),
  ];

  const [flowerFirstRow, flowerSecondRow] = splitIntoRows(flowerOptions, 5);
  const [finishFirstRow, finishSecondRow] = splitIntoRows(
    finishingFlowerOptions,
    5,
  );

  return (
    <section className="relative mt-6 w-full self-center">
      <div className="mx-auto w-full max-w-[976px]">
        <Card className="rounded-[24px] border-0 bg-white shadow-none">
          <CardContent className="flex flex-col gap-8 p-6">
            <header
              className="relative min-h-[543px] w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://c.animaapp.com/moybk94uF21O9Y/img/hero-section-1.png)",
              }}
            >
              <div className="absolute bottom-6 right-6">
                <div className="inline-flex items-center justify-center gap-1 rounded-[53.88px] border-[1.96px] border-white bg-[#0000004c] px-4 py-2 shadow-[0px_4.37px_21.87px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
                  <span className="[font-family:'Montserrat',Helvetica] text-2xl font-medium leading-[33.6px] tracking-[0] text-white">
                    Live - Preview
                  </span>
                </div>
              </div>
            </header>
            <section className="flex w-full flex-col items-start gap-5">
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold tracking-[0] text-[#1d0636]">
                Browse
              </h2>
              <div className="flex w-full flex-wrap items-end gap-4">
                <Button
                  type="button"
                  onClick={() => setSelectedBrowse("default")}
                  className="h-auto self-stretch rounded-[55px] bg-x-1e-0736 px-5 py-2.5 [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0] text-white hover:bg-x-1e-0736"
                >
                  Default
                </Button>
                {browseOptions.map((option) => {
                  const isActive = selectedBrowse === option.id;

                  return (
                    <Button
                      key={option.id}
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedBrowse(option.id)}
                      className={`h-auto self-stretch rounded-[53.88px] border-[1.96px] bg-white p-2 shadow-drop-shadow hover:bg-white ${
                        isActive ? "border-[#1d0636]" : "border-border"
                      }`}
                    >
                      <span className="inline-flex items-center">
                        {option.swatches.map((color, index) => (
                          <span
                            key={`${option.id}-swatch-${index}`}
                            className={`relative h-[13.33px] w-[13.33px] rounded-[6.67px] ${
                              option.lastHasBorder &&
                              index === option.swatches.length - 1
                                ? "border border-solid border-[#f0f0f0] shadow-drop-shadow"
                                : ""
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </span>
                      <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736">
                        {option.label}
                      </span>
                    </Button>
                  );
                })}
              </div>
            </section>
            <section className="flex w-full flex-col items-start gap-5">
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold tracking-[0] text-[#1d0636]">
                Flowers- Pick Any
              </h2>
              <div className="flex w-full max-w-[759px] flex-col items-start gap-4">
                <div className="flex w-full flex-wrap items-start gap-4">
                  {flowerFirstRow.map((flower) => {
                    const isActive = selectedFlower === flower.id;

                    return (
                      <Button
                        key={flower.id}
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedFlower(flower.id)}
                        className={`h-10 rounded-[53.88px] border-[1.96px] bg-white px-4 py-2 shadow-drop-shadow hover:bg-white ${
                          isActive ? "border-[#1d0636]" : "border-border"
                        }`}
                      >
                        <img
                          className="h-7 w-7 object-cover"
                          alt={flower.label}
                          src={flower.image}
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736">
                          {flower.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {flowerSecondRow.map((flower) => {
                    const isActive = selectedFlower === flower.id;
                                        return (
                      <Button
                        key={flower.id}
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedFlower(flower.id)}
                        className={`h-10 rounded-[53.88px] border-[1.96px] bg-white px-4 py-2 shadow-drop-shadow hover:bg-white ${
                          isActive ? "border-[#1d0636]" : "border-border"
                        }`}
                      >
                        <img
                          className="h-7 w-7 object-cover"
                          alt={flower.label}
                          src={flower.image}
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736">
                          {flower.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className="flex w-full flex-col items-start gap-5">
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold tracking-[0] text-[#1d0636]">
                Finishing Touches
              </h2>
              <div className="flex w-full max-w-[759px] flex-col items-start gap-4">
                <div className="flex w-full flex-wrap items-start gap-4">
                  {finishFirstRow.map((item) => {
                    const isActive = selectedFinishingFlower === item.id;

                    return (
                      <Button
                        key={item.id}
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedFinishingFlower(item.id)}
                        className={`h-10 rounded-[53.88px] border-[1.96px] bg-white px-4 py-2 shadow-drop-shadow hover:bg-white ${
                          isActive ? "border-[#1d0636]" : "border-border"
                        }`}
                      >
                        <img
                          className="h-7 w-7 object-cover"
                          alt={item.label}
                          src={item.image}
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736">
                          {item.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {finishSecondRow.map((item) => {
                    const isActive = selectedFinishingFlower === item.id;

                    return (
                      <Button
                        key={item.id}
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedFinishingFlower(item.id)}
                        className={`h-10 rounded-[53.88px] border-[1.96px] bg-white px-4 py-2 shadow-drop-shadow hover:bg-white ${
                          isActive ? "border-[#1d0636]" : "border-border"
                        }`}
                      >
                        <img
                          className="h-7 w-7 object-cover"
                          alt={item.label}
                          src={item.image}
                        />
                        <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736">
                          {item.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className="flex w-full flex-col items-start gap-5">
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold tracking-[0] text-[#1d0636]">
                Finishing Touches
              </h2>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {addOns.map((addOn) => {
                  const isActive = selectedAddon === addOn.id;

                  return (
                    <button
                      key={addOn.id}
                      type="button"
                      onClick={() => setSelectedAddon(addOn.id)}
                      className={`flex h-full items-start gap-4 rounded-2xl bg-white p-4 text-left ${
                        isActive
                          ? "border border-solid border-[#1d0636]"
                          : "border border-transparent shadow-drop-shadow"
                      }`}
                    >
                      <img
                        className="h-14 w-14 shrink-0 object-cover"
                        alt={addOn.label}
                        src={addOn.image}
                      />
                      <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
                        <div className="flex min-w-0 flex-col items-start gap-2">
                          <h3 className="[font-family:'Montserrat',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-[#150929]">
                            {addOn.label}
                          </h3>
                          <p className="[font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-[#370c64]">
                            {addOn.price}
                          </p>
                        </div>
                        <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center">
                          <span className="h-[18px] w-[18px] rounded-sm border-2 border-solid border-[#1d0636]" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
            <footer className="flex w-full items-center justify-between gap-6 rounded-xl bg-[#f2edfb] p-8">
              <div className="flex flex-1 flex-col items-start gap-2">
                <h2 className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-x-1e-0736">
                  Total
                </h2>
                <p className="[font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-[#370c64]">
                  Rs 15,000
                </p>
              </div>
              <Button className="h-auto rounded-[10px] bg-[#775596] px-4 py-2.5 shadow-[inset_0px_-2px_4px_#ffffff73] [font-family:'Inter',Helvetica] text-base font-medium text-white hover:bg-[#775596]">
                <span>Add to tray</span>
                <span className="[font-family:'Inter',Helvetica] text-[17.5px] font-normal leading-[normal] text-white">
                  →
                </span>
              </Button>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
