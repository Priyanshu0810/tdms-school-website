import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Filter, Award, AlertCircle, Sparkles, Maximize2, Download, ZoomIn, ZoomOut, Search, Check } from "lucide-react";

const academicCalendarDoc = "/src/assets/images/tdms_academic_calendar_doc_1779341893967.png";

const CALENDAR_DATA = {
  months: [
    {
      name: "April 2026",
      daysInMonth: 30,
      startDay: 3, // Wednesday
      events: [
        { id: 1, date: 1, type: "academic", title: "New Academic Session Begins", desc: "Orientation for all classes & commencement of syllabus." },
        { id: 2, date: 10, type: "holiday", title: "Good Friday Holiday", desc: "School closed in observance." },
        { id: 3, date: 14, type: "holiday", title: "Dr. B.R. Ambedkar Jayanti", desc: "School closed." },
        { id: 4, date: 25, type: "celebration", title: "Investiture Ceremony", desc: "Oath ceremony and badge styling for student council leaders." }
      ]
    },
    {
      name: "May 2026",
      daysInMonth: 31,
      startDay: 5, // Friday
      events: [
        { id: 5, date: 1, type: "academic", title: "Unit Test I Commences", desc: "Continuous assessments for Grade I to XII." },
        { id: 6, date: 10, type: "activity", title: "Inter-House Debate & Arts", desc: "Visual and theatrical representations by house squads." },
        { id: 7, date: 15, type: "activity", title: "Parent-Teacher Meeting (PTM)", desc: "Performance discussion for UT-I. 08:00 AM - 12:30 PM." },
        { id: 8, date: 20, type: "holiday", title: "Summer Vacation Begins", desc: "School closed until June 30th for summer break." }
      ]
    },
    {
      name: "June 2026",
      daysInMonth: 30,
      startDay: 1, // Monday
      events: [
        { id: 9, date: 5, type: "celebration", title: "World Environment Day", desc: "Online plantation drives and poster competitions organized by Eco Club." },
        { id: 10, date: 21, type: "celebration", title: "International Yoga Day", desc: "Special morning session stream for healthy physical routines." }
      ]
    },
    {
      name: "July 2026",
      daysInMonth: 31,
      startDay: 3, // Wednesday
      events: [
        { id: 11, date: 1, type: "academic", title: "School Reopens after Break", desc: "Classes resume with regular timetables." },
        { id: 12, date: 18, type: "activity", title: "Science & AI Expo", desc: "Innovative exhibits, robotic show casings, and software projects." },
        { id: 13, date: 24, type: "academic", title: "Unit Test II Begins", desc: "Assessment series for mid-term checkpoint evaluation." }
      ]
    },
    {
      name: "August 2026",
      daysInMonth: 31,
      startDay: 6, // Saturday
      events: [
        { id: 14, date: 15, type: "celebration", title: "Independence Day Celebration", desc: "Flag hoisting ceremony, patriotic choir, and march past. Mandatory attendance." },
        { id: 15, date: 22, type: "activity", title: "Founder's Debate Cup", desc: "Varanasi Inter-School English and Hindi debate challenge." },
        { id: 16, date: 28, type: "holiday", title: "Rakshabandhan Holiday", desc: "School closed." }
      ]
    },
    {
      name: "September 2026",
      daysInMonth: 30,
      startDay: 2, // Tuesday
      events: [
        { id: 17, date: 5, type: "celebration", title: "Teachers' Day Assemblies", desc: "Student council led self-governance day and cultural performances." },
        { id: 18, date: 14, type: "academic", title: "Half Yearly Exams Commence", desc: "Main term exam framework. Detailed schedules will be emailed." },
        { id: 19, date: 30, type: "academic", title: "Term Paper Submission Due", desc: "Project portfolio assessments deadline." }
      ]
    }
  ]
};

const CATEGORIES = [
  { key: "all", label: "All Events", color: "bg-ink font-bold border-gold" },
  { key: "academic", label: "Academic / Exams", dot: "bg-indigo-500", text: "text-indigo-600" },
  { key: "holiday", label: "Holidays", dot: "bg-red-500", text: "text-red-500" },
  { key: "celebration", label: "Celebrations", dot: "bg-amber-500", text: "text-amber-600" },
  { key: "activity", label: "Co-Curriculars", dot: "bg-emerald-500", text: "text-emerald-600" }
];

