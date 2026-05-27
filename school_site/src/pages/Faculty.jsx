import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("/api/faculty")
      .then(res => res.json())
      .then(data => setFaculty(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Our Minds</span>
          <h1 className="text-5xl font-serif mb-6 lowercase leading-tight">Distinguished <span className="italic font-light">Faculty</span>.</h1>
          <p className="text-ink/60 text-base font-light max-w-xl leading-relaxed">
            Thelma David Memorial School is home to world-renowned educators and industry practitioners who bring real-world expertise into the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {faculty.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper border border-ink/5 p-8 rounded-[3rem] shadow-sm group hover:shadow-xl transition-all"
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gold mb-6">{member.role}</div>
                <p className="text-ink/40 text-xs font-semibold uppercase tracking-widest mb-8">{member.department}</p>
                
                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 border border-ink/10 flex items-center justify-center rounded-full hover:bg-ink hover:text-paper transition-all">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 border border-ink/10 flex items-center justify-center rounded-full hover:bg-gold hover:text-paper transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
