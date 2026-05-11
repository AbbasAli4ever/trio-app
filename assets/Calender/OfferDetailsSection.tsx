import { Card, CardContent } from "../../../../components/ui/card";

const offerTextParts = [
  {
    text: "🎬 Included free",
    className:
      "[font-family:'Montserrat',Helvetica] font-semibold text-x-1e-0736",
  },
  {
    text: " with any dining order over Rs 2,500 · Otherwise Rs 800/seat · 25 seats per slot",
    className: "[font-family:'Manrope',Helvetica] font-normal text-x-1e-0736",
  },
];

export const OfferDetailsSection = (): JSX.Element => {
  return (
    <section className="w-full" aria-label="Offer details">
      <Card className="h-auto w-full border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <p className="m-0 flex flex-wrap items-center gap-0 text-base leading-5 tracking-[0] sm:text-lg">
            {offerTextParts.map((part, index) => (
              <span key={`offer-text-part-${index}`} className={part.className}>
                {part.text}
              </span>
            ))}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
