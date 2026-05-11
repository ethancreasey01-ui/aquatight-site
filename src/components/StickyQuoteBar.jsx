import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const AQUA = "#0a8fa6";
const AQUA_HOVER = "#0a7285";

export default function StickyQuoteBar() {
  const [visible, setVisible] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const contactEl = document.getElementById("contact");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.75;
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        const nearContact = rect.top < window.innerHeight * 0.85;
        setVisible(pastHero && !nearContact);
      } else {
        setVisible(pastHero);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 border-t border-neutral-200 shadow-2xl bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-2 min-w-0">
              <span className="font-bold text-neutral-900 text-sm whitespace-nowrap">Aquatight Waterproofing</span>
              <span className="text-neutral-300 text-sm">—</span>
              <span className="text-neutral-500 text-sm truncate">Melbourne's Waterproofing Specialists</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href="tel:0438499146"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                <Phone className="w-4 h-4" style={{ color: AQUA }} />
                0438 499 146
              </a>

              <div className="hidden sm:block w-px h-5 bg-neutral-200" />

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                style={{ backgroundColor: AQUA }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
              >
                Get a Free Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
