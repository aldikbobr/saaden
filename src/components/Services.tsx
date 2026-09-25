import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Hand,
  Eye,
  Brush,
  PenTool,
  HeartHandshake,
  Home,
  GraduationCap,
  ChevronDown,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { services, salonInfo, type ServiceCategory } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Scissors,
  Hand,
  Eye,
  Brush,
  PenTool,
  HeartHandshake,
  Home,
  GraduationCap,
};

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const bookService = (category: ServiceCategory) => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу записаться на услугу: ${category.title}`
    );
    window.open(`${salonInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
            Наши услуги
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-graphite mb-4">
            Всё для вашего образа
          </h2>
          <p className="text-graphite/60 max-w-xl mx-auto">
            Нажмите на категорию, чтобы увидеть процедуры и цены
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category, i) => {
            const Icon = iconMap[category.icon] || Sparkles;
            const isExpanded = expandedId === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(216,167,160,0.08)] transition-all duration-500 ${
                    isExpanded ? "shadow-[0_8px_40px_rgba(216,167,160,0.18)]" : ""
                  }`}
                >
                  {/* Image header */}
                  <div className="relative h-40 overflow-hidden">
                    {/* TODO: заменить на фото салона */}
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Icon size={20} className="text-blush" />
                      </div>
                      <h3 className="text-white font-display text-lg font-medium">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-graphite/60 text-sm mb-4">
                      {category.description}
                    </p>

                    <button
                      onClick={() => toggle(category.id)}
                      className="flex items-center justify-between w-full text-sm font-medium text-graphite hover:text-blush transition-colors"
                    >
                      <span>{isExpanded ? "Свернуть" : "Показать процедуры"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2.5">
                            {category.items.map((item) => (
                              <li
                                key={item.name}
                                className="flex items-center justify-between text-sm py-1 border-b border-blush/10 last:border-0"
                              >
                                <span className="text-graphite/80">{item.name}</span>
                                <span className="text-gold font-medium whitespace-nowrap ml-3">
                                  {item.price}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => bookService(category)}
                            className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-blush/10 text-blush hover:bg-blush hover:text-white text-sm font-medium transition-all duration-300"
                          >
                            <MessageCircle size={16} />
                            Записаться
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
