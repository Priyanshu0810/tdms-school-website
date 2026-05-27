import { motion } from "motion/react";

const images = [
  "/src/assets/images/sch_2.jpg",
  "/src/assets/images/sch_5.jpg",
  "/src/assets/images/sch_6.jpg",
  "/src/assets/images/sch_7.jpg",
  "/src/assets/images/sch_15.jpg",
  "/src/assets/images/sch_17.jpg",
  "/src/assets/images/sch_19.jpg",
  "/src/assets/images/sch_22.jpg",
  "/src/assets/images/sch_24.jpg",
  "/src/assets/images/sch_1.jpg",
];

export default function SchoolSlider() {
  return (
    <section className="pt-10 pb-12 bg-paper overflow-hidden">
      
      {/* Centered Designed Header */}
      <div className="text-center mb-8 max-w-xl mx-auto px-6">
        <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.4em] mb-2.5 block">
          A Glimpse Into Our Campus
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-ink tracking-tight">
          Life at&nbsp;<span className="text-gold italic font-normal">TDMS</span>.
        </h2>
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold/80 to-transparent mx-auto mt-3.5" />
      </div>
      
      <div className="flex gap-6 animate-scroll pointer-events-none">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="inline-block w-[280px] sm:w-[400px] lg:w-[600px] aspect-[16/10] bg-ink/5 rounded-xl overflow-hidden shadow-lg border border-ink/5">
              <img 
                src={src} 
                alt={`School Slide ${i}`} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .animate-scroll {
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
