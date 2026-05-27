import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Music, 
  Palette, 
  Laptop, 
  Megaphone, 
  HeartHandshake, 
  Sparkles, 
  ChevronRight, 
  Award,
  Globe
} from "lucide-react";

const activitiesCategories = [
  {
    id: "sports",
    label: "Sports & Athletics",
    icon: Trophy,
    tagline: "Building Discipline, Team-Spirit & Grit",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20basketball%20sports%20arena%20playing%20match%20indoor%2C%20blue%20uniforms?width=800&height=600&nologo=true&seed=40",
    description: "Physical education is an essential pillar at TDMS. Our multi-purpose sports arenas and indoor complexes help train standard reflexes and nurture competitive athletic champions in Varanasi.",
    disciplines: ["Girls & Boys Senior Basketball squads", "Inter-school Football & Cricket championships", "Annual Athletics meets & regional sprints", "Karate & self defense modules for girls"],
    highlightStat: "Annual Regional Girls Basketball Trophy Champions thrice consecutively"
  },
  {
    id: "performing-arts",
    label: "Performing Arts & Music",
    icon: Music,
    tagline: "Nurturing Rhythmic Soul & Dramatic Expression",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20girls%20classical%20dance%20performance%20on%20stage%20saree%20colorful%20cultural%20event?width=800&height=600&nologo=true&seed=41",
    description: "Allowing scholars to explore vocal, classical, and theatrical heights. We celebrate classical Indian sangeet traditions blended with contemporary expression in our specialized acoustic halls.",
    disciplines: ["Varanasi Classical Vocal & Sitar ensembles", "Contemporary & folk dances of India", "Mainstream theater & bilingual storytelling drama", "Acoustic Guitar, Keyboard and Tabla basic academies"],
    highlightStat: "1st Place at Varanasi Heritage Cultural Fest Ensemble competition"
  },
  {
    id: "fine-arts",
    label: "Fine Arts & Heritage Crafting",
    icon: Palette,
    tagline: "Visualizing Creativity on Canvas",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20oil%20painting%20art%20class%20canvas%20colorful%20creative?width=800&height=600&nologo=true&seed=42",
    description: "From oil paintings, sketching, to traditional pottery. Our visual art desk guides the aesthetic vision of our student community, providing a platform to manifest their thoughts visually.",
    disciplines: ["Canvas Oil Painting & Palette knife tactics", "Varanasi Heritage Art & Temple-scape sketching", "Ecofriendly clay modeling & pottery crafts", "Annual Spring Art Exposition galleries"],
    highlightStat: "Over 80 scholar canvases curated in Varanasi Municipal Galleries"
  },
  {
    id: "tech-innovation",
    label: "Informatics & AI Clubs",
    icon: Laptop,
    tagline: "Coding the Solutions of Tomorrow",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20robotics%20science%20fair%20models%20tech%20lab%20coding?width=800&height=600&nologo=true&seed=43",
    description: "A sandbox for software, analytics, robotics, and automation. Students train hands-on with electronics, algorithm structures, and computer science models to tackle global modernization questions early.",
    disciplines: ["Scratch & Python coding logic for junior/middle classes", "Robotics modeling & sensor automation labs", "All India Cyber Olympiad preparatory groups", "DST Inspire Award (MANAK) Innovation forum"],
    highlightStat: "National Silver Award for eco-conscious Water Filter automation in 2025"
  },
  {
    id: "literary-debate",
    label: "Literary & Debate Society",
    icon: Megaphone,
    tagline: "Empowering Eloquence & Intellectual Voices",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20debate%20competition%20public%20speaking%20podium%20confident?width=800&height=600&nologo=true&seed=44",
    description: "Guiding the path for persuasive public speaking, standard journalism, and creative essay-writing. We publish the quarterly academic paper 'The TDMS voice'.",
    disciplines: ["Bilingual Turncoat & Extempore debating drills", "School editorial board for quarterly chronicles", "Creative poetry sessions & theatrical script reviews", "Bi-annual Intra-School Model United Nations (MUN)"],
    highlightStat: "Best Orator delegation award at State Bilingual Debate Conclave"
  },
  {
    id: "social-brigade",
    label: "Green Ganga & Social Service",
    icon: HeartHandshake,
    tagline: "Empathy, Service, & Planetary Care",
    image: "https://image.pollinations.ai/prompt/Indian%20school%20students%20planting%20saplings%20trees%20Ganga%20river%20Varanasi%20environment%20clean?width=800&height=600&nologo=true&seed=45",
    description: "Nurturing civic integrity through direct community service, sapling drives along the banks of holy river Ganges, and humanitarian outreach.",
    disciplines: ["Clean Ganga awareness & environmental river-bed walks", "Native botanical replantation drives around Varanasi bypasses", "E-waste collection & circular usage campaigns", "Mentorship sessions for regional primary community circles-schools"],
    highlightStat: "Successfully planted 500+ saplings along gangetic belts this term"
  }
];

