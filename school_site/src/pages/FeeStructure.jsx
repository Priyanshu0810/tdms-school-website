import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CreditCard, Calendar, Check, Info, FileText, Download, ShieldCheck, HelpCircle } from "lucide-react";

const feeCategories = [
  {
    id: "primary-prep",
    title: "Pre-Primary (Nursery, LKG, UKG)",
    termlyTuition: "₹12,500",
    annualCharges: "₹6,000",
    examFee: "₹1,200",
    developmentFee: "₹3,000",
    otherDetails: "Covers standard classroom materials, play kits, and sensory-development tools."
  },
  {
    id: "primary",
    title: "Primary School (Classes I - V)",
    termlyTuition: "₹15,000",
    annualCharges: "₹7,500",
    examFee: "₹1,500",
    developmentFee: "₹4,000",
    otherDetails: "Covers basic informatics training, library access, and foundational art modules."
  },
  {
    id: "middle",
    title: "Middle School (Classes VI - VIII)",
    termlyTuition: "₹18,500",
    annualCharges: "₹8,500",
    examFee: "₹1,800",
    developmentFee: "₹4,500",
    otherDetails: "Covers science laboratory equipment handling, basic robotics introduction, and sports utilities."
  },
  {
    id: "secondary",
    title: "Secondary School (Classes IX - X)",
    termlyTuition: "₹21,000",
    annualCharges: "₹9,500",
    examFee: "₹2,200",
    developmentFee: "₹5,000",
    otherDetails: "Includes board preparation seminars, advanced laboratories, career counseling, and IT tools."
  },
  {
    id: "sr-secondary",
    title: "Senior Secondary (Classes XI - XII)",
    termlyTuition: "₹25,500",
    annualCharges: "₹11,000",
    examFee: "₹2,500",
    developmentFee: "₹6,000",
    otherDetails: "Specialized streams (Science / Commerce/ Humanities). Covers practicals, lab equipment, and aptitude diagnostics."
  }
];

const additionalFees = [
  { item: "One-Time Registration Fee (New Admissions)", cost: "₹1,500", frequency: "One-time" },
  { item: "One-Time Admission Fee (New Admissions)", cost: "₹10,000", frequency: "One-time" },
  { item: "Caution Money (Refundable)", cost: "₹5,000", frequency: "One-time" },
  { item: "Computer & ICT Lab Fees (VI - XII)", cost: "₹1,200", frequency: "Annually" },
  { item: "Science Lab Fee (XI - XII Practical streams)", cost: "₹2,500", frequency: "Annually" }
];

