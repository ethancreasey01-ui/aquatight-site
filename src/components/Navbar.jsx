import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/index.js";

const AQUA = "#0a8fa6";
const AQUA_HOVER = "#0a7285";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        <a href="#" className="flex items-center">
          <img
            src="/logos/aqua-tight.png"
            alt="Aquatight Waterproofing"
            className="h-12 w-auto transition-all duration-300"
            style={transparent ? { filter: "brightness(0) invert(1)" } : {}}
          />
        </a>

        <nav className="hidden md:flex items-center gap-6" onMouseLeave={() => setHovered(null)}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setHovered(l.label)}
              className={`relative text-sm font-medium transition-colors ${
                transparent ? "text-white/80 hover:text-white" : "text-neutral-600"
              }`}
              style={!transparent && hovered === l.label ? { color: AQUA } : {}}
            >
              {l.label}
              {hovered === l.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: transparent ? "rgba(255,255,255,0.7)" : AQUA }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: AQUA }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
          >
            <Phone className="w-3.5 h-3.5" />
            Get a Quote
          </a>
        </nav>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${transparent ? "text-white" : "text-neutral-700"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-neutral-200 shadow-lg"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg transition-colors hover:bg-aqua-50"
                  onMouseEnter={e => { e.currentTarget.style.color = AQUA; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ""; }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                style={{ backgroundColor: AQUA }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
