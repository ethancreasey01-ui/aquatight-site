import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// items: [{ src, alt, caption?, sub? }]. Controlled: parent owns `index` and renders inside <AnimatePresence>.
export default function Lightbox({ items, index, onClose, onIndex }) {
  const count = items.length;
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % count);
      if (e.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onIndex]);

  if (!item) return null;
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button type="button" aria-label="Close" className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      {count > 1 && (
        <button type="button" aria-label="Previous photo" className="absolute left-2 sm:left-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + count) % count); }}>
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      <motion.figure key={item.src} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[75vh] max-w-full h-auto w-auto rounded-xl" />
        {item.caption && (
          <figcaption className="mt-3 px-10 text-center text-sm sm:text-base text-white">
            <span className="font-semibold">{item.caption}</span>
            {item.sub && <span className="text-white/70"> · {item.sub}</span>}
          </figcaption>
        )}
      </motion.figure>
      {count > 1 && (
        <button type="button" aria-label="Next photo" className="absolute right-2 sm:right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % count); }}>
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </motion.div>
  );
}
