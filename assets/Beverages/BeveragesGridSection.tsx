import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const beverageRows = [
  [
    {
      name: "Espresso",
      price: "TBC",
      description: "Single Shot, Our House Blend.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1.png",
      imageAlt: "Espresso",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
    {
      name: "Doppio",
      price: "TBC",
      description: "Double Shot, No Milk.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-1.png",
      imageAlt: "Doppio",
      tags: [
        { label: "BEST SELLER", className: "bg-[#b076eee6] text-[#370c64]" },
      ],
    },
    {
      name: "Cappuccino",
      price: "TBC",
      description: "Velvet Steam Milk, Fine Micro-foam.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-2.png",
      imageAlt: "Cappuccino",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
  ],
  [
    {
      name: "Vanilla Matcha Latte",
      price: "TBC",
      description: "Ceremonial Matcha, Vanilla, Milk Over Ice.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-3.png",
      imageAlt: "Vanilla Matcha Latte",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
    {
      name: "Spanish Matcha",
      price: "TBC",
      description: "Matcha + Condensed Milk, Soft & Sweet.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-4.png",
      imageAlt: "Spanish Matcha",
      tags: [
        { label: "BEST SELLER", className: "bg-[#b076eee6] text-[#370c64]" },
      ],
    },
    {
      name: "Strawberry Matcha",
      price: "TBC",
      description: "Strawberry Purée, Matcha, Milk.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-5.png",
      imageAlt: "Strawberry Matcha",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
  ],
  [
    {
      name: "Flat White",
      price: "TBC",
      description: "Double Ristretto, Silk Milk.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-6.png",
      imageAlt: "Flat White",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
    {
      name: "Piccolo",
      price: "TBC",
      description: "Ristretto + A Dash Of Steamed Milk.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-7.png",
      imageAlt: "Piccolo",
      tags: [
        { label: "BEST SELLER", className: "bg-[#b076eee6] text-[#370c64]" },
      ],
    },
    {
      name: "Cortado",
      price: "TBC",
      description: "Equal Parts Espresso & Milk, Served Warm.",
      image: "https://c.animaapp.com/mp158p9uFQYlPn/img/21765-1-8.png",
      imageAlt: "Cortado",
      tags: [
        { label: "VEG", className: "bg-[#b076eee6] text-[#370c64]" },
        { label: "LIGHT", className: "bg-[#a3e0bccc] text-[#370c64]" },
      ],
    },
  ],
];

export const BeverageGridSection = (): JSX.Element => {
  return (
    <section className="mt-5 w-full px-4 sm:px-6">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {beverageRows.flat().map((beverage) => (
          <Card
            key={beverage.name}
            className="overflow-hidden rounded-[20px] border-0 bg-white shadow-drop-shadow"
          >
            <CardContent className="p-0">
              <article className="flex h-full flex-col">
                <header className="relative">
                  <div className="absolute left-4 top-[18px] z-10 flex flex-wrap items-center gap-[7px]">
                    {beverage.tags.map((tag) => (
                      <Badge
                        key={`${beverage.name}-${tag.label}`}
                        variant="secondary"
                        className={`rounded-[28px] border-0 px-2.5 py-[3px] [font-family:'Montserrat',Helvetica] text-sm font-medium tracking-[0] ${tag.className}`}
                      >
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                  <img
                    className="h-[209.88px] w-full object-cover"
                    alt={beverage.imageAlt}
                    src={beverage.image}
                  />
                </header>
                <div className="flex flex-1 flex-col justify-between gap-6 px-5 py-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <h3 className="flex-1 [font-family:'Playfair_Display',Helvetica] text-xl font-medium tracking-[0] text-x-1e-0736">
                        {beverage.name}
                      </h3>
                      <p className="[font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-[31px] tracking-[0] text-[#370c64] whitespace-nowrap">
                        {beverage.price}
                      </p>
                    </div>
                    <p className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0] text-x-1e-0736 opacity-70">
                      {beverage.description}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-auto min-w-[70px] rounded-[10px] border-[#d7d0de] bg-white px-4 py-2.5 [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] text-[#775596] shadow-[inset_0px_-2px_4px_#ffffff73]"
                    >
                      +Extras
                    </Button>
                    <Button
                      type="button"
                      className="h-auto flex-1 rounded-[10px] bg-[#775596] px-4 py-2.5 [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] text-white shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#775596]/90"
                    >
                      + Add
                    </Button>
                  </div>
                </div>
              </article>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
