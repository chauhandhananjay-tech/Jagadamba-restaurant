import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Chef", href: "#chef" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reserve" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1410]/95 backdrop-blur-md py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9952b]/40 bg-[#c9952b]/10">
            <UtensilsCrossed className="h-5 w-5 text-[#c9952b]" />
          </div>
          <div className="text-left leading-none">
            <span className="font-serif-display block text-xl font-semibold tracking-wide text-white">
              Jagadamba
            </span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[#c9952b]">
              Restaurant
            </span>
          </div>
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-[#c9952b]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#reserve")}
          className="hidden rounded-full border border-[#c9952b] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#c9952b] transition-all hover:bg-[#c9952b] hover:text-[#1a1410] lg:block"
        >
          Book a Table
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="animate-fade-in lg:hidden">
          <ul className="mx-6 mt-4 space-y-1 rounded-2xl bg-[#1a1410] p-6 shadow-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full py-3 text-left text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-[#c9952b]"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick("#reserve")}
                className="mt-2 block w-full rounded-full border border-[#c9952b] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#c9952b] transition-all hover:bg-[#c9952b] hover:text-[#1a1410]"
              >
                Book a Table
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
