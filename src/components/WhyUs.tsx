import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Heart,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { whyUs } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Heart,
  CalendarCheck,
};

export default function WhyUs() {
  return (
    <section className="relative z-10 py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
            Почему мы
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-graphite">
            Нам доверяют красоту
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 text-center shadow-[0_4px_24px_rgba(216,167,160,0.08)] hover:shadow-[0_8px_40px_rgba(216,167,160,0.15)] transition-shadow duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-blush" />
                </div>
                <h3 className="font-display text-xl text-graphite mb-3">
                  {item.title}
                </h3>
                <p className="text-graphite/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
