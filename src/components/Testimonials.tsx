import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { Review } from "@/lib/types";
import { useReveal } from "@/hooks/useReveal";

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, revealed } = useReveal();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setReviews(data);
      setLoading(false);
    })();
  }, []);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#211814] py-24 md:py-32"
    >
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-7xl px-6`}
      >
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c9952b]">
            Guest Reviews
          </p>
          <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
            Words From Our Patrons
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            The joy of our guests is the truest measure of our craft.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="relative rounded-2xl border border-white/10 bg-[#1a1410] p-8 transition-all hover:border-[#c9952b]/30 hover:shadow-xl"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-[#c9952b]/20" />

                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-[#c9952b] text-[#c9952b]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  &ldquo;{review.comment}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9952b]/15 font-serif-display text-lg font-semibold text-[#c9952b]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="text-xs text-white/40">
                      {new Date(review.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
