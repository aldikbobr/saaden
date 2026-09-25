import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { salonInfo, services } from "@/data/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    branch: "",
    datetime: "",
    comment: "",
  });

  const allServiceTitles = services.map((s) => s.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Здравствуйте! Хочу записаться
Имя: ${form.name}
Телефон: ${form.phone}
Услуга: ${form.service}
Филиал: ${form.branch || "ЖК «8 квартал»"}
Дата и время: ${form.datetime}
Комментарий: ${form.comment || "—"}`;
    window.open(
      `${salonInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-2xl border border-blush/20 bg-cream text-graphite text-sm outline-none focus:border-blush transition-colors placeholder:text-graphite/30";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-graphite/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-cream rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-cream flex items-center justify-between p-6 border-b border-blush/10 z-10">
              <h3 className="font-display text-xl text-graphite">
                Запись в салон
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 text-graphite/50 hover:text-blush transition-colors"
                aria-label="Закрыть"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 ___ ___ __ __"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Услуга
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Выберите услугу</option>
                  {allServiceTitles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Филиал
                </label>
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className={inputClass}
                >
                  <option value="">ЖК «8 квартал», ул. Жамбыла, 106</option>
                </select>
              </div>

              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Дата и время
                </label>
                <input
                  type="text"
                  value={form.datetime}
                  onChange={(e) =>
                    setForm({ ...form, datetime: e.target.value })
                  }
                  placeholder="Например: 28 сентября, 14:00"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-graphite/60 text-xs font-medium mb-1.5">
                  Комментарий
                </label>
                <textarea
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                  placeholder="Дополнительные пожелания"
                  rows={2}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-blush text-white font-medium hover:bg-blush-dark transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                Отправить в WhatsApp
              </button>

              <p className="text-center text-graphite/40 text-xs">
                Нажимая «Отправить», вы перейдёте в WhatsApp с готовым сообщением
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
