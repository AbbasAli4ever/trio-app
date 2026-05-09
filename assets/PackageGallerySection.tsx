import { Card, CardContent } from "../../../../components/ui/card";

const packageRows = [
  [
    {
      title: "Red Decor-Classic",
      price: "Rs 5,000",
      description: "Rose Centerpiece With Candle Light, Romantic & Intimate",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1.png",
      imageClassName: "object-cover",
    },
    {
      title: "Red Decor-with cake & bouquet",
      price: "Rs 5,000",
      description:
        "Rose Centrepiece, Candle Light, Plus A Fresh Bouquet And Cake On Us.",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-1.png",
      imageClassName: "object-cover",
    },
    {
      title: "White Decor - Floral Arch",
      price: "Rs 12,000",
      description:
        "Table Floral Arrangement, Custom Card And A Back Floral Arch. includes Cake.",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-2.png",
      imageClassName: "object-cover",
    },
  ],
  [
    {
      title: "Pink & White — Artificial",
      price: "Rs 5,000",
      description:
        "Vases Of Pink And White Artificial Flowers With Candle Light. Soft And pretty.",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-3.png",
      imageClassName: "object-cover",
    },
    {
      title: "Black & Silver Balloons",
      price: "Rs 10,000",
      description:
        "Full Balloon Backdrop With Three Placement Decks For Cakes And gifts. Fairy Lights And Happy Birthday Tag.",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-4.png",
      imageClassName: "object-cover",
    },
    {
      title: "Pink & White — Fresh Florals",
      price: "Rs 15,000",
      description:
        "Fresh Pink And White Florals, Candle Light And A Custom Card.",
      image: "https://c.animaapp.com/moybk94uF21O9Y/img/21765-1-5.png",
      imageClassName: "object-cover",
    },
  ],
];

export const PackageGallerySection = (): JSX.Element => {
  return (
    <section className="relative mt-8 w-full px-4 sm:px-6">
      <div className="flex w-full flex-col items-start gap-5">
        <header className="flex w-full max-w-[968px] flex-col items-start gap-1">
          <p className="mt-[-1.00px] flex items-center self-stretch [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[normal] tracking-[2.00px] text-[#775596]">
            BIRTHDAYS · ANNIVERSARIES · BRIDAL · PROPOSALS · EVENTS
          </p>
          <div className="self-stretch text-x-1e-0736">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-2xl font-semibold leading-[48px] text-[#1d0636]">
              Set The Scene
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-sm font-medium leading-7 text-[#1d0636b2]">
              Pick A Package, Then Customise The Palette, Flowers And Finishing
              Touches
            </p>
          </div>
        </header>
        <div className="flex w-full flex-col gap-4">
          {packageRows.map((row, rowIndex) => (
            <div
              key={`package-row-${rowIndex}`}
              className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {row.map((item) => (
                <Card
                  key={item.title}
                  className="overflow-hidden rounded-[20px] border-0 bg-white shadow-drop-shadow"
                >
                  <CardContent className="p-0">
                    <article className="flex h-full flex-col">
                      <img
                        className={`h-[209.88px] w-full ${item.imageClassName}`}
                        alt={item.title}
                        src={item.image}
                      />
                      <div className="flex flex-1 flex-col items-start gap-4 px-5 py-3">
                        <div className="flex w-full items-start gap-4">
                          <h3 className="mt-[-1.00px] flex-1 [font-family:'Playfair_Display',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-x-1e-0736">
                            {item.title}
                          </h3>
                          <p className="shrink-0 whitespace-nowrap [font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-[31px] tracking-[0] text-[#370c64]">
                            {item.price}
                          </p>
                        </div>
                        <p className="self-stretch [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0] text-x-1e-0736 opacity-70">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
