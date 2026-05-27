import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BookOpen, Award, Layers, Search } from "lucide-react";

export default function Academics() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Future-Ready</span>
            <h1 className="text-5xl font-serif mb-6 lowercase leading-tight">Academic <span className="italic font-light">Curriculum</span>.</h1>
            <p className="text-ink/60 text-base font-light leading-relaxed">
              We offer a rigorous, interdisciplinary curriculum that prepares students to solve complex global challenges.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full bg-ink/5 border-none rounded-full px-12 py-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className="space-y-10">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-6 text-gold text-ink/40">Degrees</h4>
              <div className="space-y-4">
                {["Undergraduate", "Graduate", "Doctoral", "Certificate"].map((deg, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border border-ink/20 group-hover:border-gold transition-colors" />
                    <span className="text-xs uppercase font-bold tracking-widest text-ink/60 group-hover:text-ink">{deg}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-paper border border-ink/5 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center rounded-xl">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-ink/5 rounded-full text-ink/40">
                    {course.credits} Credits
                  </div>
                </div>
                <h3 className="text-3xl font-serif mb-2 group-hover:text-gold transition-colors">{course.name}</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-ink/40 mb-6">{course.faculty}</p>
                <p className="text-sm text-ink/60 leading-relaxed mb-8">{course.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-ink text-paper text-[9px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold transition-colors">
                    Syllabus PDF
                  </button>
                  <button className="px-6 py-3 border border-ink/10 text-ink text-[9px] uppercase font-bold tracking-widest rounded-xl hover:bg-ink hover:text-paper transition-all">
                    Course Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
