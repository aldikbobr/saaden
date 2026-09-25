import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { salonInfo, navLinks } from "@/data/content";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const bookUrl = `${salonInfo.whatsapp}?text=${salonInfo.whatsappText}`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_2px_20px_rgba(216,167,160,0.15)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-display text-xl sm:text-2xl font-medium tracking-wide transition-colors ${
              scrolled ? "text-graphite" : "text-white"
            }`}
          >
            {salonInfo.name}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-blush ${
                  scrolled ? "text-graphite" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-blush text-white hover:bg-blush-dark shadow-md"
                  : "glass-dark text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              Записаться
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-1.5 transition-colors ${
                scrolled ? "text-graphite" : "text-white"
              }`}
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-graphite/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-blush/20">
                <span className="font-display text-lg text-graphite">
                  {salonInfo.name}
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-graphite hover:text-blush transition-colors"
                  aria-label="Закрыть меню"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 px-4 rounded-2xl text-graphite hover:bg-blush/10 font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <a
                  href={bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blush text-white py-3.5 rounded-full font-medium hover:bg-blush-dark transition-colors"
                >
                  Записаться в WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
