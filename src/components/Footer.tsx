import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";
import { salonInfo, navLinks } from "@/data/content";

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-graphite text-cream pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-3">{salonInfo.name}</h3>
            <p className="text-cream/50 text-sm mb-5">
              {salonInfo.tagline} в {salonInfo.city}
            </p>
            <div className="flex gap-3">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={salonInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={salonInfo.twoGis}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush transition-colors"
                aria-label="2ГИС"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/50 text-sm hover:text-blush transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-cream/50 text-sm">
                <Phone size={15} className="text-gold" />
                <a
                  href={salonInfo.phoneLink}
                  className="hover:text-blush transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/50 text-sm">
                <MapPin size={15} className="text-gold" />
                ЖК «8 квартал», ул. Жамбыла, 106
              </li>
              <li className="flex items-center gap-2 text-cream/50 text-sm">
                <Instagram size={15} className="text-gold" />
                <a
                  href={salonInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors"
                >
                  {salonInfo.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-sm">
            © 2026 {salonInfo.name}
          </p>
          <p className="text-cream/30 text-xs">
            {salonInfo.city}, Казахстан
          </p>
        </div>
      </div>
    </footer>
  );
}
