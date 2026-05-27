import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Layers, 
  Award, 
  Cpu, 
  FlaskConical, 
  Globe, 
  LineChart, 
  Sparkles, 
  ChevronRight, 
  Smile, 
  Download, 
  GraduationCap
} from "lucide-react";

const curriculumFocus = [
  {
    id: "pre-primary",
    label: "Pre-Primary",
    classes: "Nursery, LKG, UKG",
    tagline: "Foundational & Play-way Learning",
    description: "Developing early speaking, sensory responses, motor skills, and creative imagination through joyful activity-based exploration.",
    color: "from-amber-500/10 to-amber-500/5 hover:border-amber-500/30",
    textCol: "text-amber-500",
    bgCol: "bg-amber-500/10",
    icon: Smile,
    highlights: ["Early Phonics & Reading", "Sensory & Interactive Play", "Creative Art & Craft", "Basic Number & Alphabet blocks"],
    subjects: ["English Lit & Oral skills", "Basic Math & Patterns", "Environmental Studies (EVS)", "Rhythmic Movement & Music"]
  },
  {
    id: "primary",
    label: "Primary School",
    classes: "Classes I to V",
    tagline: "Conceptual Exploration & Discovery",
    description: "Focusing on core comprehension, standard languages, conceptual math, and creative expressiveness to align early intellectual sparks.",
    color: "from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/30",
    textCol: "text-emerald-500",
    bgCol: "bg-emerald-500/10",
    icon: Sparkles,
    highlights: ["Bilingual Reading Fluency", "Applied Logic & Numeracy", "Integrated Environmental Sciences", "Information Informatics Intro"],
    subjects: ["English (Lang & Lit)", "Mathematics", "Hindi", "Environmental Studies (EVS)", "Art & Music", "Primary Computers"]
  },
  {
    id: "middle",
    label: "Middle School",
    classes: "Classes VI to VIII",
    tagline: "Analytical Depth & Skill Foundations",
    description: "Introducing advanced disciplines, laboratory procedures, robotics exposure, and three-language structures under comprehensive guides.",
    color: "from-blue-500/10 to-blue-500/5 hover:border-blue-500/30",
    textCol: "text-blue-500",
    bgCol: "bg-blue-500/10",
    icon: FlaskConical,
    highlights: ["Experimental Science labs", "Computer & Robotics foundation", "Global & National History forums", "Physical & Mental Athletics"],
    subjects: ["English Literature", "Mathematics", "Science (Phy, Chem, Bio split)", "Social Science (Hist, Civics, Geog)", "Hindi & Third Language (Sanskrit/French)", "ICT Coding & Labs"]
  },
  {
    id: "secondary",
    label: "Secondary School",
    classes: "Classes IX to X",
    tagline: "CBSE Boards Alignment & Core Mastery",
    description: "Rigorous academic preparation aligning perfectly with national CBSE patterns, training critical reasoning, board stamina, and laboratory analysis.",
    color: "from-purple-500/10 to-purple-500/5 hover:border-purple-500/30",
    textCol: "text-purple-500",
    bgCol: "bg-purple-500/10",
    icon: Award,
    highlights: ["Comprehensive CBSE test series", "Advanced Chemical & Physics labs", "Special Mock Assessment modules", "Career Guidance & Counseling"],
    subjects: ["English Communicative", "Mathematics (Standard / Basic)", "Science (Physics, Chemistry, Biology)", "Social Studies (History, Civics, Geog, Econ)", "Hindi Course A or B", "Information Technology (IT)"]
  },
  {
    id: "sr-secondary",
    label: "Senior Secondary",
    classes: "Classes XI to XII",
    tagline: "Specialized Career Streams",
    description: "In-depth specialization across custom Science, Commerce, and Humanities streams with highly experienced mentors steering competitive setups.",
    color: "from-gold/15 to-gold/5 hover:border-gold/30",
    textCol: "text-gold",
    bgCol: "bg-gold/10",
    icon: GraduationCap,
    highlights: ["Advanced Career Diagnostics", "JEE / NEET Competitive modules", "Commerce Practical portfolios", "Humanities research projects"],
    streams: [
      {
        name: "Science Stream (Medical / Non-Medical)",
        coreSubjects: "Physics, Chemistry, Mathematics / Biology, English Core",
        electives: "Computer Science, Physical Education, Informatics Practices"
      },
      {
        name: "Commerce Stream",
        coreSubjects: "Accountancy, Business Studies, Economics, English Core",
        electives: "Mathematics, Entrepreneurship, Informatics Practices, PE"
      },
      {
        name: "Humanities Stream",
        coreSubjects: "History, Political Science, Economics / Sociology, English Core",
        electives: "Psychology, Geography, Fine Arts, Physical Education"
      }
    ]
  }
];

