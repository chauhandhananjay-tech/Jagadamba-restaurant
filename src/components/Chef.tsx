import { Leaf, Flame, Heart } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    text: "Locally sourced produce and hand-ground spices, prepared fresh every morning.",
  },
  {
    icon: Flame,
    title: "Traditional Tandoor",
    text: "Authentic clay-oven cooking that locks in flavor and imparts that signature smoky char.",
  },
  {
    icon: Heart,
    title: "Family Recipes",
    text: "Dishes passed down through generations, honoring the heritage of Indian home cooking.",
  },
];

export default function About() {
  const { ref, revealed } = useReveal();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1a1410] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${revealed ? "revealed" : ""} grid items-center gap-16 lg:grid-cols-2`}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000"
                alt="Chefs cooking in the Jagadamba kitchen"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden h-48 w-48 overflow-hidden rounded-2xl border-4 border-[#1a1410] shadow-xl md:block lg:-right-8 lg:h-60 lg:w-60">
              <img
                src="https://images.pexels.com/photos/15689896/pexels-photo-15689896.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Chef plating a dish"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-4 `-z-0` h-32 w-32 rounded-2xl bg-[#c9952b]/10 lg:h-40 lg:w-40" />
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c9952b]">
              Our Story
            </p>
            <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
              A Legacy of Flavor, Crafted With Passion
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Founded in 1998, Jagadamba Restaurant was born from a simple dream
              — to share the authentic flavors of India with the world. What
              began as a small family kitchen has grown into a beloved dining
              destination, yet our philosophy remains unchanged: cook with
              heart, serve with warmth, and treat every guest like family.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Every dish tells a story — of generations of home cooks, of spice
              markets bustling with color and aroma, of celebrations shared
              around a laden table. We invite you to be part of our story.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-[#c9952b]/40 hover:bg-[#c9952b]/5"
                >
                  <feature.icon className="mb-3 h-7 w-7 text-[#c9952b] transition-transform group-hover:scale-110" />
                  <h3 className="mb-1.5 text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/60">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
