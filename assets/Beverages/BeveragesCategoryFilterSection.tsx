import { useState } from "react";

const categories = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Matcha",
  "Mocktails",
  "Smoothies",
  "Juices",
  "Shakes",
];

export const BeverageCategoryFilterSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <section className="relative w-full self-center px-4 sm:px-6">
      <div className="flex w-full flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isActive}
              className={[
                "inline-flex h-9 items-center justify-center rounded-full px-4 py-1.5 transition-all",
                "[font-family:'Montserrat',Helvetica] text-sm font-medium tracking-[0] whitespace-nowrap border",
                isActive
                  ? "border-[#775596] bg-[#775596] text-white shadow-[inset_0px_-2px_4px_#ffffff40]"
                  : "border-[#e0d8e8] bg-white text-[#1e0736] hover:border-[#775596]/50 hover:bg-[#f9f5fe]",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};
