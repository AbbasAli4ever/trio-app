import { Card, CardContent } from "../../../../components/ui/card";

const menuCategories = [
  {
    id: "1",
    title: "Savouries",
    image: "https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg",
    items: [
      {
        text: "Cucumber & Cream Cheese Sandwich",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame-1.svg",
        iconClassName: "w-3 h-4",
      },
      {
        text: "Chicken Tikka Slider",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Mini Quiche",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Spinach & Feta Roll",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
    ],
  },
  {
    id: "2",
    title: "Scones",
    image: "https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg",
    items: [
      {
        text: "Buttermilk Scone",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame-1.svg",
        iconClassName: "w-3 h-4",
      },
      {
        text: "Clotted Cream",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "House Strawberry Preserve",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Lemon Curd",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
    ],
  },
  {
    id: "3",
    title: "Sweets",
    image: "https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg",
    items: [
      {
        text: "Macaron of the Day",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame-1.svg",
        iconClassName: "w-3 h-4",
      },
      {
        text: "Lemon Tartlet",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Chocolate Eclair",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Mini Cheesecake",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
    ],
  },
  {
    id: "4",
    title: "Tea Pairing",
    image: "https://c.animaapp.com/mp158p9uFQYlPn/img/rectangle-5.svg",
    items: [
      {
        text: "Earl Grey",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame-1.svg",
        iconClassName: "w-3 h-4",
      },
      {
        text: "Moroccan Mint",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Kashmiri Pink Chai",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
      {
        text: "Chamomile",
        icon: "https://c.animaapp.com/mp158p9uFQYlPn/img/frame.svg",
        iconClassName: "w-3 h-3",
      },
    ],
  },
];

export const MenuCategoriesSection = (): JSX.Element => {
  return (
    <section
      aria-label="Hi-Tea menu categories"
      className="relative w-full self-stretch"
    >
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {menuCategories.map((category, index) => (
          <Card
            key={`${category.title}-${index}`}
            className="relative overflow-hidden rounded-[20px] border-0 bg-white shadow-drop-shadow"
          >
            <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 inline-flex h-[30px] min-w-[30px] items-center justify-center rounded-[55px] bg-white px-2.5 py-1">
              <span className="[font-family:'Bebas_Neue',Helvetica] text-2xl font-normal leading-none tracking-[0] text-[#775596]">
                {category.id}
              </span>
            </div>
            <CardContent className="p-0">
              <article className="flex h-full flex-row items-stretch">
                <img
                  className="h-auto w-32 shrink-0 object-cover sm:w-40 md:w-44 lg:w-48"
                  alt={category.title}
                  src={category.image}
                />
                <div className="flex min-w-0 flex-1 flex-col px-4 py-3 sm:px-5">
                  <header className="mb-3">
                    <h3 className="[font-family:'Playfair_Display',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-x-1e-0736">
                      {category.title}
                    </h3>
                  </header>
                  <ul className="flex flex-col gap-2 pb-1.5">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={`${category.title}-item-${itemIndex}`}
                        className="flex items-start gap-2"
                      >
                        <img
                          className={`mt-0.5 shrink-0 ${item.iconClassName}`}
                          alt=""
                          aria-hidden="true"
                          src={item.icon}
                        />
                        <span className="flex-1 [font-family:'Montserrat',Helvetica] text-xs font-medium leading-[normal] tracking-[0] text-[#775596]">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};