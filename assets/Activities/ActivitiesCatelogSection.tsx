import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const activities = [
  {
    title: "Canvas Painting",
    description: '90-min Guided Session. Paints, Brushes, 12×16" Canvas.',
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1.png",
    price: "Rs 3,500",
    perks: ["+ Hot Coffee", "+ Hot Coffee"],
  },
  {
    title: "Bento Cake Decoration",
    description: 'Decorate A 4" Cake With Buttercream & Sprinkles.',
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-1.png",
    price: "Rs 2,800",
    perks: ["+ Iced Coffee", "+ Slice to take home"],
  },
  {
    title: "DIY Flower Cone Bouquet",
    description: "Build Your Own Seasonal Cone Bouquet With Our Florist.",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-2.png",
    price: "Rs 4,200",
    perks: ["+ Lavender Latte", "+ Brownie"],
  },
  {
    title: "DIY Charm Bracelet Bar",
    description: "Pick Beads & Charms — Make 2 Bracelets To Keep.",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-3.png",
    price: "Rs 2,200",
    perks: ["+ Mocktail", "+ Macaron"],
  },
  {
    title: "Tote-Bag Painting",
    description: "Paint A Cotton Tote With Fabric Paints.",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-4.png",
    price: "Rs 2,400",
    perks: ["+ Iced Tea", "+ Cookie"],
  },
  {
    title: "Paint Your Own Mug",
    description: "Ceramic Mug, Food-safe Paints. We Fire It For Pickup.",
    image: "https://c.animaapp.com/mp18tsxfgJ0g8r/img/21765-1-5.png",
    price: "Rs 2,600",
    perks: ["+ Hot Coffee", "+ Brownie"],
  },
];

export const ActivitiesCatalogSection = (): JSX.Element => {
  return (
    <section className="mt-5 w-full px-6">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {activities.map((activity) => (
          <Card
            key={activity.title}
            className="overflow-hidden rounded-[20px] border-0 bg-white shadow-drop-shadow"
          >
            <CardContent className="p-0">
              <article className="flex h-full flex-col">
                <img
                  className="h-[209.88px] w-full object-cover"
                  alt={activity.title}
                  src={activity.image}
                />
                <div className="flex flex-1 flex-col gap-6 px-5 py-3">
                  <div className="flex flex-1 flex-col gap-4">
                    <header>
                      <h3 className="[font-family:'Playfair_Display',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-x-1e-0736">
                        {activity.title}
                      </h3>
                    </header>
                    <p className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[19.6px] tracking-[0] text-x-1e-0736 opacity-70">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap items-start gap-2">
                      {activity.perks.map((perk, index) => (
                        <Badge
                          key={`${activity.title}-perk-${index}`}
                          variant="secondary"
                          className="rounded-[55px] bg-[#eee6fe] px-2 py-1 [font-family:'Montserrat',Helvetica] text-xs font-medium leading-[normal] tracking-[0] text-[#775596] hover:bg-[#eee6fe]"
                        >
                          {perk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="[font-family:'Bebas_Neue',Helvetica] text-xl font-normal leading-[normal] tracking-[0] whitespace-nowrap text-[#370c64]">
                      {activity.price}
                    </p>
                    <Button
                      type="button"
                      className="h-auto flex-1 rounded-[10px] bg-[#775596] px-4 py-2.5 text-base font-medium text-white shadow-[inset_0px_-2px_4px_#ffffff73] hover:bg-[#775596]/95"
                    >
                      <span className="[font-family:'Inter',Helvetica] leading-[normal] tracking-[0]">
                        + Add
                      </span>
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
