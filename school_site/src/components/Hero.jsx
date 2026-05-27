import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// Best wide/landscape real school photos
const heroImages = [
  "/src/assets/images/hero_1.png",
  "/src/assets/images/hero_2.png",
  "/src/assets/images/hero_3.png",
  "/src/assets/images/hero_4.png",
  "/src/assets/images/hero_5.png",
  "/src/assets/images/hero_6.png",
  "/src/assets/images/hero_7.png",
];

export default function Hero({ onStart, onNavigate }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx) => {
    setDirection(idx > currentIdx ? 1 : -1);
    setCurrentIdx(idx);
  }, [currentIdx]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 4500);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-ink">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIdx}
            src={heroImages[currentIdx]}
            alt={`TDMS Slide ${currentIdx + 1}`}
            custom={direction}
            variants={{
              enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.7 }),
              center: { x: "0%", opacity: 1 },
              exit:  (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.7 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90 z-10" />
      </div>

      {/* ── Text Content — pinned above stats bar ── */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center sm:items-start"
          >
            <span className="inline-block px-3 py-1 bg-gold/25 text-gold text-[9px] sm:text-xs uppercase font-extrabold tracking-[0.3em] rounded-full mb-4 border border-gold/40 backdrop-blur-md">
              Est. 1924 • Maldahiya, Varanasi
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.15] sm:leading-[1.1] font-medium text-paper mb-4 md:mb-6 tracking-tight text-center sm:text-left">
              Legacy of <span className="text-gold italic">Excellence</span>,{" "}
              <br className="hidden sm:inline" />
              Future of <span className="font-light italic">Impact</span>.
            </h1>
            <p className="text-paper/90 text-xs sm:text-base md:text-lg max-w-xl mb-6 md:mb-8 font-light leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
              Nurturing excellence and future-ready leaders since 1924.
            </p>
            <div className="flex flex-row gap-3 w-full justify-center sm:justify-start items-center">
              <button
                onClick={onStart}
                className="px-6 py-3 sm:px-8 sm:py-3.5 bg-gold text-ink text-[10px] sm:text-[11px] uppercase font-extrabold tracking-[0.2em] rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20 cursor-pointer"
              >
                Apply 2026-27
              </button>
              <button
                onClick={() => onNavigate("gallery")}
                className="px-6 py-3 sm:px-8 sm:py-3.5 border border-paper/40 text-paper text-[10px] sm:text-[11px] uppercase font-extrabold tracking-[0.2em] rounded-full hover:bg-paper hover:text-ink transition-all hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
              >
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Dot Navigation — centered at very bottom above stats ── */}
      <div className="absolute bottom-10 sm:bottom-12 left-0 right-0 z-30 flex justify-center items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full border-0 outline-none cursor-pointer transition-all duration-300 ${
              i === currentIdx
                ? "w-7 h-3 bg-gold"
                : "w-3 h-3 bg-paper/40 hover:bg-paper/80"
            }`}
          />
        ))}
      </div>

      {/* ── Bottom Stats Bar ── */}
      <div className="absolute bottom-0 left-0 w-full bg-black/70 border-t border-gold/20 py-2.5 sm:py-3 backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-row justify-between items-center text-paper/85 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] font-extrabold">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>500+ Students</span>
          </div>
          <div className="flex items-center gap-1.5 text-gold">
            <span>•</span><span>Est. 1924 Varanasi</span><span>•</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
            <span>CBSE Affiliated</span>
          </div>
        </div>
      </div>

    </section>
  );
}
