import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { reviews, salonInfo } from "@/data/content";

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] mx-3 bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(216,167,160,0.1)] border border-blush/5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill="#C8A96A"
              className="text-gold"
            />
          ))}
        </div>
        <Quote size={24} className="text-blush/20" />
      </div>

      <p className="text-graphite/80 text-sm leading-relaxed mb-5 min-h-[100px]">
        {review.text}
      </p>

      <div className="flex items-center justify-between border-t border-blush/10 pt-4">
        <div>
          <p className="text-graphite font-medium text-sm">{review.name}</p>
          <p className="text-graphite/40 text-xs">{review.date}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-blush/10 text-blush text-xs font-medium">
          {review.tag}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  // Duplicate reviews for seamless infinite scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative z-10 py-20 sm:py-28 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
            Отзывы
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-graphite mb-4">
            Что говорят клиенты
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
            <Star size={16} fill="#C8A96A" className="text-gold" />
            <span className="font-semibold text-graphite">5.0</span>
            <span className="text-graphite/50 text-sm">· 343 оценки в 2ГИС</span>
          </div>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex reviews-track animate-scroll-reviews w-max">
            {allReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
      </div>

      <div className="text-center mt-12 px-5">
        <a
          href={salonInfo.twoGisReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-graphite border border-blush/20 font-medium hover:bg-blush hover:text-white hover:border-blush transition-all duration-300 shadow-sm"
        >
          Все отзывы в 2ГИС
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
