import { motion } from "framer-motion";
import { MessageCircle, Calendar, Heart } from "lucide-react";
import { salonInfo, bridalImage } from "@/data/content";

export default function Bridal() {
  const bookUrl = `${salonInfo.whatsapp}?text=${encodeURIComponent(
    "Здравствуйте! Хочу узнать детали об образе невесты"
  )}`;

  return (
    <section
      id="bridal"
      className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-1"
          >
            {/* TODO: заменить на фото салона */}
            <img
              src={bridalImage}
              alt="Образ невесты в Saadyan studio"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 to-transparent" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-2"
          >
            <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
              Особенный день
            </p>
            <h2 className="font-display text-3xl sm:text-5xl text-graphite mb-6 leading-tight">
              Образ невесты
              <span className="block text-gradient-gold">под ключ</span>
            </h2>
            <p className="text-graphite/70 text-lg mb-8 leading-relaxed">
              Макияж и причёска, которые продержатся весь день — от утренних сборов
              до последнего танца. Стойкие материалы, проверенные техники и
              внимание к каждой детали вашего образа.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Heart, text: "Макияж и причёска в одном месте" },
                { icon: Calendar, text: "Стойкость на весь день" },
                { icon: MessageCircle, text: "Выезд мастера на дом" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-blush/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-blush" />
                  </div>
                  <span className="text-graphite/80 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blush text-white font-medium hover:bg-blush-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={20} />
              Узнать детали в WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
