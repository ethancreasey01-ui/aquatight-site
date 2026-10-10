import { useRef, useState } from "react";
import { workSrc } from "../data/index.js";

// Draggable before/after slider. before/after = { id, w, h } (files public/work/<id>-800|1600.webp).
// Keyboard: focus the handle, Left/Right (Shift = bigger step), Home/End.
export default function BeforeAfter({ before, after, label }) {
  const box = useRef(null);
  const [pos, setPos] = useState(50);
  if (!before || !after) return null;

  const setFromX = (clientX) => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };
  const img = (im, alt) => (
    <img
      src={workSrc(im.id, 1600)}
      srcSet={`${workSrc(im.id, 800)} 800w, ${workSrc(im.id, 1600)} 1600w`}
      sizes="(min-width: 1024px) 60vw, 100vw"
      alt={alt}
      width={im.w}
      height={im.h}
      loading="lazy"
      decoding="async"
      draggable="false"
      className="absolute inset-0 h-full w-full object-cover select-none"
    />
  );

  return (
    <div
      ref={box}
      className="relative w-full overflow-hidden rounded-2xl bg-gray-100 touch-pan-y select-none"
      style={{ aspectRatio: `${after.w} / ${after.h}` }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); setFromX(e.clientX); }}
      onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) setFromX(e.clientX); }}
    >
      {img(after, `${label}, after`)}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {img(before, `${label}, before`)}
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">Before</span>
      <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">After</span>
      <div className="absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} aria-hidden="true" />
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before`}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-sm font-bold shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-[#0a8fa6]"
        style={{ left: `${pos}%`, color: "#0a8fa6" }}
      >
        <span aria-hidden="true">&#8596;</span>
      </div>
    </div>
  );
}
