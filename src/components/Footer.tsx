import { useState } from "react";
import {
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type SubStatus = "idle" | "submitting" | "success" | "error";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "12:00 – 22:00" },
  { day: "Friday – Saturday", time: "12:00 – 23:00" },
  { day: "Sunday", time: "12:00 – 21:00" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reserve" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<SubStatus>("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus("submitting");
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });
    if (error) {
      if (error.code === "23505") {
        setSubStatus("success");
      } else {
        setSubStatus("error");
      }
    } else {
      setSubStatus("success");
      setEmail("");
    }
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#15100c] pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9952b]/40 bg-[#c9952b]/10">
                <UtensilsCrossed className="h-5 w-5 text-[#c9952b]" />
              </div>
              <div className="leading-none">
                <span className="font-serif-display block text-xl font-semibold tracking-wide text-white">
                  Jagadamba
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-[#c9952b]">
                  Restaurant
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Authentic Indian cuisine crafted with passion, tradition, and the
              finest ingredients. A dining experience that feels like home.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 transition-colors hover:text-[#c9952b]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Clock className="h-4 w-4 text-[#c9952b]" /> Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((entry) => (
                <li key={entry.day} className="flex flex-col">
                  <span className="text-sm font-medium text-white/80">
                    {entry.day}
                  </span>
                  <span
                    className={`text-xs ${entry.time === "Closed" ? "text-red-400/70" : "text-white/50"}`}
                  >
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9952b]" />
                <span className="text-sm text-white/50">
                  Kalawad Road, near 150 Ring Road
                  <br />
                  Rajkot, Gujarat 360005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#c9952b]" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/50 transition-colors hover:text-[#c9952b]"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#c9952b]" />
                <a
                  href="mailto:hello@jagadamba.com"
                  className="text-sm text-white/50 transition-colors hover:text-[#c9952b]"
                >
                  hello@jagadamba.com
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-5">
              <p className="mb-2 text-xs text-white/50">
                Subscribe for special offers and event updates.
              </p>
              {subStatus === "success" ? (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  You're subscribed!
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 rounded-lg border border-white/10 bg-[#1a1410] px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#c9952b]"
                  />
                  <button
                    type="submit"
                    disabled={subStatus === "submitting"}
                    className="flex shrink-0 items-center justify-center rounded-lg bg-[#c9952b] px-3 py-2 text-[#1a1410] transition-colors hover:bg-[#d4a536] disabled:opacity-60"
                    aria-label="Subscribe"
                  >
                    {subStatus === "submitting" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
              {subStatus === "error" && (
                <p className="mt-2 text-xs text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Jagadamba Restaurant. All rights
            reserved. Crafted with passion for authentic Indian cuisine.
          </p>
        </div>
      </div>
    </footer>
  );
}
