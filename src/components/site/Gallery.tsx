import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/lib/assets";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {gallery.map((g, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: (i % 6) * 0.08, ease: "easeOut" }}
            onClick={() => setActive(i)}
            className="group mb-5 block w-full overflow-hidden rounded-3xl bg-white/60 shadow-[0_20px_50px_-20px_rgba(233,30,99,0.35)] ring-1 ring-white/60 transition-all hover:-translate-y-1 hover:shadow-glow"
            style={{ breakInside: "avoid" }}
          >
            <div className="relative overflow-hidden">
              <img
                src={g.url}
                alt={g.title}
                loading="lazy"
                className="w-full origin-center object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                style={{ aspectRatio: g.h === "tall" ? "3/4" : g.h === "short" ? "4/3" : "1/1" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 text-left text-white transition-transform duration-500 group-hover:translate-y-0">
                <div className="inline-block rounded-full glass-dark px-3 py-1.5 text-xs">
                  {g.title}
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-x-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass-dark text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-5 grid h-12 w-12 place-items-center rounded-full glass-dark text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-5 bottom-1/2 grid h-12 w-12 translate-y-1/2 place-items-center rounded-full glass-dark text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={gallery[active].url}
              alt={gallery[active].title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full glass-dark px-5 py-2 text-sm text-white">
              {gallery[active].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}