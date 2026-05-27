import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Info } from "lucide-react";

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await fetch("/api/admissions/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName:  formData.parentName,
          phone:       formData.phone,
          email:       formData.email,
          grade:       formData.grade,
          details:     formData.details,
          submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        })
      });
      // no-cors mode mein response check nahi hota, isliye directly success
      setSubmitted(true);
      setFormData({ studentName: "", parentName: "", phone: "", email: "", grade: "", details: "" });
    } catch (err) {
      console.error("Form submit error:", err);
      setErrorMsg("Network error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Apply Now</span>
            <h1 className="text-5xl font-serif mb-6 lowercase leading-tight">Your <span className="italic font-light">journey</span> starts here.</h1>
            <p className="text-ink/60 text-base font-light leading-relaxed mb-8">
              Thelma David Memorial School seeks students who are intellectually curious, community-minded, and ready to challenge themselves. Our admissions process is holistic, looking beyond academic transcripts to recognize unique talents and potential.
            </p>

            <div className="space-y-8">
              {[
                { title: "Review Programs", desc: "Understand our CBSE curriculum, sports, and co-curricular domains." },
                { title: "Initial Inquiry", desc: "Submit your interest via the formal inquiry form." },
                { title: "Parent & Candidate Session", desc: "Interact with our principal and head of admissions." },
                { title: "Decision", desc: "Join the TDMS scholar community." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center font-serif text-gold flex-shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-ink/60 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gold/5 border border-gold/10 rounded-3xl flex gap-6 italic">
              <Info className="w-6 h-6 text-gold flex-shrink-0" />
              <p className="text-sm text-ink/70 leading-relaxed">
                "We don't look for a pre-moulded mind; we welcome standard potential and sculpt future-ready thinkers." 
                <span className="block mt-4 font-bold not-italic text-[10px] uppercase tracking-widest">— Head of Admissions, TDMS</span>
              </p>
            </div>
          </div>

          <div>
            <div className="bg-paper border border-ink/10 p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
               {submitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-20"
                 >
                   <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-8" />
                   <h2 className="text-3xl font-serif mb-4">Inquiry Received</h2>
                   <p className="text-ink/60 text-sm max-w-sm mx-auto mb-10">
                     Thank you for your interest in Thelma David Memorial School. Our School Admissions Committee will review your details and contact you via phone or email within 2 business days.
                   </p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="text-[10px] uppercase font-bold tracking-widest text-gold hover:text-ink transition-all"
                   >
                     Submit another inquiry
                   </button>
                 </motion.div>
               ) : (
                 <>
                  <h2 className="text-2xl font-serif mb-8">Admissions Inquiry</h2>
                  {errorMsg && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-600 text-xs rounded-xl">
                      {errorMsg}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Student's Full Name</label>
                      <input 
                        required 
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" 
                        placeholder="e.g. Rahul Sharma" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Parent / Guardian Name</label>
                        <input 
                          required 
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" 
                          placeholder="e.g. Rajesh Sharma" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Contact Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" 
                          placeholder="e.g. +91 98765 43210" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Parent's Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none" 
                        placeholder="parent@example.com" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Grade / Class of Admission</label>
                      <select 
                        required 
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none appearance-none cursor-pointer"
                      >
                        <option value="">-- Select Class --</option>
                        <option value="Nursery / LKG / UKG">Nursery / LKG / UKG</option>
                        <option value="Class I - V (Primary School)">Class I - V (Primary School)</option>
                        <option value="Class VI - VIII (Middle School)">Class VI - VIII (Middle School)</option>
                        <option value="Class IX - X (High School)">Class IX - X (High School)</option>
                        <option value="Class XI - XII (Science Stream)">Class XI - XII (Science Stream)</option>
                        <option value="Class XI - XII (Commerce Stream)">Class XI - XII (Commerce Stream)</option>
                        <option value="Class XI - XII (Humanities Stream)">Class XI - XII (Humanities Stream)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40">Previous School & Board Details / Query</label>
                      <textarea 
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none min-h-[100px] resize-none" 
                        placeholder="Please mention previous school name, board of study (CBSE/ICSE/State Board), science subject choice, or general queries..." 
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold transition-colors block disabled:opacity-50"
                    >
                      {loading ? "Submitting Inquiry..." : "Submit Admission Inquiry"}
                    </button>
                    
                    <p className="text-[10px] text-ink/40 text-center uppercase tracking-widest mt-6">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </form>
                 </>
               )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
