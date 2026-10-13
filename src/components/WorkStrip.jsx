import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { WORK, workSrc } from "../data/index.js";
import Lightbox from "./Lightbox.jsx";

// Auto-scrolling photo strip. Pauses on hover/focus; under prefers-reduced-motion it
// stops animating and becomes a manually scrollable row (see .work-strip in index.css).
export default function WorkStrip() {
  const [open, setOpen] = useState(null);
  const n = WORK.length;
  if (n === 0) return null;
  // enough copies per half that the loop never shows a gap, then doubled for the -50% loop
  const reps = Math.max(1, Math.ceil(8 / n));
  const half = Array.from({ length: reps }, () => WORK).flat();
  const loop = [...half, ...half];
  const items = WORK.map((p) => ({ src: workSrc(p.id, 1600), alt: `${p.caption}, ${p.place}`, caption: p.caption, sub: p.place }));

  return (
    <>
      <div className="work-strip-wrap">
        <div className="work-strip" role="list" aria-label="Photos of recent Aquatight jobs">
          {loop.map((p, i) => {
            const dup = i >= n; // only the first copy is exposed to keyboard/AT
            return (
              <button
                key={i}
                type="button"
                role="listitem"
                tabIndex={dup ? -1 : 0}
                aria-hidden={dup || undefined}
                onClick={() => setOpen(i % n)}
                aria-label={`View photo: ${p.caption}, ${p.place}`}
                className={`work-strip-slide group${dup ? " work-strip-dup" : ""}`}
              >
                <img
                  src={workSrc(p.id, 800)}
                  alt={dup ? "" : `${p.caption}, ${p.place}`}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                  <Eye className="h-7 w-7 text-white opacity-0 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
      </AnimatePresence>
    </>
  );
}
