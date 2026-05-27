import React from "react";
import { motion } from "motion/react";
import { Flame, Waves, Leaf, Sun, Shield, Award } from "lucide-react";

const housesData = [
  {
    id: "red",
    name: "Agni House",
    colorName: "Red",
    motto: "Ignite to Empower",
    mascot: "Roaring Tiger",
    accentColor: "#ef4444",
    borderClass: "border-red-500/20 hover:border-red-500/40",
    textClass: "text-red-500",
    bgClass: "bg-red-500/5",
    icon: Flame,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20running%20athletics%20track%20sports%20red%20energy%20passion%20competitive?width=800&height=600&nologo=true&seed=50", // sports track runner (passion)
    description: "Agni House represents the sacred fire of courage, passion, and intense energy. Our members are trained to build absolute dedication, show resilience in athletic meets, and lead with positive enthusiasm. We strive to be pioneers in school events and community service."
  },
  {
    id: "blue",
    name: "Varuna House",
    colorName: "Blue",
    motto: "Flow with Wisdom",
    mascot: "Majestic Eagle",
    accentColor: "#3b82f6",
    borderClass: "border-blue-500/20 hover:border-blue-500/40",
    textClass: "text-blue-500",
    bgClass: "bg-blue-500/5",
    icon: Waves,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20collaborating%20group%20project%20wisdom%20books%20blue%20team%20learning?width=800&height=600&nologo=true&seed=51", // students collaborating (wisdom)
    description: "Varuna House represents the ultimate depth of wisdom, strategic thinking, and intellectual calm. Members of Varuna are guided by strategic analysis, logical resolution, and creative expression, striving for excellence in computers, science, and the performing arts."
  },
  {
    id: "green",
    name: "Vasundhara House",
    colorName: "Green",
    motto: "Rooted in Harmony",
    mascot: "Noble Lion",
    accentColor: "#10b981",
    borderClass: "border-emerald-500/20 hover:border-emerald-500/40",
    textClass: "text-emerald-500",
    bgClass: "bg-emerald-500/5",
    icon: Leaf,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20planting%20trees%20nature%20green%20harmony%20environment%20Varanasi?width=800&height=600&nologo=true&seed=52", // planting/greenery (harmony)
    description: "Vasundhara House is inspired by Earth's nurturing growth, stability, and peaceful coexistence. Our students focus on ecological care, social work, and sports that demand deep focus and patience. We represent harmony, unity, and unwavering discipline."
  },
  {
    id: "yellow",
    name: "Aditya House",
    colorName: "Yellow",
    motto: "Radiating Brilliance",
    mascot: "Golden Pegasus",
    accentColor: "#f59e0b",
    borderClass: "border-amber-500/20 hover:border-amber-500/40",
    textClass: "text-amber-500",
    bgClass: "bg-amber-500/5",
    icon: Sun,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20creative%20exhibition%20project%20yellow%20bright%20innovation%20display?width=800&height=600&nologo=true&seed=53", // creative project/brilliance
    description: "Aditya House is named after the bright, life-giving sun, representing intellectual brilliance and optimism. Our house champions innovation, academic quiz competitions, debates, and creative design exhibitions. We believe in shining light on everyone's unique potential."
  }
];

export default function SchoolHouses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 text-balance">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">TDMS House System</span>
          <h1 className="text-4xl sm:text-5xl font-serif text-ink mb-6">School <span className="italic font-light text-gold">Houses</span></h1>
          <p className="text-ink/75 text-base font-light leading-relaxed">
            Uniting students under four distinct pillars of values, spirit, and healthy collaboration.
            Every scholar belongs to one of these houses, promoting leadership, responsibility, and team-spirit.
          </p>
        </div>

        {/* Houses List with Alternating Side layout */}
        <div className="space-y-24">
          {housesData.map((house, idx) => {
            const HouseIcon = house.icon;
            // Alternates the side of image and text
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={house.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                
                {/* Image Column */}
                <div 
                  className={`md:col-span-5 lg:col-span-6 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 ${house.borderClass} transition-colors duration-500 ${
                    !isEven ? "md:order-last" : ""
                  }`}
                >
                  <img 
                    src={house.image} 
                    alt={house.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Text Content Column */}
                <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${house.bgClass} ${house.textClass}`}>
                      <HouseIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[10px] uppercase font-mono tracking-widest font-extrabold ${house.textClass}`}>
                        {house.colorName} House
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-ink font-bold leading-tight">
                        {house.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase font-mono text-ink/40 tracking-[0.25em] block">Motto</span>
                    <p className={`text-base font-medium italic ${house.textClass} mt-0.5`}>
                      "{house.motto}"
                    </p>
                  </div>

                  <p className="text-ink/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {house.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-ink/5">
                    <div className="flex items-center gap-2">
                      <Shield className={`w-4 h-4 ${house.textClass}`} />
                      <span className="text-xs font-mono text-ink/70">
                        Mascot: <strong className="text-ink font-semibold">{house.mascot}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className={`w-4 h-4 ${house.textClass}`} />
                      <span className="text-xs font-mono text-ink/70">
                        Representation: <strong className="text-ink font-semibold">{house.colorName} Spirit</strong>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
