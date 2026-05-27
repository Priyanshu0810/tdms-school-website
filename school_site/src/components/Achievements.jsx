import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Award, Trophy, Star, Target, Crown } from "lucide-react";

const achievementsData = [
  {
    id: 1,
    studentName: "Ananya Mishra",
    title: "Class X CBSE Boards",
    category: "Academic Star",
    tagLine: "State Rank 3 / Varanasi Topper",
    scoreBadge: "98.6% Marks",
    icon: MedalIcon,
    image: "https://image.pollinations.ai/prompt/happy%20Indian%20school%20girl%20topper%20academic%20excellence%20trophy%20ceremony%20school?width=600&height=600&nologo=true&seed=30",
    description: "Scored 100/100 in Mathematics and Science, setting a stellar standard of academic excellence at TDMS."
  },
  {
    id: 2,
    studentName: "Samarth K. Sen",
    title: "Class XII Science Stream",
    category: "JEE Elite",
    tagLine: "99.8 Percentile in JEE Mains",
    scoreBadge: "97.4% Boards",
    icon: CrownIcon,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20boy%20JEE%20science%20student%20studying%20books%20confident%20smile?width=600&height=600&nologo=true&seed=31",
    description: "Led the Science division with an impeccable physics score, securing admissions into elite technologies."
  },
  {
    id: 3,
    studentName: "Meera Deshmukh",
    title: "National Swimming Meet",
    category: "Sports Icon",
    tagLine: "2 Gold, 1 Silver Medal",
    scoreBadge: "National Level",
    icon: TrophyIcon,
    image: "https://image.pollinations.ai/prompt/Indian%20girl%20swimmer%20gold%20medal%20winner%20sports%20national%20meet%20podium%20proud?width=600&height=600&nologo=true&seed=32",
    description: "Shattered regional records in 100m butterfly, qualifying for the prestigious National Swimming Concourse."
  },
  {
    id: 4,
    studentName: "Kabir J. Malhotra",
    title: "Class X CBSE Boards",
    category: "Commerce Champion",
    tagLine: "Perfect 100 in Accountancy",
    scoreBadge: "97.8% Marks",
    icon: MedalIcon,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20boy%20commerce%20student%20accountancy%20books%20confident%20student?width=600&height=600&nologo=true&seed=33",
    description: "Showcased supreme logical aptitude with flawless scores in high-level commerce and economic portfolios."
  },
  {
    id: 5,
    studentName: "Zoya Fatima",
    title: "Inspire Award MANAK",
    category: "Young Innovator",
    tagLine: "Selected by DST, Govt of India",
    scoreBadge: "National Honor",
    icon: StarIcon,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20girl%20innovation%20science%20project%20eco%20water%20filter%20award%20ceremony?width=600&height=600&nologo=true&seed=34",
    description: "Honored with a national award for inventing a cost-effective, eco-conscious water filtering model."
  },
  {
    id: 6,
    studentName: "Priyanshu Verma",
    title: "National Cyber Olympiad",
    category: "Tech Specialist",
    tagLine: "All India Rank (AIR) 14",
    scoreBadge: "Gold Medal",
    icon: TargetIcon,
    image: "https://image.pollinations.ai/prompt/Indian%20school%20boy%20cyber%20olympiad%20computer%20programming%20gold%20medal%20winner?width=600&height=600&nologo=true&seed=35",
    description: "Secured outstanding rank at the prestigious 2025 cyber event with perfect scores in programming logic."
  }
];

function MedalIcon() {
  return <Award className="w-5 h-5 text-gold" />;
}
function CrownIcon() {
  return <Crown className="w-5 h-5 text-gold" />;
}
function TrophyIcon() {
  return <Trophy className="w-5 h-5 text-gold" />;
}
function StarIcon() {
  return <Star className="w-5 h-5 text-gold" />;
}
function TargetIcon() {
  return <Target className="w-5 h-5 text-gold" />;
}

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = achievementsData.length - visibleCount;

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    stopTimer();
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startTimer();
  };

  const getTranslateX = () => {
    if (isMobile) {
      return `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)`;
    }
    if (isTablet) {
      return `calc(-${currentIndex * 50}% - ${currentIndex * 12}px)`;
    }
    return `calc(-${currentIndex * 33.3333}% - ${currentIndex * 8}px)`;
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-paper/70 border-t border-ink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-4 block">Student Milestones</span>
            <div className="inline-block group cursor-pointer relative pb-2">
              <h2 className="text-4xl font-serif text-ink">Achievements & <span className="italic font-light text-gold">Activities</span></h2>
              <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded" />
            </div>
            <p className="text-ink/65 text-sm font-light mt-3 max-w-xl">
              Celebrating our stellar scholars, dreamers, and champions who bring constant pride and glory to the legacy of TDMS Varanasi.
            </p>
          </div>
          
          {/* Navigation Buttons for Slide */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-ink/70 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-sm bg-card-bg"
              aria-label="Previous achievement"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-ink/70 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-sm bg-card-bg"
              aria-label="Next achievement"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden px-1 py-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: getTranslateX() }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {achievementsData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className="bg-card-bg rounded-2xl border border-gold/15 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] flex-shrink-0"
                  >
                    {/* Student Portrait Header */}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.studentName} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                      
                      {/* Class / Score Stamp in corner */}
                      <span className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md border border-gold/20">
                        {item.scoreBadge}
                      </span>

                      {/* Floating Ribbon / Category */}
                      <span className="absolute top-4 left-4 bg-card-bg/90 backdrop-blur-md text-ink text-[8px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-md shadow-sm border border-gold/10">
                        {item.category}
                      </span>
                      
                      {/* Name & Title inside Image */}
                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent />
                          <span className="text-xs font-semibold tracking-wider uppercase text-gold font-mono">{item.tagLine}</span>
                        </div>
                        <h4 className="text-2xl font-serif font-semibold tracking-tight">{item.studentName}</h4>
                      </div>
                    </div>

                    {/* Scholastic metadata info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs font-semibold uppercase text-gold tracking-wider mb-2 font-mono">
                        {item.title}
                      </div>
                      <p className="text-ink/75 text-sm font-light leading-relaxed flex-grow">
                        {item.description}
                      </p>
                      
                      {/* Decorative action effect */}
                      <div className="w-12 h-[3px] bg-gold mt-6 group-hover:w-full transition-all duration-500 ease-out rounded" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Slider indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopTimer();
                  setCurrentIndex(i);
                  startTimer();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-10 bg-gold" : "w-2.5 bg-gold/25 hover:bg-gold/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
