import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const stemItems = [
  { name: "Garden Rose", price: "+250", count: "3", color: "bg-[#f2a8b8]" },
  { name: "Peony", price: "+350", count: "9", color: "bg-[#fae4ec]" },
  { name: "Ranunculus", price: "+200", count: "2", color: "bg-[#f6d6c5]" },
  { name: "Lisianthus", price: "+220", count: "1", color: "bg-[#e3d6f4]" },
  { name: "Eucalyptus", price: "+150", count: "1", color: "bg-[#d0e7d7]" },
];

const wrapItems = [
  { name: "Brown Kraft", price: "+200", color: "bg-[#e8a7b7]" },
  { name: "Pink Tissue", price: "+250", color: "bg-[#f8d5dc]" },
  { name: "Linen Wrap", price: "+350", color: "bg-[#f4e3b9]" },
];

const ribbonItems = [
  { name: "Satin Cream", price: "+150", color: "bg-[#fbf6ef]" },
  { name: "Velvet Burgundy", price: "+250", color: "bg-[#781e21]" },
  { name: "Silk Sage", price: "+200", color: "bg-[#d0e7d7]" },
];

export const BouquetBuilderSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch">
      <Card className="w-full rounded-[32px] border-0 bg-white shadow-none">
        <CardContent className="flex flex-col gap-8 p-4 sm:p-6">
          <div
            className="relative min-h-[240px] w-full overflow-hidden rounded-2xl bg-cover bg-center sm:min-h-[320px] lg:min-h-[394px]"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mp18tsxfgJ0g8r/img/hero-section-2.png)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-full border-2 border-white bg-black/30 px-4 py-2 text-white shadow-[0px_4.37px_21.87px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] hover:bg-black/35 hover:text-white"
              >
                <span className="[font-family:'Montserrat',Helvetica] text-xl font-medium leading-[33.6px] sm:text-2xl">
                  Live - Preview
                </span>
              </Button>
            </div>
          </div>
          <section className="flex flex-col gap-5">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-[32px] font-semibold leading-none text-[#1d0636] sm:text-2xl">
              Step 1 · Pick Stems (tap To Add)
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {stemItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="flex min-h-[72px] items-center gap-2 rounded-2xl border-[1.96px] border-solid border-[#ede7f5] bg-white p-2 text-left shadow-drop-shadow transition-colors hover:bg-[#fcfbff]"
                >
                  <span
                    className={`h-8 w-8 shrink-0 rounded-lg ${item.color}`}
                    aria-hidden="true"
                  />
                  <span className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] text-x-1e-0736">
                      {item.name}
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[14px] text-x-1e-0736 opacity-70">
                      {item.price}
                    </span>
                  </span>
                  <span className="flex h-[23px] min-w-[15px] items-center justify-center rounded-[40px] bg-[#775596] px-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[14px] text-white">
                      {item.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-5">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-[32px] font-semibold leading-none text-[#1d0636] sm:text-2xl">
              Step 2 · Wrap
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {wrapItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="flex min-h-[96px] flex-col items-start justify-center gap-2 rounded-2xl border-[1.96px] border-solid border-[#ede7f5] bg-white p-2 text-left shadow-drop-shadow transition-colors hover:bg-[#fcfbff]"
                >
                  <span
                    className={`h-8 w-full rounded-lg ${item.color}`}
                    aria-hidden="true"
                  />
                  <span className="flex w-full flex-col justify-center gap-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] text-x-1e-0736">
                      {item.name}
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[14px] text-x-1e-0736 opacity-70">
                      {item.price}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-5">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-[32px] font-semibold leading-none text-[#1d0636] sm:text-2xl">
              Step 3 · Ribbon
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {ribbonItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="flex min-h-[96px] flex-col items-start justify-center gap-2 rounded-2xl border-[1.96px] border-solid border-[#ede7f5] bg-white p-2 text-left shadow-drop-shadow transition-colors hover:bg-[#fcfbff]"
                >
                  <span
                    className={`h-8 w-full rounded-lg ${item.color}`}
                    aria-hidden="true"
                  />
                  <span className="flex w-full flex-col justify-center gap-1">
                    <span className="[font-family:'Montserrat',Helvetica] text-[13.7px] font-medium leading-[19.2px] text-x-1e-0736">
                      {item.name}
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[14px] text-x-1e-0736 opacity-70">
                      {item.price}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-4 rounded-xl bg-[#f2edfb] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-normal text-x-1e-0736">
                Your bouquet
              </h3>
              <p className="[font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-none text-[#370c64]">
                Rs 1,650
              </p>
            </div>
            <Button
              type="button"
              className="h-auto self-start rounded-[10px] bg-[#775596] px-4 py-2.5 text-white shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#6e4e8c] sm:self-auto"
            >
              <span className="[font-family:'Inter',Helvetica] text-base font-medium leading-normal">
                Add to tray
              </span>
              <ArrowRightIcon className="h-[17.5px] w-[17.5px]" />
            </Button>
          </section>
        </CardContent>
      </Card>
    </section>
  );
};
