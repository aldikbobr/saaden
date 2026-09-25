import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import { salonInfo } from "@/data/content";

export default function FloatingSocial() {
  const bookUrl = `${salonInfo.whatsapp}?text=${salonInfo.whatsappText}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 sm:right-6 bottom-5 sm:bottom-8 z-40 flex flex-col gap-3"
    >
      <a
        href={bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blush flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle
          size={24}
          className="text-white group-hover:scale-110 transition-transform"
        />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          WhatsApp
        </span>
      </a>
      <a
        href={salonInfo.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-gold via-blush to-gold-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Instagram"
      >
        <Instagram
          size={24}
          className="text-white group-hover:scale-110 transition-transform"
        />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-graphite text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          Instagram
        </span>
      </a>
    </motion.div>
  );
}
