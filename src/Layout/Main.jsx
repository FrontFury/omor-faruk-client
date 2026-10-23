import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Briefcase, 
  Library,
} from "lucide-react";
import Navbar from "../pages/Shared/Navbar";
import ScrollToTop from "../pages/ScrollToTop/ScrollToTop";
import { profile } from "../data/profileData";

// =====================================================
// FLOATING ACADEMIC & RESEARCH ICONS CONFIGURATION
// =====================================================
const floatingAcademicIcons = [
  // Left Side Floating Stack
  { Icon: GraduationCap, top: "15%", left: "3%", size: 32, color: "#2563EB", delay: 0 },   // Blue Accent
  { Icon: BookOpen, top: "45%", left: "2%", size: 34, color: "#0D9488", delay: 1 },        // Teal Accent
  { Icon: TrendingUp, top: "75%", left: "3%", size: 32, color: "#059669", delay: 2 },      // Emerald Accent

  // Right Side Floating Stack
  { Icon: Award, top: "18%", right: "3%", size: 32, color: "#D97706", delay: 1.5 },       // Amber Gold
  { Icon: Briefcase, top: "50%", right: "2%", size: 32, color: "#4F46E5", delay: 0.8 },     // Indigo Accent
  { Icon: Library, top: "80%", right: "4%", size: 34, color: "#0284C7", delay: 1.8 },       // Sky Blue
];

const Main = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#f7f5ef] font-['Playfair_Display',serif] text-slate-800 selection:bg-emerald-900 selection:text-white">
      
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_12%_8%,rgba(217,170,91,0.12),transparent_32%),radial-gradient(ellipse_at_90%_38%,rgba(28,102,77,0.09),transparent_34%)]" />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingAcademicIcons.map((item, idx) => {
          const AcademicIcon = item.Icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0.12 }}
              animate={{
                y: [-12, 12, -12],
                scale: [1, 1.06, 1],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{
                duration: 6 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              className="hidden items-center justify-center rounded-2xl border border-emerald-900/10 bg-white/70 p-3.5 shadow-lg backdrop-blur-md lg:flex"
            >
              <AcademicIcon
                size={item.size}
                color={item.color}
                style={{ filter: `drop-shadow(0 2px 8px ${item.color}33)` }}
              />
            </motion.div>
          );
        })}
      </div>

      <Navbar />
      <ScrollToTop />

      <main className="relative z-10 mx-auto w-11/12 flex-grow pt-24 pb-12 sm:pt-28">
        <Outlet />
      </main>



    </div>
  );
};

export default Main;