import { useState } from "react";

const addOns = [
  { label: "Glass Of Bellini Mocktail", price: "+tbc" },
  { label: "Bouquet For The Table", price: "+2,500" },
  { label: "Extra Polaroid Print", price: "+350" },
];

export const AddOnsSection = (): JSX.Element => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  return (
    <section className="relative flex w-full flex-col items-start gap-5 pb-4">
      <header className="w-full">
        <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold leading-[normal] tracking-[0] text-[#1d0636]">
          Make It Special — Add-ons
        </h2>
      </header>
      <div className="flex w-full flex-wrap items-center gap-4">
        {addOns.map((addOn) => {
          const isActive = selected.includes(addOn.label);
          return (
            <button
              key={addOn.label}
              type="button"
              onClick={() => toggle(addOn.label)}
              className={`inline-flex h-10 items-center gap-1.5 rounded-[53.88px] border-[1.96px] px-4 py-2 shadow-drop-shadow transition-all ${
                isActive
                  ? "border-[#775596] bg-[#f0e8fa]"
                  : "border-[#ebe5f1] bg-white hover:border-[#775596]/50 hover:bg-[#faf7fd]"
              }`}
            >
              <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] tracking-[0] text-x-1e-0736 whitespace-nowrap">
                {addOn.label}
              </span>
              <span
                className={`[font-family:'Bebas_Neue',Helvetica] text-[13.7px] font-normal leading-[19.2px] tracking-[0] whitespace-nowrap ${isActive ? "text-[#775596]" : "text-[#775596]"}`}
              >
                {addOn.price}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
