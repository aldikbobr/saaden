import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems, galleryFilters } from "@/data/content";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const closeLightbox = () => setLightbox(null);

  const showPrev = () => {
    if (lightbox === null) return;
    setLightbox((prev) =>
      prev === null ? 0 : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (lightbox === null) return;
    setLightbox((prev) =>
      prev === null ? 0 : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
            Портфолио
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-graphite mb-4">
            Работы наших мастеров
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.id
                  ? "bg-blush text-white shadow-md"
                  : "bg-white text-graphite/70 hover:bg-blush/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() =>
                  setLightbox(
                    filteredItems.findIndex((i) => i.id === item.id)
                  )
                }
              >
                {/* TODO: заменить на фото салона */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-graphite/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 text-white/60 hover:text-white text-3xl font-light transition-colors z-10"
              aria-label="Предыдущее"
            >
              ‹
            </button>

            <motion.img
              key={filteredItems[lightbox]?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={filteredItems[lightbox]?.src}
              alt={filteredItems[lightbox]?.alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 text-white/60 hover:text-white text-3xl font-light transition-colors z-10"
              aria-label="Следующее"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
