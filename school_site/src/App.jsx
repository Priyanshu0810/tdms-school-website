import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Portal from "./pages/Portal";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Academics from "./pages/Academics";
import AcademicCurriculum from "./pages/AcademicCurriculum";
import CoCurricular from "./pages/CoCurricular";
import SchoolHouses from "./pages/SchoolHouses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import FeeStructure from "./pages/FeeStructure";
import AdmissionProcess from "./pages/AdmissionProcess";
import { AuthProvider } from "./context/AuthContext";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);
  return null;
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Try instantly first
      if (!scrollToElement()) {
        // If not found (e.g. page transit delay), wait and retry
        const timer = setTimeout(() => {
          scrollToElement();
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const onNavigate = (id) => {
    if (id.includes("#")) {
      const [base, hash] = id.split("#");
      const path = base === "home" ? `/#${hash}` : `/${base}#${hash}`;
      navigate(path);
    } else {
      const path = id === "home" ? "/" : `/${id}`;
      // If already on same page, just scroll to top — no re-render flash
      if (location.pathname === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
       <Navbar 
          onNavigate={onNavigate} 
          currentPage={location.pathname.split("/")[1] || "home"} 
       />
       <ScrollToTop />
       <ScrollToHash />
       <main className="flex-1">
         <AnimatePresence mode="wait">
           <Routes location={location} key={location.pathname}>
             <Route path="/" element={<Home onNavigate={onNavigate} />} />
             <Route path="/home" element={<Home onNavigate={onNavigate} />} />
             <Route path="/admissions" element={<Admissions />} />
             <Route path="/portal" element={<Portal />} />
             <Route path="/login" element={<Login />} />
             <Route path="/admin" element={<AdminDashboard />} />
             <Route path="/faculty" element={<Faculty />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/academics" element={<Academics />} />
             <Route path="/academic-curriculum" element={<AcademicCurriculum />} />
             <Route path="/co-curricular" element={<CoCurricular />} />
             <Route path="/school-houses" element={<SchoolHouses />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/calendar" element={<Calendar />} />
              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/admission-process" element={<AdmissionProcess />} />
           </Routes>
         </AnimatePresence>
       </main>
       <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