export default function CoCurricular() {
  const [activeCategory, setActiveCategory] = useState("sports");

  const currentData = activitiesCategories.find(c => c.id === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Holistic Dev</span>
          <div className="inline-block group cursor-pointer relative pb-2 mb-6">
            <h1 className="text-4xl sm:text-5xl font-serif text-ink leading-tight">Co-Curricular <span className="italic font-light text-gold">Excellence</span></h1>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold origin-left transform scale-x-100 transition-transform duration-500 ease-out rounded" />
          </div>
          <p className="text-ink/70 text-base font-light leading-relaxed">
            At TDMS Varanasi, education extends far past the physical boundaries of textbooks. We believe in providing active avenues where children can build life confidence, hone raw creative talents, and explore athletic vigor.
          </p>
        </div>

        {/* Visual Category Grid Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {activitiesCategories.map((cat) => {
            const CatIcon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-3xl border transition-all duration-500 relative overflow-hidden group/btn text-center ${
                  isSelected 
                    ? "bg-ink border-gold/40 text-paper shadow-lg scale-105" 
                    : "bg-card-bg border-gold/15 text-ink/70 hover:border-gold hover:shadow-md"
                }`}
              >
                <div className={`p-3 rounded-full mb-3 ${isSelected ? "bg-gold/15 text-gold" : "bg-gold/5 text-gold group-hover/btn:scale-110 transition-transform"}`}>
                  <CatIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider leading-tight">
                  {cat.label.split(" & ")[0]}
                </span>
                
                {/* Visual bottom bar indicator */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Container with Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-card-bg border border-gold/15 rounded-[3rem] overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Image Side */}
              <div className="lg:col-span-5 h-[350px] lg:h-auto min-h-[300px] relative">
                <img 
                  src={currentData.image} 
                  alt={currentData.label} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Floating Achievement stat */}
                <div className="absolute bottom-6 left-6 right-6 bg-card-bg/95 backdrop-blur-md p-5 rounded-2xl border border-gold/20 shadow-md">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-gold/15 text-gold flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-extrabold tracking-widest text-ink/40 block mb-1">Key Milestone</span>
                      <p className="text-xs font-serif font-semibold text-ink leading-snug">
                        {currentData.highlightStat}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side Content */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block font-mono uppercase">
                    {currentData.tagline}
                  </span>
                  <h2 className="text-3xl font-serif text-ink mb-4 font-semibold">
                    {currentData.label}
                  </h2>
                  <p className="text-ink/75 text-sm sm:text-base font-light leading-relaxed mb-8">
                    {currentData.description}
                  </p>

                  {/* Program features list */}
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-ink/90 mb-4 block">Our Dedicated Activities:</h4>
                  <div className="space-y-3">
                    {currentData.disciplines.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start text-xs sm:text-sm text-ink/80 font-light font-mono leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-ink/5 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-[10px] text-ink/40 uppercase font-bold tracking-widest font-mono">
                    Structured with experienced training sessions
                  </p>
                  <Link to="/contact" className="px-6 py-3 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold hover:text-ink transition-colors inline-block text-center shadow-md">
                    Talk To Activites Coordinator
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Holistic student records callout */}
        <div className="bg-gold/5 border border-gold/10 rounded-[3rem] p-8 sm:p-12 text-center mt-20 max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl text-ink mb-4">A Legacy of Creative Expression</h3>
          <p className="text-ink/70 text-sm font-light max-w-xl mx-auto mb-8">
            Every Saturday at TDMS Varanasi is dedicated to House-wide interactive events, cross-cultural assemblies, skill simulations, and visual sangeet academies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/gallery" className="w-full sm:w-auto max-w-[280px] px-8 py-4 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold hover:text-ink transition-colors text-center shadow-md">
              Browse Event Galleries
            </Link>
            <Link to="/calendar" className="w-full sm:w-auto max-w-[280px] px-8 py-4 border border-ink/10 text-ink text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-ink hover:text-paper transition-all text-center">
              Academic & Contest Calendar
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
