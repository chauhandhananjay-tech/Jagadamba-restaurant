import { useState } from "react";
import { Flame, Leaf } from "lucide-react";
import { menuCategories } from "@/lib/menuData";
import { useReveal } from "@/hooks/useReveal";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { ref, revealed } = useReveal();

  const categoryItems =
    menuCategories.find((c) => c.id === activeCategory)?.items ?? [];

  const allTags = Array.from(
    new Set(categoryItems.flatMap((item) => item.tags)),
  ).sort();

  const activeItems = activeTag
    ? categoryItems.filter((item) => item.tags.includes(activeTag))
    : categoryItems;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveTag(null);
  };

  return (
    <section id="menu" className="bg-[#211814] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${revealed ? "revealed" : ""} text-center`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c9952b]">
            Our Menu
          </p>
          <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
            A Symphony of Spices
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            From smoky tandoor specialties to rich, slow-simmered curries —
            every dish is a tribute to the diversity and depth of Indian
            cuisine.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all ${
                activeCategory === category.id
                  ? "bg-[#c9952b] text-[#1a1410]"
                  : "border border-white/15 text-white/70 hover:border-[#c9952b]/50 hover:text-[#c9952b]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {activeTag && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-sm text-white/50">
              Filtered by{" "}
              <span className="font-semibold text-[#c9952b]">{activeTag}</span>
            </span>
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs uppercase tracking-wider text-white/40 underline transition-colors hover:text-[#c9952b]"
            >
              Clear filter
            </button>
          </div>
        )}

        {activeItems.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activeItems.map((item, idx) => (
              <article
                key={item.name}
                className="animate-scale-in group overflow-hidden rounded-2xl border border-white/10 bg-[#1a1410] transition-all hover:border-[#c9952b]/30 hover:shadow-2xl hover:shadow-black/40"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] to-transparent" />
                  <div className="absolute right-3 top-3 flex gap-2">
                    {item.spicy && (
                      <span className="flex items-center gap-1 rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        <Flame className="h-3 w-3" /> Spicy
                      </span>
                    )}
                    {item.vegetarian && (
                      <span className="flex items-center gap-1 rounded-full bg-green-600/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        <Leaf className="h-3 w-3" /> Veg
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif-display text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-lg font-bold text-[#c9952b]">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          setActiveTag((prev) => (prev === tag ? null : tag))
                        }
                        className={`cursor-pointer rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-all ${
                          activeTag === tag
                            ? "border-[#c9952b] bg-[#c9952b]/15 text-[#c9952b]"
                            : "border-white/10 text-white/50 hover:border-[#c9952b]/50 hover:text-[#c9952b]"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-white/10 bg-[#1a1410] py-20 text-center">
            <p className="text-lg text-white/50">
              No dishes match this filter in this category.
            </p>
            <button
              onClick={() => setActiveTag(null)}
              className="mt-4 rounded-full border border-[#c9952b] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#c9952b] transition-all hover:bg-[#c9952b] hover:text-[#1a1410]"
            >
              Show all dishes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