export default function Calendar() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(1); // Default to May 2026
  const [filter, setFilter] = useState("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeMonth = CALENDAR_DATA.months[selectedMonthIndex];

  const prevMonth = () => {
    setSelectedMonthIndex((prev) => (prev > 0 ? prev - 1 : CALENDAR_DATA.months.length - 1));
  };

  const nextMonth = () => {
    setSelectedMonthIndex((prev) => (prev < CALENDAR_DATA.months.length - 1 ? prev + 1 : 0));
  };

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Actual file download trigger
      const link = document.createElement("a");
      link.href = academicCalendarDoc;
      link.download = "TDMS_Academic_Calendar_2026-27.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Toast notice auto-fade
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  // Filter events for the list
  const filteredEventsForMonth = activeMonth.events.filter(
    (ev) => filter === "all" || ev.type === filter
  );

  const getEventBgStyle = (type) => {
    switch (type) {
      case "academic": return "bg-indigo-500/10 border-indigo-500/20";
      case "holiday": return "bg-red-500/10 border-red-500/20";
      case "celebration": return "bg-amber-500/10 border-amber-500/20";
      case "activity": return "bg-emerald-500/10 border-emerald-500/20";
      default: return "bg-gold/10 border-gold/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6 bg-paper min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.4em] mb-2.5 block">
              Schedules & Directives
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-3">
              School <span className="italic font-light text-gold">Calendar 2026</span>.
            </h1>
            <p className="text-ink/60 text-sm max-w-2xl font-light leading-relaxed">
              Explore the printed academic calendar planner on the left, and filter upcoming events dynamically using our categorized timeline on the right.
            </p>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`w-full md:w-auto px-6 py-3.5 rounded-full border text-[11px] uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 transition-all ${
              downloadSuccess 
                ? "bg-emerald-600 text-white border-emerald-600" 
                : "bg-ink text-paper border-ink hover:bg-gold hover:text-ink hover:border-gold"
            }`}
          >
            {downloading ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-paper border-t-transparent rounded-full animate-spin" />
                <span>Downloading Planner...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Saved successfully</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Calendar Poster</span>
              </>
            )}
          </button>
        </div>

        {/* Global Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-ink/5 border border-ink/5 rounded-xl p-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink/75 font-extrabold px-3 py-1">
            <Filter className="w-3.5 h-3.5 text-gold" />
            <span>Category Filters</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all ${
                  filter === cat.key
                    ? "bg-ink text-paper border-ink"
                    : "bg-card-bg text-ink/75 border-ink/10 hover:border-gold/30 hover:bg-gold/5"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {cat.dot && <span className={`w-2 h-2 rounded-full ${cat.dot}`} />}
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* main layout splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium Physical Notice Board Container for printed Calendar */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Header label */}
            <div className="flex justify-between items-center bg-card-bg px-5 py-3.5 border border-ink/5 rounded-xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-ink/50">
                  Physical Notice Board
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.25))}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 hover:bg-ink/5 rounded-lg text-ink/65 disabled:opacity-30 transition-all"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono font-bold text-ink/50">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.25))}
                  disabled={zoomLevel >= 2.5}
                  className="p-1.5 hover:bg-ink/5 rounded-lg text-ink/65 disabled:opacity-30 transition-all"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-1.5 hover:bg-gold/10 hover:text-gold rounded-lg text-ink/75 transition-all text-xs flex items-center gap-1"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document display frame board */}
            <div className="relative bg-ink/90 rounded-2xl border border-ink/20 shadow-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-4">
              
              {/* Wooden or luxury border shadow overlay */}
              <div className="absolute inset-0 border-[6px] border-paper/10 rounded-2xl pointer-events-none z-10" />
              
              {/* Click instruction overlay */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="absolute inset-0 bg-ink/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in z-20"
              >
                <div className="bg-paper/95 text-ink text-[11px] uppercase tracking-widest font-extrabold px-5 py-3 rounded-full flex items-center gap-2 shadow-xl">
                  <Search className="w-4 h-4 text-gold" />
                  <span>Click to Expand Planner</span>
                </div>
              </div>

              {/* Scrolling wrapper for high zoom */}
              <div className="w-full h-full overflow-auto flex items-center justify-center custom-scrollbar">
                <motion.img 
                  src={academicCalendarDoc}
                  alt="TDMS Academic Calendar Official Print"
                  className="max-h-full max-w-full object-contain rounded transition-transform"
                  style={{ transform: `scale(${zoomLevel})` }}
                  layoutId="calendarPoster"
                />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-[11px] text-ink/40 italic">
                *Tip: Use the expansion icon or click on the poster to view the printed calendar in full details.
              </p>
            </div>
          </div>

          {/* Right Column: Events categorization & selective monthly schedules */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* School Timings Card */}
            <div className="bg-gradient-to-r from-gold/15 via-gold/20 to-gold/10 border-2 border-gold/30 rounded-2xl p-5 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-card-bg text-gold rounded-xl flex-shrink-0 shadow-sm border border-gold/20">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-ink/50 block">Official Schedule</span>
                  <h3 className="font-serif text-lg font-black text-ink leading-tight">School Timings</h3>
                  <p className="text-sm sm:text-base font-mono text-ink font-extrabold mt-0.5">
                    08:15 AM – 02:15 PM
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-widest text-ink/50 block mb-1">Shift Type</span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                  Morning Shift
                </span>
              </div>
            </div>

            {/* Month selectors to filter right side events */}
            <div className="bg-card-bg rounded-xl border border-ink/5 p-4 shadow-sm">
              <div className="text-[10px] uppercase font-extrabold tracking-widest text-ink/40 mb-3 block">
                Active Month Agenda Selector
              </div>
              
              <div className="flex items-center justify-between gap-2 p-1 bg-ink/5 rounded-lg border border-ink/5">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-card-bg rounded-md transition-colors text-ink shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4 text-gold" />
                </button>
                
                <span className="font-serif text-[15px] font-bold text-ink tracking-wide">
                  {activeMonth.name}
                </span>

                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-card-bg rounded-md transition-colors text-ink shadow-sm"
                >
                  <ChevronRight className="w-4 h-4 text-gold" />
                </button>
              </div>

              {/* Micro bullet index indicators of all month buttons for quick clicking */}
              <div className="grid grid-cols-6 gap-1 mt-3">
                {CALENDAR_DATA.months.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedMonthIndex(i)}
                    className={`py-1 text-[10px] uppercase font-bold tracking-tighter rounded border transition-all ${
                      selectedMonthIndex === i 
                        ? 'bg-ink text-paper border-ink' 
                        : 'bg-card-bg text-ink/50 border-ink/5 hover:border-gold/30 hover:bg-gold/5'
                    }`}
                  >
                    {m.name.split(" ")[0].substring(0,3)}
                  </button>
                ))}
              </div>
            </div>

            {/* Notification alert banner */}
            <div className="p-4 bg-gold/10 border border-gold/20 rounded-xl">
              <div className="flex gap-3">
                <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-ink">Directorate Notice</h4>
                  <p className="text-[11px] text-ink/75 font-light leading-relaxed mt-1">
                    Dates regarding external CBSE registrations, Olympiad entries, and board terminal evaluations are subject to final national notification. All changes will reflect dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* List of dynamic classified records */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] uppercase font-extrabold tracking-widest text-ink/40 flex items-center justify-between pb-2 border-b border-ink/5">
                <span>Agenda Records for {activeMonth.name}</span>
                <span>{filteredEventsForMonth.length} Counted</span>
              </div>

              <AnimatePresence mode="popLayout animate-fadeIn">
                {filteredEventsForMonth.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-8 text-center bg-card-bg rounded-xl border border-ink/5 text-ink/50"
                  >
                    <CalendarIcon className="w-8 h-8 text-ink/20 mx-auto mb-3" />
                    <p className="text-sm font-light">No events align with the selected category filter for this month.</p>
                  </motion.div>
                ) : (
                  filteredEventsForMonth.map((ev, idx) => (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`p-4 rounded-xl border flex gap-4 transition-all hover:scale-[1.01] bg-card-bg ${getEventBgStyle(ev.type)}`}
                    >
                      {/* Left Circular Date Display */}
                      <div className="w-12 h-12 bg-card-bg border border-ink/5 shadow-sm rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xl font-serif font-bold text-ink leading-none">{ev.date}</span>
                        <span className="text-[8px] uppercase tracking-wider font-extrabold text-gold mt-1">Date</span>
                      </div>

                      {/* Right Textual Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className={`text-[8px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-card-bg border border-ink/5 ${
                            ev.type === "academic" ? 'text-indigo-600' :
                            ev.type === "holiday" ? 'text-red-500' :
                            ev.type === "celebration" ? 'text-amber-600' : 'text-emerald-600'
                          }`}>
                            {ev.type}
                          </span>
                        </div>
                        <h4 className="font-serif text-[15px] font-bold text-ink leading-tight truncate">
                          {ev.title}
                        </h4>
                        <p className="text-[12px] text-ink/65 font-light leading-relaxed mt-1">
                          {ev.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Screen Lightbox Portal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/95 z-[500] flex flex-col justify-between p-4 sm:p-6 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Topbar controls - Stacked on mobile, side-by-side on tablet/desktop */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-7xl mx-auto z-10 pointer-events-auto gap-3.5 border-b border-white/10 pb-4 sm:pb-3">
              <div className="text-left">
                <h3 className="font-serif text-[16px] sm:text-xl text-paper tracking-wider">
                  TDMS Official Academic Planner
                </h3>
                <p className="text-paper/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1 leading-tight">
                  Session 2026 - 2027 • Printable High Resolution Document Preview
                </p>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-5 sm:py-2.5 bg-gold text-ink text-[10px] sm:text-xs uppercase font-extrabold tracking-wider rounded-full hover:bg-paper hover:text-ink transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download file</span>
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-paper rounded-full flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Large Projected Content Area */}
            <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
              <picture className="max-w-full max-h-[72vh] sm:max-h-[78vh] flex items-center justify-center">
                <motion.img 
                  src={academicCalendarDoc}
                  alt="Academic Calendar Extended Preview" 
                  className="max-h-[72vh] sm:max-h-[78vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl pointer-events-auto"
                  layoutId="calendarPoster"
                  onClick={(e) => e.stopPropagation()}
                />
              </picture>
            </div>

            {/* Bottom info brand */}
            <div className="text-center text-paper/40 text-[8px] sm:text-[10px] uppercase tracking-widest pt-2">
              Thelma David Memorial School • Maldahiya, Varanasi • All Dates Subject to final CBSE board confirmations.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
}
