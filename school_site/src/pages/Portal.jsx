import { motion } from "motion/react";
import { User, Bell, Book, Calendar, Award, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export default function Portal() {
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
      className="pt-24 pb-12 px-6 bg-ink/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            <div className="bg-paper p-8 rounded-[2rem] border border-ink/5 text-center shadow-sm">
              <div className="w-24 h-24 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-gold/20">
                <User className="w-12 h-12 text-gold" />
              </div>
              <h2 className="text-xl font-serif font-bold">Alex Simmons</h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-ink/40 mt-1">Class XII • Senior Secondary</p>
              
              <div className="mt-8 pt-8 border-t border-ink/5 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-serif">96.4%</div>
                  <div className="text-[8px] uppercase font-bold text-ink/30 tracking-widest">Attendance</div>
                </div>
                <div className="text-center border-l border-ink/5">
                  <div className="text-lg font-serif text-red-500 font-bold">Agni</div>
                  <div className="text-[8px] uppercase font-bold text-ink/30 tracking-widest">School House</div>
                </div>
              </div>
            </div>

            <nav className="bg-paper p-4 rounded-[2rem] border border-ink/5 shadow-sm">
              {[
                { icon: Book, label: "My Courses" },
                { icon: Calendar, label: "Schedule" },
                { icon: Bell, label: "Notifications", count: 3 },
                { icon: Award, label: "Achievements" },
                { icon: LogOut, label: "Sign Out" }
              ].map((item, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-ink/5 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-ink/40 group-hover:text-gold transition-colors" />
                    <span className="text-xs uppercase font-bold tracking-widest text-ink/70">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="bg-gold text-paper text-[8px] font-bold px-2 py-0.5 rounded-full">{item.count}</span>
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            <div>
              <h1 className="text-4xl font-serif mb-8">Welcome back, <span className="italic">Alex</span>.</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course) => (
                  <div key={course.id} className="bg-paper p-8 rounded-[2rem] border border-ink/5 shadow-sm group hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-gold">{course.id}</div>
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-paper transition-colors">
                        <Book className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif mb-2">{course.name}</h3>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-ink/40 mb-6">{course.faculty}</p>
                    <p className="text-sm text-ink/60 leading-relaxed mb-8">{course.description}</p>
                    <button className="text-[10px] uppercase font-bold tracking-widest text-ink border-b border-ink/10 pb-1 hover:text-gold hover:border-gold transition-all">
                      Access Curriculum
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ink p-12 rounded-[3rem] text-paper relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold mb-4">Announcement</h3>
               <h2 className="text-2xl font-serif mb-6">Upcoming Half-Yearly Examinations</h2>
               <p className="text-paper/60 text-sm max-w-xl leading-relaxed mb-8">
                 The Half-Yearly Examinations for the 2026-27 academic session will begin on September 14th. All students are advised to collect their syllabus copy and check the date sheet.
               </p>
               <button className="bg-paper text-ink px-8 py-3 text-[10px] uppercase font-bold tracking-widest rounded-full hover:bg-gold transition-colors">
                 View Key Dates
               </button>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}
