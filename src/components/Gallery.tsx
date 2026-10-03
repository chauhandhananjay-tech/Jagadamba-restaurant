import { galleryImages } from "@/lib/galleryData";
import { useReveal } from "@/hooks/useReveal";

export default function Gallery() {
  const { ref, revealed } = useReveal();

  return (
    <section id="gallery" className="bg-[#1a1410] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${revealed ? "revealed" : ""} text-center`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c9952b]">
            Gallery
          </p>
          <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
            Moments at Jagadamba
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            A glimpse into the ambiance, the craft, and the culinary artistry
            that defines every visit.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl ${
                image.span ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
