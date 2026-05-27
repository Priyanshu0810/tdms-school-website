import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-12 px-6 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Our Goal Section */}
        <div id="our-goal" className="max-w-3xl mx-auto text-center mb-16 pt-8">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-3 block">Our Goal</span>
          <div className="inline-block group cursor-pointer relative pb-2 mb-6">
            <h1 className="text-4xl sm:text-5xl font-serif leading-tight">A Century of <span className="italic font-light text-gold">Education</span>.</h1>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded" />
          </div>
          <p className="text-ink/70 text-base font-light leading-relaxed max-w-2xl mx-auto">
            Founded in 1924, Thelma David Memorial School (TDMS) has been a cornerstone of the Varanasi community, dedicated to fostering academic excellence, moral foresight, and equipping the next generation with future-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
          <div className="md:col-span-5 lg:col-span-4 max-w-[280px] w-full aspect-[4/5] bg-ink/5 rounded-xl overflow-hidden shadow-xl border border-ink/5 mx-auto">
            <img src="https://image.pollinations.ai/prompt/historic%20Indian%20Christian%20school%20building%20Varanasi%201924%2C%20heritage%20architecture%2C%20warm%20golden%20light%2C%20lush%20garden%2C%20nostalgic?width=800&height=600&nologo=true&seed=10" alt="Founder" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <div className="group cursor-pointer inline-flex flex-col items-start mb-3">
              <h2 className="text-4xl font-serif text-ink">Our Heritage</h2>
              <div className="w-24 h-[3px] bg-gold rounded mt-3 origin-left transform group-hover:scale-x-150 transition-transform duration-500 ease-out" />
            </div>
            <div className="space-y-6 text-ink/75 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <p>
                What began as a small vision to provide quality education in the heart of Varanasi has blossomed into a premier school serving thousands of students. Named in memory of Thelma David, our school continues to uphold the values of compassion, integrity, and self-less service.
              </p>
              <p>
                Our campus in Maldahiya combines historic charm with modern academic infrastructure, creating a unique learning environment where tradition meets innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center pt-12 border-t border-ink/5">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="group cursor-pointer inline-flex flex-col items-start mb-4">
              <h2 className="text-4xl font-serif text-ink">Mission & <span className="italic text-gold">Vision</span></h2>
              <div className="w-28 h-[3px] bg-gold rounded mt-3 origin-left transform group-hover:scale-x-150 transition-transform duration-500 ease-out" />
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-gold/5 rounded-xl border border-gold/10">
                <h4 className="font-serif text-xl mb-4 text-ink">Our Mission</h4>
                <p className="text-sm font-light leading-relaxed text-ink/70">
                  To provide a stimulating learning environment where every child feels valued, safe, and inspired to achieve their full potential. We strive to develop well-rounded individuals equipped with the knowledge and character to navigate a complex world.
                </p>
              </div>
              <div className="p-8 bg-ink/5 rounded-xl border border-ink/10">
                <h4 className="font-serif text-xl mb-4 text-ink">Our Vision</h4>
                <p className="text-sm font-light leading-relaxed text-ink/70">
                  To be a leading global institution that empowers students with a holistic education, fostering a passion for lifelong learning, global citizenship, and social responsibility.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-4 max-w-[280px] w-full aspect-[4/5] bg-ink/5 rounded-xl overflow-hidden shadow-xl border border-ink/5 mx-auto order-first md:order-last">
            <img src="https://image.pollinations.ai/prompt/Indian%20school%20students%20future%20bright%20learning%20modern%20classroom%2C%20inspired%2C%20hopeful%2C%20photorealistic?width=800&height=600&nologo=true&seed=11" alt="Vision" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Director's Message */}
        <div id="director" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center pt-16 border-t border-ink/5">
          <div className="md:col-span-5 lg:col-span-4 max-w-[280px] w-full aspect-[4/5] bg-ink/5 rounded-xl overflow-hidden shadow-xl border border-ink/5 mx-auto">
            <img 
              src="/src/assets/images/director_sir.jpg" 
              alt="Director" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Leadership Voice</span>
            <div className="group cursor-pointer inline-flex flex-col items-start mb-3">
              <h2 className="text-4xl font-serif text-ink">Director's <span className="italic text-gold font-normal">Message</span>.</h2>
              <div className="w-24 h-[3px] bg-gold rounded mt-3 origin-left transform group-hover:scale-x-150 transition-transform duration-500 ease-out" />
            </div>
            <div className="space-y-6 text-ink/75 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <p className="font-medium text-ink">"Embrace learning as a lifelong adventure, not a destination."</p>
              <p>
                As the Director of Thelma David Memorial School, I am incredibly proud to guide an school with nearly a century of tradition and academic leadership in Varanasi. Our focus is to nurture minds that are globally competitive yet deeply grounded in human integrity and culture.
              </p>
              <p>
                In today's fast-evolving landscape, education must go past textbooks. We are dedicated to cultivating critical thinking, AI literacy, creative arts, and active civic leadership. We partner with parents to ensure that every student's learning path is personalized, challenging, and filled with compassion.
              </p>
              <div className="pt-4">
                <span className="block font-serif text-lg font-bold text-ink">Dr. S. K. David</span>
                <span className="block text-[11px] uppercase tracking-widest text-gold font-extrabold">Director, TDMS Varanasi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div id="principal" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center pt-16 border-t border-ink/5">
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center order-last md:order-first">
            <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">Academic Direction</span>
            <div className="group cursor-pointer inline-flex flex-col items-start mb-3">
              <h2 className="text-4xl font-serif text-ink">Principal's <span className="italic text-gold font-normal">Message</span>.</h2>
              <div className="w-24 h-[3px] bg-gold rounded mt-3 origin-left transform group-hover:scale-x-150 transition-transform duration-500 ease-out" />
            </div>
            <div className="space-y-6 text-ink/75 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <p className="font-medium text-ink">"Every child holds a unique spark; our mission is to ignite it."</p>
              <p>
                Welcome to the online campus portal of TDMS. It is a genuine privilege to serve as the Principal of an institution with such an celebrated heritage of child-centric growth. Here, we empower each student to realize their unique capabilities, build self-belief, and welcome curiosity.
              </p>
              <p>
                With state-of-the-art interactive labs, spacious sporting infrastructure, and a passionate cohort of highly qualified teachers, we construct a nursery of growth. We encourage students to fearlessly explore and ask questions to build a reliable future for our society.
              </p>
              <div className="pt-4">
                <span className="block font-serif text-lg font-bold text-ink">Mrs. Helen David</span>
                <span className="block text-[11px] uppercase tracking-widest text-gold font-extrabold">Principal, TDMS Varanasi</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-4 max-w-[280px] w-full aspect-[4/5] bg-ink/5 rounded-xl overflow-hidden shadow-xl border border-ink/5 mx-auto order-first md:order-last">
            <img 
              src="/src/assets/images/principal_maam.jpg" 
              alt="Principal" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-12">
            {[
                { title: "Academic Rigor", desc: "We push beyond textbooks to cultivate critical thinking." },
                { title: "Character First", desc: "Values are integrated into every lesson we teach." },
                { title: "Inclusive Culture", desc: "A welcoming space for students from all walks of life." }
            ].map((item, i) => (
                <div key={i} className="p-12 bg-card-bg rounded-xl border border-border-subtle shadow-sm hover:border-gold/30 transition-all duration-300">
                    <h3 className="text-2xl font-serif mb-4 text-ink">{item.title}</h3>
                    <p className="text-sm text-text-subtle font-light">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
