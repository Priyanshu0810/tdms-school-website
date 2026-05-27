import Hero from "../components/Hero";
import Features from "../components/Features";
import SchoolSlider from "../components/SchoolSlider";
import Achievements from "../components/Achievements";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function Home({ onNavigate }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero onStart={() => onNavigate("admissions")} onNavigate={onNavigate} />
      
      <SchoolSlider />

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 md:py-24 px-6 md:px-12 bg-paper relative overflow-hidden shadow-sm z-20">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-gold text-[10px] uppercase font-extrabold tracking-[0.4em] mb-6 block"
              >
                Our DNA
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-ink tracking-tighter">
                Nurturing <span className="italic font-light">Minds</span>, <br />
                Empowering <span className="text-gold italic">Futures</span>.
              </h2>
              <div className="space-y-8 text-ink/80 leading-relaxed font-medium text-base">
                <p>
                  Since 1924, Thelma David Memorial School has been a beacon of educational excellence in Varanasi. Our holistic approach ensures that students are not just academically proficient but also ethically grounded and socially responsible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-ink font-serif text-xl mb-3">Our Mission</h4>
                    <p className="text-sm">To provide a stimulating learning environment where every child feels valued and inspired to achieve their personal best.</p>
                  </div>
                  <div>
                    <h4 className="text-ink font-serif text-xl mb-3">Our Vision</h4>
                    <p className="text-sm">To be a globally recognized institution that produces compassionate leaders and lifelong learners.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-full">
              <div className="h-[300px] sm:h-[400px] lg:h-full lg:min-h-[480px] bg-ink/5 rounded-xl overflow-hidden relative group">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/src/assets/images/sch_3.jpg" 
                  alt="School Life" 
                  className="w-full h-full object-cover object-top transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Activities */}
      <Achievements />

      <Features />

      {/* Infrastructure Section */}
      <section className="py-16 md:py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-4 block">Our Campus</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">World-Class <span className="italic font-light">Facilities</span>.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[800px] h-auto">
            <div className="md:col-span-2 md:row-span-2 bg-ink/5 rounded-xl overflow-hidden relative group h-[400px] md:h-auto">
              <img 
                src="https://image.pollinations.ai/prompt/school%20library%20interior%20wooden%20shelves%20thousands%20books%20warm%20light%20reading%20tables%20India%2C%20no%20people%2C%20photorealistic?width=800&height=900&nologo=true&seed=201" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                alt="Central Library" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ink/80 to-transparent text-paper">
                <h4 className="text-2xl font-serif">Central Library</h4>
                <p className="text-sm opacity-70">A vast repository of knowledge with over 50,000 volumes.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-ink/5 rounded-xl overflow-hidden relative group h-[300px] md:h-auto">
              <img src="https://image.pollinations.ai/prompt/modern%20robotics%20science%20lab%20school%20computers%20microscopes%20equipment%20India%20bright%20clean%2C%20no%20people%2C%20photorealistic?width=800&height=500&nologo=true&seed=202" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" alt="Labs" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-ink/80 to-transparent text-paper">
                 <h4 className="text-2xl font-serif">Robotics & AI Lab</h4>
                 <p className="text-sm opacity-70">Empowering future engineers with hands-on experience.</p>
              </div>
            </div>
            <div className="bg-ink/5 rounded-xl overflow-hidden relative group h-[300px] md:h-auto">
               <img src="https://image.pollinations.ai/prompt/school%20sports%20ground%20cricket%20field%20basketball%20court%20India%20green%20grass%20sunny%20day%2C%20no%20people%2C%20photorealistic?width=800&height=500&nologo=true&seed=203" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" alt="Sports" />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-ink/80 to-transparent text-paper"><h4 className="text-lg font-serif">Sports Arena</h4></div>
            </div>
            <div className="bg-ink/5 rounded-xl overflow-hidden relative group h-[300px] md:h-auto">
               <img src="https://image.pollinations.ai/prompt/school%20auditorium%20performing%20arts%20stage%20colorful%20curtain%20lights%20India%2C%20no%20people%2C%20photorealistic%20wide%20shot?width=800&height=500&nologo=true&seed=204" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" alt="Arts" />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-ink/80 to-transparent text-paper"><h4 className="text-lg font-serif">Performing Arts</h4></div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 bg-paper border-t border-ink/5">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
               <div className="lg:col-span-1">
                  <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-4 block">Testimonials</span>
                  <h2 className="text-4xl font-serif leading-tight">What our <span className="italic font-light">community</span> says.</h2>
                  <p className="mt-6 text-ink/60 font-light leading-relaxed">
                     Hear from parents, alumni, and students about their journey at Thelma David Memorial School.
                  </p>
               </div>
               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { name: "Mrs. Shanthi Rao", role: "Parent", text: "The individual attention my children receive at TDMS is unparalleled. They have grown so much in confidence." },
                    { name: "Rahul Verma", role: "Alumni 2018", text: "My years at TDMS laid the foundation for my career in Medicine. The moral values taught here stay with you forever." }
                  ].map((t, i) => (
                    <div key={i} className="p-10 bg-card-bg shadow-sm border border-border-subtle rounded-xl transition-colors duration-300">
                       <p className="text-text-subtle italic mb-8">"{t.text}"</p>
                       <div>
                          <div className="font-serif text-xl text-ink">{t.name}</div>
                          <div className="text-[10px] uppercase font-bold text-gold tracking-widest mt-1">{t.role}</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <div className="max-w-xl">
              <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-4 block">Happenings</span>
              <h2 className="text-4xl font-serif text-paper">Academy <span className="italic">News</span> & Events</h2>
            </div>
            <button className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest border-b border-paper/20 pb-2 hover:text-gold hover:border-gold transition-all group text-paper">
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-white/5 rounded-2xl mb-8 overflow-hidden">
                   <img src={["/src/assets/images/sch_20.jpg","/src/assets/images/sch_23.jpg","/src/assets/images/sch_8.jpg"][i % 3]} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 text-gold text-[10px] uppercase font-bold tracking-widest mb-4">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors text-paper">{item.title}</h3>
                <p className="text-paper/60 text-sm leading-relaxed font-light">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-paper text-ink text-center px-6 border-t border-ink/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl font-serif mb-8 opacity-20 italic">"</div>
          <h2 className="text-2xl md:text-3xl font-serif leading-tight font-light italic mb-8">
            Education is not the learning of facts, but the training of the mind to think.
          </h2>
          <div className="text-gold text-[11px] uppercase font-bold tracking-[0.4em]">Albert Einstein</div>
        </div>
      </section>
    </motion.div>
  );
}
