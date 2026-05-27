import React, { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      login(data.token, data.user);
      navigate(data.user.role === "admin" ? "/admin" : "/portal");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 bg-paper"
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-ink text-paper rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-serif mb-4 lowercase">Secure <span className="italic font-light">Access</span>.</h1>
          <p className="text-ink/60 text-sm font-light uppercase tracking-widest">Thelma David Memorial School Portals</p>
        </div>

        <div className="bg-paper border border-ink/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 text-red-500 text-xs font-bold uppercase tracking-widest rounded-xl text-center">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40 ml-2">Institutional Email</label>
              <div className="relative">
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ink/5 border-none rounded-2xl px-12 py-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                  placeholder="admin@tdms.edu" 
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/20" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-ink/40 ml-2">Private Password</label>
              <div className="relative">
                <input 
                  required 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-ink/5 border-none rounded-2xl px-12 py-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                  placeholder="••••••••" 
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/20" />
              </div>
            </div>

            <button className="group w-full py-5 bg-ink text-paper text-[10px] uppercase font-bold tracking-widest rounded-2xl hover:bg-gold transition-all flex items-center justify-center gap-3">
              Authorize Entrance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-ink/5 text-center">
            <p className="text-[10px] uppercase font-bold tracking-widest text-ink/40 mb-4">Demo Credentials</p>
            <div className="flex justify-center gap-4 text-[9px] uppercase font-bold tracking-widest text-gold opacity-60">
              <span>Admin: admin@tdms.edu / admin123</span>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-center text-[10px] uppercase font-bold tracking-widest text-ink/20">
          Encrypted Authentication System v2.4.0
        </p>
      </div>
    </motion.div>
  );
}
