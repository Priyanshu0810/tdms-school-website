import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Plus, 
  BarChart3, 
  Globe, 
  Bell 
} from "lucide-react";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
    fetch("/api/news")
      .then(res => res.json())
      .then(data => setNews(data));
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-ink/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 space-y-6">
          <div className="bg-ink p-8 rounded-[2rem] text-paper shadow-xl">
            <h2 className="text-xl font-serif mb-2">Systems <span className="italic">Console</span></h2>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gold mb-8">Role: Master Admin</p>
            
            <nav className="space-y-2">
              {[
                { icon: BarChart3, label: "Overview" },
                { icon: Users, label: "Faculty" },
                { icon: FileText, label: "Admissions" },
                { icon: Globe, label: "Website", active: true },
                { icon: Settings, label: "Configuration" }
              ].map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-[10px] uppercase font-bold tracking-widest transition-all ${item.active ? 'bg-gold text-ink' : 'hover:bg-paper hover:text-ink'}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>
            <button 
              onClick={() => { logout(); navigate("/"); }}
              className="w-full flex items-center gap-4 p-4 mt-8 rounded-xl text-[10px] uppercase font-bold tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-red-400/20"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>

          <div className="bg-paper p-8 rounded-[2rem] border border-ink/5 shadow-sm text-center">
            <div className="text-4xl font-serif text-gold mb-2">12</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-ink/40">New Applications</div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-serif">Welcome, <span className="italic">Administrator</span>.</h1>
              <p className="text-xs uppercase font-bold tracking-widest text-ink/40 mt-2">TDMS Systems Monitoring</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-paper border border-ink/10 rounded-xl relative">
                <Bell className="w-5 h-5 text-ink/40" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Scholars Enrolled", value: "1,250", change: "+4%" },
              { label: "Inquiries Received", value: "135", change: "+15%" },
              { label: "Faculty Strength", value: "68", change: "+2%" }
            ].map((stat, i) => (
              <div key={i} className="bg-paper p-8 rounded-[2rem] border border-ink/5 shadow-sm">
                <div className="text-[10px] uppercase font-bold tracking-widest text-ink/40 mb-2">{stat.label}</div>
                <div className="text-3xl font-serif mb-4">{stat.value}</div>
                <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">{stat.change} vs LY</div>
              </div>
            ))}
          </div>

          {/* Management Section */}
          <div className="bg-paper border border-ink/5 rounded-[3rem] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-ink/5 flex justify-between items-center bg-ink/[0.02]">
              <h3 className="text-xl font-serif">Latest <span className="italic">News</span> Releases</h3>
              <button className="flex items-center gap-2 px-6 py-3 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-gold transition-colors">
                <Plus className="w-4 h-4" />
                New Release
              </button>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {news.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-ink/5 rounded-2xl hover:bg-ink/10 transition-colors cursor-pointer group">
                    <div className="flex gap-6 items-center">
                      <div className="w-12 h-12 bg-paper rounded-xl flex items-center justify-center border border-ink/5">
                        <ImageIcon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif group-hover:text-gold transition-colors">{item.title}</h4>
                        <div className="flex gap-4 mt-1">
                           <span className="text-[9px] uppercase font-bold tracking-widest text-ink/40">{item.date}</span>
                           <span className="text-[9px] uppercase font-bold tracking-widest text-gold">{item.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6 md:mt-0">
                      <button className="text-[9px] uppercase font-bold tracking-widest text-ink/60 hover:text-ink">Modify</button>
                      <button className="text-[9px] uppercase font-bold tracking-widest text-red-500">Archive</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ink p-12 rounded-[3rem] text-paper group overflow-hidden">
               <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold mb-4">Integrity Check</h3>
               <h2 className="text-2xl font-serif mb-6">Database <span className="italic">Synchronized</span>.</h2>
               <p className="text-paper/40 text-sm mb-8">All academic records and administrative data are secured via institutional-grade encryption.</p>
               <div className="h-1 bg-paper/10 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="h-full bg-gold"
                 />
               </div>
            </div>
            <div className="bg-gold p-12 rounded-[3rem] text-ink flex flex-col justify-between">
               <div>
                  <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-paper mb-4">System Update</h3>
                  <h2 className="text-2xl font-serif">TDMS Portal v3.0</h2>
               </div>
               <button className="mt-8 self-start px-8 py-4 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-xl hover:bg-paper hover:text-ink transition-all">
                  Initialize Deployment
               </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
