import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ClipboardList, 
  FileText, 
  Users, 
  CheckCircle, 
  PhoneCall, 
  Calendar, 
  X, 
  Clock, 
  BookOpen 
} from "lucide-react";

const admissionSteps = [
  {
    step: "01",
    title: "Inquire & Explore Portal",
    subtitle: "Inception Phase",
    icon: FileText,
    description: "Begin by exploring and submitting an inquiry. Parents can choose to submit the virtual interest form online or pick up our detailed physical Prospectus directly from the Maldahiya School campus desk.",
    details: {
      overview: "We invite prospective parents to consult with our registration advisors and tour the campus blocks. Direct inquiries help us align your child's personality profile with appropriate interactive classes.",
      procedures: "To begin, submit the online inquiry form via our Admissions portal, or purchase a printed prospectus pack directly from the main campus registrar's desk.",
      keyHighlight: "No initial academic evaluations are required for preliminary query routing and registration setup.",
      timeToComplete: "10-15 minutes online; 1-2 hours for physical campus counseling sessions.",
      tips: [
        "Include active phone numbers to receive direct verification SMS alerts.",
        "Visiting hours for advisor interactions: 09:00 AM to 01:30 PM."
      ]
    }
  },
  {
    step: "02",
    title: "Registration & Document Filing",
    subtitle: "Dossier Creation",
    icon: ClipboardList,
    description: "Submit the official Registration Form with required documents including the student's certified birth certificate, previous school progress reports (where valid), and colored passport-sized portraits.",
    details: {
      overview: "Our registration desk performs a thorough review of the candidate’s documentation, ensuring adherence to CBSE board guidelines and school safety rules.",
      procedures: "Collect the registration form from your online login, attach clear digital uploads of required documents, or drop off physically filled forms at the admin wing.",
      keyHighlight: "Submit exact spellings matching the certified birth certificate or previous school records to prevent discrepancy in final board registration.",
      timeToComplete: "2 to 3 operational working days for total verification.",
      tips: [
        "We strongly suggest keeping copies of student-parent Aadhar cards ready.",
        "Original transfer certificates (T.C.) must be physically submitted later."
      ]
    }
  },
  {
    step: "03",
    title: "Interaction & Foundational Check",
    subtitle: "Mutual Discovery",
    icon: Users,
    description: "Our core counselors schedule an absolute friendly, interactive diagnostic session. This holds no stress—it aligns strictly with evaluating standard social skills, cognitive responses, or stream interest flags (XI-XII).",
    details: {
      overview: "A warm, informal conversation designed to understand the child's readiness, cognitive developments, and special fields of curiosity. There are no high-stakes written filters.",
      procedures: "Our expert counselors interact with the student and parents concurrently at the main school pavilion.",
      keyHighlight: "We strive to eliminate test anxiety, evaluating general social confidence and grade-level conceptual familiarity.",
      timeToComplete: "30 to 45 minutes on assigned calendar slot.",
      tips: [
        "Guide your child to express themselves comfortably about their favorite books or sports.",
        "Highlight secondary stream preferences (for Class XI / XII entrants) during counselor dialogue."
      ]
    }
  },
  {
    step: "04",
    title: "Provisional Selection & Dues",
    subtitle: "Enlistment Acceptance",
    icon: CheckCircle,
    description: "Once selected, TDMS dispatches a provisional selection letter parent-side. Dues including admission fee, term tuition, and refundable caution deposit must be settled within 7 operational days to secure seats.",
    details: {
      overview: "Upon validation of counselor inputs, selected students are extended provisional enrollment offers outlining fees, uniform lists, and transport choices.",
      procedures: "Process structural fees either securely online using parent dashboards or at the school’s bursar deck.",
      keyHighlight: "The caution deposit is a single security unit, fully refundable upon future academic withdrawal or transfer.",
      timeToComplete: "7 calendar days from select notification to lock student placement.",
      tips: [
        "Quote your unique provisional reference number in all transactions.",
        "Connect with our account desk early if you require composite installment options."
      ]
    }
  },
  {
    step: "05",
    title: "Academic Onboarding",
    subtitle: "Welcome to TDMS",
    icon: Calendar,
    description: "Recieve the official student calendar, handbook, uniforms, and books roster. Parents get their custom login portals to trace buses, online homework tracks, and teacher messages before start date.",
    details: {
      overview: "The final preparation layer before your ward steps inside their classroom. This locks in system integrations, section schedules, and student ID allocations.",
      procedures: "Collect book sets and syllabus lists on onboarding day, and visit our approved standard uniform outfitters.",
      keyHighlight: "Active parents are equipped with custom digital logins for real-time bus tracking, fee invoices, and teacher notices.",
      timeToComplete: "Concluded with a warm orientation program before seasonal school restart.",
      tips: [
        "Activate portal accounts immediately and verify contact points.",
        "Coordinate with your designated bus driver 48 hours before day one."
      ]
    }
  }
];

