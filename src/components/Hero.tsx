import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Elegant restaurant interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1410]/80 via-[#1a1410]/60 to-[#1a1410]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in-up mb-6 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#c9952b] text-[#c9952b]" />
          ))}
        </div>

        <p
          className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-[0.4em] text-[#c9952b]"
          style={{ animationDelay: "0.1s" }}
        >
          Authentic Indian Cuisine Since 1998
        </p>

        <h1
          className="animate-fade-in-up font-serif-display text-5xl font-bold leading-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.2s" }}
        >
          Jagadamba
          <span className="block text-[#c9952b]">Restaurant</span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          style={{ animationDelay: "0.3s" }}
        >
          A celebration of bold spices, time-honored recipes, and warm
          hospitality. Experience the soul of Indian dining in an atmosphere
          crafted with love.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => scrollTo("#reserve")}
            className="rounded-full bg-[#c9952b] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1410] transition-all hover:scale-105 hover:bg-[#d4a536] hover:shadow-xl hover:shadow-[#c9952b]/30"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollTo("#menu")}
            className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-[#c9952b] hover:text-[#c9952b]"
          >
            Explore Menu
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-[#c9952b]"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
