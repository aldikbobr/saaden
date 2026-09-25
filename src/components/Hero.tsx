import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowDown } from "lucide-react";
import { salonInfo, heroImage } from "@/data/content";

export default function Hero() {
  const bookUrl = `${salonInfo.whatsapp}?text=${salonInfo.whatsappText}`;

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Салон красоты Saadyan studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-graphite/30 to-graphite/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-graphite/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white text-sm mb-6"
        >
          <Star size={14} fill="#C8A96A" className="text-gold" />
          <span className="font-medium">5.0</span>
          <span className="text-white/70">·</span>
          <span className="text-white/90">343 оценки в 2ГИС</span>
          <span className="text-white/70">·</span>
          <span className="text-gold-light">2GIS Awards 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
        >
          Мастерская красоты
          <br />
          <span className="text-gradient-gold">в Петропавловске</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Макияж, причёски, маникюр, ресницы и брови —
          <br className="hidden sm:block" />
          полный образ в одном месте
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blush text-white font-medium text-base hover:bg-blush-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle size={20} />
            Записаться в WhatsApp
          </a>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark text-white border border-white/30 font-medium text-base hover:bg-white/20 transition-all duration-300"
          >
            Смотреть услуги
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Прокрутить вниз"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
