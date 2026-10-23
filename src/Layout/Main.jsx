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
  { Icon: GraduationCap, top: "15%", left: "3%", size: 32, color: "#f59e0b", delay: 0 },   // Amber Gold
  { Icon: BookOpen, top: "45%", left: "2%", size: 34, color: "#10b981", delay: 1 },        // Emerald Green
  { Icon: TrendingUp, top: "75%", left: "3%", size: 32, color: "#eab308", delay: 2 },      // Yellow Gold

  // Right Side Floating Stack
  { Icon: Award, top: "18%", right: "3%", size: 32, color: "#d97706", delay: 1.5 },       // Dark Amber
  { Icon: Briefcase, top: "50%", right: "2%", size: 32, color: "#059669", delay: 0.8 },     // Deep Emerald
  { Icon: Library, top: "80%", right: "4%", size: 34, color: "#fbbf24", delay: 1.8 },       // Warm Gold
];

const Main = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#080c0a] font-['Playfair_Display',serif] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dark Obsidian & Emerald Radial Glow Backdrops */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_12%_8%,rgba(217,119,6,0.15),transparent_35%),radial-gradient(ellipse_at_90%_38%,rgba(5,150,105,0.12),transparent_38%)]" />

      {/* Floating Academic Icons Wrapper */}
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
                opacity: [0.15, 0.35, 0.15],
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
              className="hidden items-center justify-center rounded-2xl border border-emerald-500/20 bg-[#0d1410]/80 p-3.5 shadow-2xl backdrop-blur-md lg:flex"
            >
              <AcademicIcon
                size={item.size}
                color={item.color}
                style={{ filter: `drop-shadow(0 2px 10px ${item.color}55)` }}
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