export default function AcademicCurriculum() {
  const [activeTab, setActiveTab] = useState("pre-primary");
  const [downloading, setDownloading] = useState(false);

  const activeData = curriculumFocus.find(item => item.id === activeTab);

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
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Pedagogical Scheme</span>
          <div className="inline-block group cursor-pointer relative pb-2 mb-6">
            <h1 className="text-4xl sm:text-5xl font-serif text-ink leading-tight">Academic <span className="italic font-light text-gold">Curriculum</span></h1>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold origin-left transform scale-x-100 transition-transform duration-500 ease-out rounded" />
          </div>
          <p className="text-ink/70 text-base font-light leading-relaxed">
            Thelma David Memorial School (TDMS) is affiliated with CBSE New Delhi. We curate future-centric intellects from Maldahiya town, Varanasi, with state-of-the-art interactive pedagogies.
          </p>
        </div>

        {/* Section Tabs Switcher */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-16 border-b border-ink/10 pb-6">
          {curriculumFocus.map((tab, idx) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            const isLast = idx === curriculumFocus.length - 1;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-3.5 sm:px-5 sm:py-3 rounded-full text-[9px] xs:text-[10px] sm:text-xs uppercase font-extrabold tracking-wider sm:tracking-widest transition-all duration-300 cursor-pointer ${
                  isLast ? "col-span-2 sm:col-span-initial" : "col-span-1"
                } ${
                  isActive 
                    ? "bg-ink text-paper shadow-md scale-[1.02] sm:scale-105" 
                    : "bg-card-bg text-ink/70 border border-ink/5 hover:border-gold/30 hover:bg-gold/5"
                }`}
              >
                <TabIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-gold" : "text-ink/40"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`bg-card-bg rounded-[3rem] border border-gold/15 p-8 sm:p-12 shadow-md`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Core Description Column */}
              <div className="lg:col-span-6">
                <span className="text-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">{activeData.classes}</span>
                <h2 className="text-3xl font-serif text-ink mb-2">
                  {activeData.label} <span className="italic text-gold font-light">Curriculum</span>
                </h2>
                <p className="text-xs font-mono text-ink/55 uppercase tracking-wider mb-6 block">
                  {activeData.tagline}
                </p>

                <p className="text-ink/75 text-sm sm:text-base font-light leading-relaxed mb-8">
                  {activeData.description}
                </p>

                {/* Key focus list highlights */}
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-ink mb-4 block">Core Educational Priorities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6">
                  {activeData.highlights.map((hil, i) => (
                    <div key={i} className="flex gap-3 items-center text-xs text-ink/80 font-light font-mono">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeData.bgCol.replace("10", "100")} bg-gold`} />
                      <span>{hil}</span>
                    </div>
                  ))}
                </div>

                {/* Download syllabus button */}
                <div className="pt-6 border-t border-ink/5 flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="#download" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setDownloading(true);
                      setTimeout(() => setDownloading(false), 3000);
                    }}
                    className={`flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-paper text-[10px] uppercase font-extrabold tracking-widest rounded-xl hover:bg-gold hover:text-ink transition-all shadow-sm w-full sm:w-auto text-center ${downloading ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    <Download className="w-4 h-4 animate-bounce" />
                    <span>{downloading ? "Preparing PDF..." : "Download Curriculum PDF"}</span>
                  </a>
                  {downloading && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-gold font-bold uppercase tracking-widest"
                    >
                      ✓ Download started shortly!
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Subject lists or Streams structure */}
              <div className="lg:col-span-6 bg-gold/5 border border-gold/10 rounded-[2.5rem] p-8">
                {activeData.streams ? (
                  /* Render Stream-wise info for Senior Secondary */
                  <div className="space-y-6">
                    <h3 className="font-serif text-xl text-ink border-b border-gold/20 pb-3 mb-4">Stream Specializations Available</h3>
                    {activeData.streams.map((stream, idx) => (
                      <div key={idx} className="bg-card-bg/80 p-5 rounded-2xl border border-gold/10">
                        <h4 className="text-sm font-serif font-bold text-ink mb-2">{stream.name}</h4>
                        <div className="grid gap-2 text-xs font-light text-ink/85">
                          <p>
                            <strong className="font-bold text-gold">Core:</strong> {stream.coreSubjects}
                          </p>
                          <p>
                            <strong className="font-bold text-gold">Electives:</strong> {stream.electives}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Render standard Subject list */
                  <div>
                    <h3 className="font-serif text-xl text-ink border-b border-gold/20 pb-3 mb-6">Course Subjects Undertaken</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeData.subjects.map((sub, i) => (
                        <div key={i} className="bg-card-bg p-4 rounded-xl border border-gold/5 shadow-sm hover:scale-[1.02] transition-transform flex items-center gap-3">
                          <span className={`text-[10px] font-bold font-mono ${activeData.textCol} ${activeData.bgCol} w-6 h-6 rounded-lg flex items-center justify-center`}>
                            {i + 1}
                          </span>
                          <span className="text-xs uppercase font-extrabold tracking-wider text-ink/80">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Academic assessment architecture */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Evaluation Framework</span>
            <h2 className="text-3xl font-serif text-ink">Comprehensive & Continuous Evaluation (CCE)</h2>
            <p className="text-ink/60 text-xs font-light max-w-xl mx-auto mt-2">
              We focus on standard formative feedback checks paired with structured summative board evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-gold font-mono font-bold text-2xl mb-4 block">01</span>
                <h4 className="font-serif text-lg text-ink font-semibold mb-2">Formative Assessments (FA)</h4>
                <p className="text-xs text-ink/75 leading-relaxed font-light">
                  Continuous performance reviews through monthly quizzes, classroom diagnostic interactions, project assignments, and digital coding checks to maintain feedback pipelines.
                </p>
              </div>
              <div className="w-10 h-1 bg-gold/30 mt-6" />
            </div>

            <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-gold font-mono font-bold text-2xl mb-4 block">02</span>
                <h4 className="font-serif text-lg text-ink font-semibold mb-2">Summative Term exams</h4>
                <p className="text-xs text-ink/75 leading-relaxed font-light">
                  Two primary evaluation checkpoints built in mid-session (September) and session finalization (March) to measure absolute logic integration and curriculum retention.
                </p>
              </div>
              <div className="w-10 h-1 bg-gold/30 mt-6" />
            </div>

            <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-gold font-mono font-bold text-2xl mb-4 block">03</span>
                <h4 className="font-serif text-lg text-ink font-semibold mb-2">Scholastic Portfolios</h4>
                <p className="text-xs text-ink/75 leading-relaxed font-light">
                  Students build cohesive portfolios encompassing science laboratory logs, interactive software scripts, community service records, and creative art projects for comprehensive grade review.
                </p>
              </div>
              <div className="w-10 h-1 bg-gold/30 mt-6" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
