import { motion } from "motion/react";
import { BookOpen, Users, Globe, Zap, Shield, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      desc: "Consistently delivering high performance in board examinations and beyond."
    },
    {
      icon: Users,
      title: "Character Building",
      desc: "Instilling moral values and discipline to build responsible future citizens."
    },
    {
      icon: Globe,
      title: "Global Ready",
      desc: "Curriculum prepared to meet international standards of education."
    },
    {
      icon: Zap,
      title: "Digital Learning",
      desc: "Smart classrooms and computer labs for a tech-savvy generation."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      desc: "A secure and nurturing campus in the heart of Maldahiya, Varanasi."
    },
    {
      icon: Heart,
      title: "Co-Curriculars",
      desc: "Extensive focus on sports, arts, and cultural development."
    }
  ];

  return (
    <section className="py-16 bg-ink text-paper px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-gold text-[10px] uppercase font-extrabold tracking-[0.3em] mb-2 block">The TDMS Way</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">The <span className="italic font-light">Pillars</span> of our <br />Educational Philosophy.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-l border-white/10 pl-8 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
              <div className="w-10 h-10 flex items-center justify-center mb-8 border border-white/20 rounded-lg group-hover:border-gold transition-colors">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform">{f.title}</h3>
              <p className="text-paper/60 text-sm leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
