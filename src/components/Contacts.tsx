import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Wifi, CreditCard, Navigation } from "lucide-react";
import { salonInfo, branch } from "@/data/content";

export default function Contacts() {
  const phoneUrl = salonInfo.phoneLink;
  const routeUrl = salonInfo.twoGisRoute;

  return (
    <section
      id="contacts"
      className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blush font-medium text-sm tracking-widest uppercase mb-3">
            Контакты
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-graphite">
            Где нас найти
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_4px_24px_rgba(216,167,160,0.1)]"
          >
            <h3 className="font-display text-2xl text-graphite mb-2">
              {branch.name}
            </h3>
            <p className="text-graphite/60 text-sm mb-6">
              {salonInfo.city}, Казахстан
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blush" />
                </div>
                <div>
                  <p className="text-graphite font-medium text-sm">Адрес</p>
                  <p className="text-graphite/60 text-sm">{branch.address}</p>
                  <p className="text-graphite/40 text-xs mt-1">
                    {branch.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-blush" />
                </div>
                <div>
                  <p className="text-graphite font-medium text-sm">Режим работы</p>
                  <p className="text-graphite/60 text-sm">{salonInfo.hours}</p>
                  <p className="text-graphite/40 text-xs">{salonInfo.hoursNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blush/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-blush" />
                </div>
                <div>
                  <p className="text-graphite font-medium text-sm">Телефон</p>
                  <a
                    href={phoneUrl}
                    className="text-graphite/60 text-sm hover:text-blush transition-colors"
                  >
                    {salonInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-graphite/50 text-sm">
                  <CreditCard size={16} className="text-gold" />
                  {salonInfo.payment}
                </div>
                <div className="flex items-center gap-2 text-graphite/50 text-sm">
                  <Wifi size={16} className="text-gold" />
                  {salonInfo.wifi}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-blush text-white text-sm font-medium hover:bg-blush-dark transition-colors"
              >
                <Navigation size={16} />
                Маршрут
              </a>
              <a
                href={phoneUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-cream border border-blush/20 text-graphite text-sm font-medium hover:bg-blush/10 transition-colors"
              >
                <Phone size={16} />
                Позвонить
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(216,167,160,0.1)] min-h-[400px] bg-white"
          >
            <iframe
              src="https://2gis.kz/petropavlovsk/firm/70000001094471392/center/69.15518,54.866267/zoom(16)"
              title="Карта — Saadyan studio на 2ГИС"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
