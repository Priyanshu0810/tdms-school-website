import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    inquiryType: "",
    message: ""
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
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType:    "Contact Inquiry",
          fullName:    formData.fullName,
          contactInfo: formData.contactInfo,
          inquiryType: formData.inquiryType,
          message:     formData.message,
          submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        })
      });
      setSubmitted(true);
      setFormData({ fullName: "", contactInfo: "", inquiryType: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
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
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Get in Touch</span>
            <h1 className="text-5xl font-serif mb-6 leading-tight">We are here to <span className="italic font-light">listen</span>.</h1>
            <p className="text-ink/60 text-base font-light leading-relaxed mb-8 max-w-md">
              Whether you have questions about admissions, academics, fee structure, or bus routes, our front-office helpdesk team is ready to assist you.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-card-bg flex items-center justify-center rounded-2xl shadow-sm border border-border-subtle text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-ink">Our Campus</h4>
                  <p className="text-text-subtle text-sm italic">Maldahiya, Varanasi, Uttar Pradesh 221002</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-card-bg flex items-center justify-center rounded-2xl shadow-sm border border-border-subtle text-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-ink">Call Helpdesk</h4>
                  <p className="text-text-subtle text-sm">+91 542 123 4567, +91 987 654 3210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-card-bg flex items-center justify-center rounded-2xl shadow-sm border border-border-subtle text-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-ink">Email Support</h4>
                  <p className="text-text-subtle text-sm">contact@thelmadavidmemorial.edu.in</p>
                </div>
              </div>
            </div>

            <div className="mt-20 rounded-[3rem] overflow-hidden -0 border border-ink/10 h-72">
               {/* Embed Map Placeholder */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.44147043834!2d82.9087063!3d25.3216839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db7bfaf2065%3A0x6a2c9c7f1a3b1f!2sMaldahiya%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716111000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>

          <div className="bg-ink p-12 rounded-[3.5rem] text-paper relative overflow-hidden flex flex-col justify-center">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-serif mb-4">Message Sent</h2>
                <p className="text-paper/60 mb-10">We've received your query and our school administrative office will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-paper text-ink text-[11px] uppercase font-extrabold tracking-widest rounded-full"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-4xl font-serif mb-6 leading-tight">Send a <span className="italic text-gold">Direct Inquiry</span>.</h2>
                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                    {errorMsg}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-paper/40">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-paper/5 border-b border-paper/10 py-4 focus:border-gold outline-none transition-colors text-paper" 
                      placeholder="e.g. Ramesh Kumar" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-paper/40">Email Address / Contact No.</label>
                    <input 
                      required 
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      className="w-full bg-paper/5 border-b border-paper/10 py-4 focus:border-gold outline-none transition-colors text-paper" 
                      placeholder="e.g. parent@example.com or 9876543210" 
                    />
                  </div>
                  <div className="space-y-2 block">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-paper/40 block mb-2">Nature of Inquiry</label>
                    <select 
                      required 
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border-b border-paper/10 py-4 focus:border-gold outline-none transition-colors appearance-none cursor-pointer text-paper"
                    >
                      <option value="" className="bg-ink text-paper">-- Select Inquiry Type --</option>
                      <option value="Admission & Eligibility" className="bg-ink text-paper">Admission & Eligibility</option>
                      <option value="Fees & Installment Options" className="bg-ink text-paper">Fees & Installment Options</option>
                      <option value="Bus Routes & Transport" className="bg-ink text-paper">Bus Routes & Transport</option>
                      <option value="CBSE Academic Curriculum" className="bg-ink text-paper">CBSE Academic Curriculum</option>
                      <option value="Meeting the Principal" className="bg-ink text-paper">Meeting the Principal</option>
                      <option value="Other General Support" className="bg-ink text-paper">Other General Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-paper/40">Message</label>
                    <textarea 
                      rows="4" 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-paper/5 border-b border-paper/10 py-4 focus:border-gold outline-none transition-colors resize-none text-paper" 
                      placeholder="Provide details about your query here..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 bg-gold text-ink text-[11px] uppercase font-extrabold tracking-widest rounded-full hover:bg-paper transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
