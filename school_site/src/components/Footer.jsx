import { GraduationCap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a1d37] text-[#fdfcf0] py-12 px-6 border-t border-gold/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40 shadow-sm flex-shrink-0" style={{background: "#d4af37"}}>
              <img src="/src/assets/images/logo_footer.png" alt="TDMS Logo" className="w-full h-full object-cover" style={{mixBlendMode: "multiply"}} />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight uppercase block leading-none text-[#fdfcf0]">Thelma David</span>
              <span className="text-[9px] uppercase font-semibold text-[#fdfcf0]/60 tracking-widest block mt-0.5">Memorial School</span>
            </div>
          </div>
          <p className="text-[#fdfcf0]/60 text-sm leading-relaxed mb-4">
            Providing Quality Education in Varanasi since 1924. Dedicated to nurturing the potential of every child.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-[#fdfcf0]/20 flex items-center justify-center rounded-full hover:bg-[#fdfcf0] hover:text-[#0a1d37] transition-all">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#fdfcf0]/70">
            {[
              { label: "Academic Curriculum", path: "/academic-curriculum" },
              { label: "Co-Curricular Activities", path: "/co-curricular" },
              { label: "School Houses", path: "/school-houses" },
              { label: "Academic Calendar", path: "/calendar" },
              { label: "Admission Process", path: "/admission-process" },
              { label: "Fee Structure", path: "/fee-structure" },
              { label: "Faculty Directory", path: "/faculty" }
            ].map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-[#fdfcf0]/70">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>Maldahiya, Varanasi, UP 221002</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <span>+91 542 123 4567</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <span>contact@thelmadavidmemorial.edu.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold mb-4">Newsletter</h4>
          <p className="text-sm text-[#fdfcf0]/70 mb-4">Stay updated with our latest academic news and events.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-gold max-w-xs">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none px-4 py-2.5 text-sm focus:outline-none w-full text-[#fdfcf0]" 
            />
            <button className="bg-[#fdfcf0] text-[#0a1d37] px-4 py-2.5 text-[9px] uppercase font-bold tracking-widest hover:bg-gold transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-[#fdfcf0]/40">
        <span>© 2026 Thelma David Memorial School. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link to="#" className="hover:text-[#fdfcf0] transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-[#fdfcf0] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
