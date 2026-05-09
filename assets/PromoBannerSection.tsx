import { XIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const bannerContent = {
  image: {
    alt: "Birthday",
    src: "https://c.animaapp.com/moybk94uF21O9Y/img/birhtday-2.png",
  },
  title: "BIRTHDAY MODE",
  subtitle: "CAKE, SPARKLERS & BUNDLE SAVINGS UNLOCKED",
  cta: "Build Package",
};

export const PromoBannerSection = (): JSX.Element => {
  return (
    <>
      <p className="sr-only">
        A slim promotional birthday banner with a celebration icon on the left,
        bold birthday mode text, a compact build package button, and a close
        action on the right.
      </p>
      <header className="relative w-full bg-[#f5eefb]">
        <div className="flex min-h-[67px] w-full items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <img
              className="h-[41px] w-[41px] shrink-0"
              alt={bannerContent.image.alt}
              src={bannerContent.image.src}
            />
            <div className="min-w-0 [font-family:'Montserrat',Helvetica] leading-none">
              <span className="text-sm font-bold tracking-[0] text-[#1d0636]">
                {bannerContent.title}
              </span>
              <span className="text-base font-medium tracking-[0] text-[#1d0636]">
                {" "}
              </span>
              <span className="text-[10px] font-medium tracking-[0] text-[#6e6e6e] sm:text-xs">
                {bannerContent.subtitle}
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-end gap-2">
            <Button
              type="button"
              className="h-auto rounded-[10px] bg-[#775596] px-4 py-2.5 shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#775596]/90 [font-family:'Inter',Helvetica] text-xs font-medium text-white"
            >
              {bannerContent.cta}
            </Button>
            <button
              type="button"
              aria-label="Close promo banner"
              className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-[#1d0636] transition-colors hover:bg-[#e8dcf5]"
            >
              <XIcon className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