const requiredDocuments = [
  "Validated Birth Certificate of the student (original and colored scan copy)",
  "Report cards / Academic records of previous 2 consecutive academic years (if seeking entry beyond Class I)",
  "Signed Transfer Certificate (T.C.) from initial recognized board-school (original copy at admission finalization)",
  "Copy of Student Aadhar Card (mandatory national database declaration requirements)",
  "3 Recent Passport-sized colored photographs of the Candidate & 2 photographs of both Parents/Guardian",
  "Proof of Residence (Electricity invoice, Voter ID card, Passport, or valid Rent contract agreement)",
  "Caste / Category certificate officially countersigned (only where specialized allocations are requested)"
];

export default function AdmissionProcess() {
  const [selectedStep, setSelectedStep] = useState(null);

  // Freeze background scrolling when a pop-up details modal is active
  useEffect(() => {
    if (selectedStep) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Page Head */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Roster Admissions</span>
          <div className="inline-block group cursor-pointer relative pb-2 mb-6">
            <h1 className="text-4xl sm:text-5xl font-serif text-ink leading-tight">Step-wise <span className="italic font-light text-gold">Admission Process</span></h1>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold origin-left transform scale-x-100 transition-transform duration-500 ease-out rounded" />
          </div>
          <p className="text-ink/70 text-base font-light leading-relaxed">
            Welcome to the admissions office of Thelma David Memorial School. We follow an inclusive, structured, and warm enrollment funnel that welcomes potential and nurtures capability. Here is how your ward can step into TDMS.
          </p>
        </div>

        {/* Dynamic Timeline Section */}
        <div className="relative mb-20 max-w-5xl mx-auto">
          {/* Vertical layout line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/25 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {admissionSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""} gap-8 relative`}>
                  
                  {/* Visual timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-gold border-4 border-paper shadow-md transform -translate-x-1/2 z-10 hidden md:block" />

                  {/* Empty Side block to force timeline align */}
                  <div className="w-full md:w-1/2 hidden md:block px-6" />

                  {/* Content block side */}
                  <div className="w-full md:w-1/2 px-6">
                    <div className="bg-card-bg border border-gold/15 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
                      <div className="absolute right-6 top-6 text-gold/10 font-bold font-mono text-6xl leading-none">
                        {item.step}
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs uppercase font-extrabold tracking-widest text-gold bg-gold/5 px-2.5 py-1 rounded-md">
                            {item.subtitle}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl text-ink font-semibold mb-3">
                          {item.title}
                        </h3>

                        <p className="text-ink/70 text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div 
                        onClick={() => setSelectedStep(item)}
                        className="flex gap-2 items-center text-xs font-semibold text-gold mt-6 group/btn cursor-pointer self-start border border-gold/25 hover:border-gold/60 hover:bg-gold/5 px-4 py-2 rounded-xl transition-all"
                      >
                        <span>Learn Details</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Documents left column list */}
          <div className="lg:col-span-7 bg-card-bg border border-gold/15 rounded-[3rem] p-8 sm:p-12 shadow-sm">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Essential Papers</span>
            <h2 className="text-3xl font-serif text-ink mb-6">Mandatory Documents</h2>
            <p className="text-ink/65 text-sm font-light mb-8">
              To ensure state regulatory sync, safety protocols, and accurate board enforcements, we require the following verified original documents during selection finalization.
            </p>

            <div className="space-y-4">
              {requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex gap-4 items-start text-sm text-ink/80 font-light leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p>{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick eligibility notes column */}
          <div className="lg:col-span-5 bg-ink text-paper rounded-[3rem] p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-4 block">Rules & Restrictions</span>
              <h2 className="text-3xl font-serif text-white mb-6">Age Criteria</h2>
              <p className="text-paper/70 text-sm font-light leading-relaxed mb-8">
                As registered under mainstream board patterns, enrollment guidelines enforce minimum ages as of April 30th of the academic admission session:
              </p>

              <div className="space-y-5">
                <div className="flex justify-between items-center py-2 border-b border-paper/10 text-sm">
                  <span className="font-medium text-white">Nursery / Playgroup</span>
                  <span className="text-gold font-mono font-bold">3+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-paper/10 text-sm">
                  <span className="font-medium text-white">LKG (Lower Kindergarten)</span>
                  <span className="text-gold font-mono font-bold">4+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-paper/10 text-sm">
                  <span className="font-medium text-white">Class I (First Grade)</span>
                  <span className="text-gold font-mono font-bold">6+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-paper/10 text-sm">
                  <span className="font-medium text-white">Class VI (Middle School)</span>
                  <span className="text-gold font-mono font-bold">11+ Years</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-center">
              <PhoneCall className="w-8 h-8 text-gold flex-shrink-0" />
              <div>
                <h5 className="font-serif text-base text-white">Helpdesk Available</h5>
                <p className="text-xs text-paper/60 font-light mt-1">Talk with an admission coordinator directly at +91 9839 XXXXXX</p>
              </div>
            </div>

          </div>

        </div>

        {/* CTA section bottom */}
        <div className="bg-gold/5 border border-gold/10 rounded-[3rem] p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl text-ink mb-4">Start Your Ward's Journey Today</h3>
          <p className="text-ink/70 text-sm font-light max-w-xl mx-auto mb-8">
            Submit an online initial interest roster. It takes less than 5 minutes to complete, and sets our coordinators on instant communication tracks with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/admissions" className="w-full sm:w-auto max-w-[280px] px-8 py-4 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold hover:text-ink transition-colors text-center shadow-md">
              Online Inquiry Form
            </Link>
            <Link to="/contact" className="w-full sm:w-auto max-w-[280px] px-8 py-4 border border-ink/10 text-ink text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-ink hover:text-paper transition-all text-center">
              Visit Campus Maldahiya
            </Link>
          </div>
        </div>

      </div>

      {/* Fully Responsive Popup Modal for Learn Details */}
      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 xs:p-6 sm:p-10">
            {/* Dark blur backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-[#0a1d37] border border-gold/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header Box */}
              <div className="px-6 py-5 sm:p-8 border-b border-gold/10 bg-black/30 relative text-left">
                <span className="inline-block text-[9px] sm:text-xs uppercase font-extrabold tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded-md mb-2">
                  Step {selectedStep.step} • {selectedStep.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-paper font-semibold pr-10">
                  {selectedStep.title}
                </h3>
                
                {/* Close Trigger Button */}
                <button 
                  onClick={() => setSelectedStep(null)}
                  className="absolute top-5 right-5 text-paper/60 hover:text-gold p-2 rounded-full hover:bg-paper/10 transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Main body content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left custom-scrollbar flex-1">
                {/* 1. Overview */}
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-gold font-medium mb-2">Detailed Overview</h4>
                  <p className="text-paper/85 text-sm font-light leading-relaxed">
                    {selectedStep.details.overview}
                  </p>
                </div>

                {/* 2. Process */}
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-gold font-medium mb-2">How to Proceed</h4>
                  <p className="text-paper/85 text-sm font-light leading-relaxed">
                    {selectedStep.details.procedures}
                  </p>
                </div>

                {/* 3. Milestone Highlight Box */}
                <div className="bg-paper/5 border border-gold/15 p-4 rounded-2xl flex gap-3 items-start">
                  <BookOpen className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gold/90 mb-1">Important Highlight</h5>
                    <p className="text-paper/90 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedStep.details.keyHighlight}
                    </p>
                  </div>
                </div>

                {/* 4. Processing Time & Parental Advice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-paper/5 border border-paper/10 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-gold text-[10px] uppercase font-bold tracking-wider mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Processing Time</span>
                    </div>
                    <p className="text-paper/90 text-sm font-light">
                      {selectedStep.details.timeToComplete}
                    </p>
                  </div>

                  <div className="bg-paper/5 border border-paper/10 p-4 rounded-xl">
                    <span className="text-gold text-[10px] uppercase font-bold tracking-wider block mb-2">Parental Instructions</span>
                    <ul className="space-y-1 text-xs text-paper/80 font-light list-disc list-inside">
                      {selectedStep.details.tips.map((tip, tIdx) => (
                        <li key={tIdx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