export default function FeeStructure() {
  const [selectedTerm, setSelectedTerm] = useState("termly");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Financial Transparency</span>
          <div className="inline-block group cursor-pointer relative pb-2 mb-6">
            <h1 className="text-4xl sm:text-5xl font-serif text-ink leading-tight">School <span className="italic font-light text-gold">Fee Structure</span></h1>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold origin-left transform scale-x-100 transition-transform duration-500 ease-out rounded" />
          </div>
          <p className="text-ink/70 text-base font-light leading-relaxed">
            At Thelma David Memorial School (TDMS), we believe in keeping our fee schedules transparent, straightforward, and supportive of your family's financial planning. Below is the detailed breakdown for the scholastic year 2026-2027.
          </p>
        </div>

        {/* Highlight Banner / Payment Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-ink mb-2">Flexible Terms</h4>
            <p className="text-ink/65 text-xs font-light leading-relaxed">
              Fees can be settled under termly schedules (4 quarters per year) or annually to avail smart institutional waivers.
            </p>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
              <CreditCard className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-ink mb-2">Digital Portal Payment</h4>
            <p className="text-ink/65 text-xs font-light leading-relaxed">
              Parents can easily pay fees online via UPI, Net Banking, and Credit/Debit Cards directly on the academic console.
            </p>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-gold/15 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-ink mb-2">No Hidden Costs</h4>
            <p className="text-ink/65 text-xs font-light leading-relaxed">
              Annual scholastic charges are explicitly stated with no unplanned requirements. Receipts are dispatched digitally instantly.
            </p>
          </div>
        </div>

        {/* Main Fee Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-ink mb-8 text-center sm:text-left">Class-wise Fee Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {feeCategories.map((fee, idx) => (
              <div 
                key={fee.id}
                className="bg-card-bg rounded-3xl border border-gold/15 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 border-b border-ink/5 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium">{fee.title}</h3>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-gold bg-gold/5 px-2.5 py-1 rounded-md">
                      Academic Year
                    </span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-center sm:text-left">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ink/40 block mb-1">Quarterly Tuition</span>
                      <span className="text-2xl font-serif font-bold text-gold">{fee.termlyTuition}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ink/40 block mb-1">Annual Charges</span>
                      <span className="text-2xl font-serif font-semibold text-ink">{fee.annualCharges}</span>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <span className="text-[10px] uppercase font-bold text-ink/40 block mb-1">Exam & Dev Charges</span>
                      <span className="text-lg font-mono font-medium text-ink/85">{fee.examFee} / {fee.developmentFee}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-ink/5 rounded-2xl p-4 flex gap-4 items-start">
                  <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-ink/75 leading-relaxed font-light">
                    {fee.otherDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Charges and One-time fees */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* One-time and Add-ons table */}
          <div className="lg:col-span-2 bg-card-bg rounded-3xl border border-gold/15 p-8 shadow-sm">
            <h3 className="text-2xl font-serif text-ink mb-6">One-Time & Specific Utility Fees</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gold/15 text-[10px] uppercase font-bold tracking-widest text-ink/40 pb-4">
                    <th className="py-3 px-3">Fee Component</th>
                    <th className="py-3 px-3">Charges (₹)</th>
                    <th className="py-3 px-3">Payment Interval</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalFees.map((fee, idx) => (
                    <tr key={idx} className="border-b border-ink/5 text-ink/80 font-light hover:bg-gold/5 transition-colors">
                      <td className="py-4 px-3 font-medium text-ink">{fee.item}</td>
                      <td className="py-4 px-3 font-serif font-semibold text-gold">{fee.cost}</td>
                      <td className="py-4 px-3 text-xs uppercase tracking-wider text-ink/50">{fee.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment schedule rules */}
          <div className="bg-ink text-paper rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-gold/10 rounded-full blur-xl" />
            <h3 className="text-2xl font-serif text-white mb-6">Payment Term Guidelines</h3>
            
            <div className="space-y-6 text-sm font-light text-paper/85">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gold/25 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 text-xs font-bold font-mono">1</div>
                <p>
                  <strong>First Quarter Term:</strong> Payable by April 15th (Includes registration & annual composites).
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gold/25 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 text-xs font-bold font-mono">2</div>
                <p>
                  <strong>Subsequent Quarters:</strong> Quarter II is due by July 15th, Quarter III by October 15th, and Quarter IV by January 15th.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-gold/25 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 text-xs font-bold font-mono">3</div>
                <p>
                  <strong>Late Surcharges:</strong> A standard localized late surcharge of ₹50 per day is applied starting from the 16th of the due month.
                </p>
              </div>

              <div className="pt-6 border-t border-paper/10 mt-6 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest block mb-4 text-gold/80">Require Further Support?</span>
                <p className="text-xs mb-4 text-paper/70">Connect directly with our accounts and bursary team today.</p>
                <div className="flex gap-4 justify-center">
                  <Link to="/contact" className="w-full py-3 bg-gold text-ink text-[10px] uppercase font-extrabold tracking-widest rounded-xl hover:bg-white text-center transition-all">
                    Contact Accounts
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs inside styling */}
        <div className="bg-gold/5 border border-gold/10 rounded-[3rem] p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-serif text-ink mb-8 text-center">Frequently Answered Queries</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-lg text-ink mb-2">Can I settle the entire academic year's fee upfront?</h4>
              <p className="text-ink/75 text-sm font-light leading-relaxed">
                Yes! Families who choose to complete the absolute annual fee at the start of the session (before unique April 15th deadline) are eligible for a 5% waiver on overall scholastic tuition charges.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-ink mb-2">Are sibling discounts available under curriculum enrollment?</h4>
              <p className="text-ink/75 text-sm font-light leading-relaxed">
                Certainly. A sibling discount of 10% on tuition charge is active for the second elder/younger direct biological child studying at TDMS Varanasi.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-ink mb-2">Is the caution deposit fully refundable at separation?</h4>
              <p className="text-ink/75 text-sm font-light leading-relaxed">
                The caution deposit of ₹5,000 is an interest-free balance. It is fully refunded at completion of schooling, or in case of mid-year withdrawals, after clearances of all pending books or library issues.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-ink mb-2">What is the policy around mid-session withdrawals?</h4>
              <p className="text-ink/75 text-sm font-light leading-relaxed">
                Withdrawals can be registered by supplying a one-month absolute written warning to the main principal office. Only tuition charges for the active calendar month are calculated; advance term dues are refunded.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
