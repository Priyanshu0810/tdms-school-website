import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Menu, X, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user } = useAuth();

  const navItems = [
    { name: "Home", id: "home" },
    { 
      name: "About", 
      id: "about",
      dropdown: [
        { name: "Our Goal", id: "about#our-goal" },
        { name: "Mission & Vision", id: "about#mission-vision" },
        { name: "Director's Message", id: "about#director" },
        { name: "Principal's Message", id: "about#principal" }
      ]
    },
    { 
      name: "Admissions", 
      id: "admissions",
      dropdown: [
        { name: "Admission Process", id: "admission-process" },
        { name: "Fee Structure", id: "fee-structure" },
        { name: "Online Registration & Inquiry", id: "admissions" }
      ]
    },
    { 
      name: "Academics", 
      id: "academics",
      dropdown: [
        { name: "Academic Calendar", id: "calendar" },
        { name: "Academic Curriculum", id: "academic-curriculum" },
        { name: "Faculty", id: "faculty" },
        { name: "Achievements & Activities", id: "home#achievements" },
        { name: "Co-Curricular", id: "co-curricular" },
        { name: "School Houses", id: "school-houses" }
      ]
    },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/95 backdrop-blur-md border-b border-gold/15 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 sm:gap-4 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105 border-2 border-gold/30 shadow-sm bg-[#d4af37]">
            <img
              src="/src/assets/images/school_real_logo.png"
              alt="TDMS Logo"
              className="w-full h-full object-cover"
              style={{ mixBlendMode: "multiply", background: "transparent" }}
            />
          </div>
          <div>
            <span className="font-serif text-base sm:text-xl font-bold tracking-tight uppercase block leading-none text-ink">Thelma David</span>
            <span className="text-[9px] sm:text-[11px] uppercase font-extrabold text-gold tracking-[0.2em] sm:tracking-[0.3em] block mt-1.5 opacity-90">Memorial School</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group/item"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => !item.dropdown && onNavigate(item.id)}
                className={`text-[12px] uppercase font-bold tracking-widest flex items-center gap-1.5 transition-colors ${
                  currentPage === item.id
                    ? "text-gold cursor-default pointer-events-none"
                    : "text-ink hover:text-gold"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />}
              </button>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 pt-4 w-48"
                  >
                    <div className="bg-card-bg border border-gold/15 shadow-xl rounded-2xl overflow-hidden py-2">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => {
                            onNavigate(sub.id);
                            setActiveDropdown(null);
                          }}
                          className="w-full text-left px-6 py-3 text-[11px] uppercase font-bold tracking-widest text-ink/70 hover:text-gold hover:bg-gold/5 transition-colors"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Actions with menu toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            className="p-2 text-ink"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-paper border-b border-gold/15 shadow-xl px-6 py-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh]"
          >
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-ink/5 pb-4">
                {item.dropdown ? (
                  <>
                    <h3 className="text-xs font-serif text-gold uppercase tracking-widest mb-3">{item.name}</h3>
                    <div className="flex flex-col gap-3 pl-4 text-left">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => {
                            onNavigate(sub.id);
                            setIsOpen(false);
                          }}
                          className="text-left text-base font-serif text-ink/70"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`text-left text-xl font-serif ${currentPage === item.id ? 'text-gold' : 'text-ink'}`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

