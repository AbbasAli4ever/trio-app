import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const includes = ["Robot Cake-Trolley delivery", "Polaroid memory print"];

export const EventDetailSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[32px] border-0 bg-white shadow-none">
        <CardContent className="p-6 sm:p-8 lg:p-10">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <article className="flex min-w-0 flex-1 flex-col items-start gap-6">
              <header className="flex w-full max-w-[546px] flex-col items-start gap-4">
                <div className="flex w-full max-w-[420px] flex-col items-start">
                  <p className="[font-family:'Montserrat',Helvetica] text-xl font-normal tracking-[0] text-x-1e-0736">
                    3:00 PM — 7:00 PM, Daily
                  </p>
                  <h2 className="[font-family:'Playfair_Display',Helvetica] text-[44px] font-medium leading-none tracking-[0] text-x-1e-0736 sm:text-[54px]">
                    Hi-Tea at TRIO
                  </h2>
                </div>
                <p className="[font-family:'Bebas_Neue',Helvetica] text-[32px] leading-8 tracking-[0] text-[#370c64]">
                  Hi-Tea for 2 — Rs 4,999 / pair.
                </p>
              </header>
              <div className="flex flex-col items-start gap-4">
                <h3 className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0] text-x-1e-0736">
                  Includes
                </h3>
                <div className="flex flex-col items-start gap-3">
                  {includes.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="h-auto rounded-[28px] border-0 bg-[#e5deec] px-4 py-[3px] [font-family:'Montserrat',Helvetica] text-sm font-medium tracking-[0] text-[#370c64] hover:bg-[#e5deec]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="h-auto rounded-[10px] bg-[#775596] px-4 py-2.5 shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#775596]/95">
                <span className="[font-family:'Inter',Helvetica] text-base font-medium tracking-[0] text-white">
                  Reserve · Rs 4,999 / pair
                </span>
                <ArrowRightIcon className="ml-1 h-4 w-4 text-white" />
              </Button>
            </article>
            <figure className="flex w-full shrink-0 items-end justify-center lg:w-auto lg:justify-end">
              <div className="flex items-end">
                <img
                  className="h-auto w-[220px] max-w-[45vw] sm:w-[260px] lg:w-[296.75px]"
                  alt="Pink and white flower bouquet"
                  src="https://c.animaapp.com/mp158p9uFQYlPn/img/magnific-create-a-realistic-babys--2917355984-1.png"
                />
                <img
                  className="-ml-[88px] h-auto w-[170px] object-cover sm:-ml-[105px] sm:w-[200px] lg:-ml-[130px] lg:w-[227px]"
                  alt="TRIO service robot"
                  src="https://c.animaapp.com/mp158p9uFQYlPn/img/image-11.png"
                />
              </div>
            </figure>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};