import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  const filteredImages = selectedFilter === "All"
    ? images
    : images.filter(img => img.category === selectedFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  const handlePrev = () => {
    setLightboxIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Visual Journey</span>
            <h1 className="text-5xl font-serif mb-6 lowercase leading-tight text-ink">Campus <span className="italic font-light">Moments</span>.</h1>
            <p className="text-text-subtle text-base font-light leading-relaxed">
              Explore the environment where innovation meets history. Our campus is designed to inspire creativity and collaboration.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {["All", "Campus", "Academic", "Sports", "Events"].map((filter) => (
              <button 
                key={filter} 
                onClick={() => setSelectedFilter(filter)}
                className={`text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border transition-all ${
                  selectedFilter === filter 
                    ? 'bg-ink border-ink text-paper' 
                    : 'border-ink/10 text-ink hover:bg-gold hover:text-paper hover:border-gold transition-colors duration-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center text-paper">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-12 h-12 border border-paper/20 rounded-full flex items-center justify-center mb-4 bg-paper/10 backdrop-blur-sm"
                >
                  <Maximize2 className="w-5 h-5 text-gold" />
                </motion.div>
                <h3 className="text-xl font-serif mb-2 text-white">{img.title}</h3>
                <p className="text-[9px] uppercase font-bold tracking-widest opacity-75 text-gold">TDMS Archives • {img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Slider Component */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gradient-to-b from-black/60 to-transparent z-10">
              <div className="text-white/60 text-xs font-mono">
                {lightboxIndex + 1} / {filteredImages.length}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="p-2 mr-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Next / Previous Sidebar click pads & buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 z-20 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-20 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Interactive Slide Arena */}
            <div 
              className="w-full max-w-5xl px-16 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative aspect-[4/3] w-full max-h-[70vh] flex items-center justify-center"
                >
                  <img
                    src={filteredImages[lightboxIndex]?.url}
                    alt={filteredImages[lightboxIndex]?.title}
                    className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl border border-white/5"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption details overlay at the bottom */}
              <div className="text-center mt-6 max-w-xl">
                <motion.h4 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-white text-2xl font-serif tracking-wide"
                >
                  {filteredImages[lightboxIndex]?.title}
                </motion.h4>
                <motion.p 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gold text-[10px] uppercase font-bold tracking-[0.2em] mt-2"
                >
                  Category • {filteredImages[lightboxIndex]?.category}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

