import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  BookOpen, 
  UserCheck, 
  ExternalLink,
  BookMarked,
  GraduationCap,
  FlaskConical,
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';

import ProfileImage from '../../assets/Home-Profile.jpeg';

const Home = () => {
  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        {/* MAIN HERO FROSTED GLASS CONTAINER */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0d1410]/80 p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl">
          
          {/* Enhanced Ambient Glow Effects */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: Profile Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/70 border border-emerald-500/40 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-emerald-950/50 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  Vice Principal (In-Charge) & Assistant Professor
                </span>
              </div>

              {/* Name & Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight">
                  <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 bg-clip-text text-transparent drop-shadow-md">
                    Md. Omar Faruk
                  </span>
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-emerald-300 flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-400 shrink-0" />
                  Ph.D. (Scholar), Jagannath University
                </h2>
                <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
                  MBA & BBA in Accounting & Information Systems (AIS), University of Dhaka
                </p>
              </div>

              {/* Position Card */}
              <div className="rounded-2xl border border-amber-400/20 bg-[#121c17]/70 p-5 shadow-xl backdrop-blur-md space-y-4 hover:border-amber-400/40 transition duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-amber-400 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      Head, MBA Program & Assistant Professor
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed">
                      Department of Business Administration, Daffodil Institute of Information & Technology (DIIT)
                    </p>
                  </div>
                </div>

                <hr className="border-emerald-900/50" />

                {/* Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs md:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-amber-400 shrink-0" />
                    <span>Daffodil Plaza, Mirpur Road, Dhanmondi, Dhaka-1207</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-amber-400 shrink-0" />
                    <a href="mailto:head.mba@diit.info" className="text-slate-200 hover:text-amber-300 transition underline decoration-amber-400/30 underline-offset-4">
                      head.mba@diit.info
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-amber-400 shrink-0" />
                    <a href="tel:01683689117" className="hover:text-amber-300 transition">01683689117</a>
                  </div>
                </div>
              </div>

              {/* Career Objective Banner */}
              <div className="relative overflow-hidden rounded-r-2xl border-y border-r border-emerald-500/30 border-l-4 border-l-amber-400 bg-emerald-950/20 p-5 backdrop-blur-md">
                <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  Career Objective
                </h4>
                <p className="italic text-slate-200 text-xs md:text-sm leading-relaxed">
                  “To develop a career in an academic atmosphere that will ensure the best use of my learning, knowledge, and potential where a strong sense of responsibility is appreciated and willingness to excel forward is encouraged. Devoting myself to learning and adding value to the organization I am involved in.”
                </p>
              </div>

              {/* Action Callouts */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]">
                  <BookOpen size={16} />
                  Explore Research & Books
                </button>
                
                <button className="flex items-center gap-2 bg-[#121c17]/90 hover:bg-emerald-950/90 text-slate-200 border border-emerald-500/30 hover:border-emerald-500/60 font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all duration-300 hover:text-amber-300 backdrop-blur-md">
                  <UserCheck size={16} />
                  Administrative Leadership
                </button>

                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 font-semibold px-4 py-2.5 rounded-xl text-xs transition-all duration-300 backdrop-blur-md shadow-md"
                >
                  <ExternalLink size={15} className="text-indigo-400" />
                  IGI Global Reviewer Profile
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Profile Frame & Citations */}
            <div className="lg:col-span-5 space-y-4 w-full">
              
              {/* Profile Image Frame */}
              <div className="relative rounded-3xl border border-amber-400/30 bg-[#121c17]/60 p-3 shadow-2xl backdrop-blur-md group overflow-hidden">
                <div className="w-full aspect-[4/4.5] bg-slate-900/90 rounded-2xl overflow-hidden border border-emerald-900/50 relative">
                  <img 
                    src={ProfileImage} 
                    alt="Md. Omar Faruk" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1410] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="rounded-2xl border border-emerald-500/30 bg-[#121c17]/70 p-4 text-center backdrop-blur-md shadow-lg hover:border-amber-400/40 transition-all">
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                    Total Citations
                  </span>
                  <span className="text-3xl font-extrabold text-white my-1 block font-serif">23</span>
                  <span className="text-[11px] text-slate-400 font-medium">Google Scholar</span>
                </div>

                <div className="rounded-2xl border border-emerald-500/30 bg-[#121c17]/70 p-4 text-center backdrop-blur-md shadow-lg hover:border-amber-400/40 transition-all">
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                    h10-Index
                  </span>
                  <span className="text-3xl font-extrabold text-white my-1 block font-serif">01</span>
                  <span className="text-[11px] text-slate-400 font-medium">Academic Impact</span>
                </div>
              </div>

              {/* Editorial Board Reviewer Card */}
              <div className="rounded-2xl border border-emerald-500/30 bg-[#121c17]/70 p-4 flex items-center gap-3.5 backdrop-blur-md shadow-lg w-full hover:border-amber-400/40 transition-all">
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-amber-400 shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wide block">
                    Editorial Board Reviewer
                  </span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">
                    IGI Global Scientific Publishing, New York, USA
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Key Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-emerald-500/25 bg-[#0d1410]/80 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <BookMarked className="text-amber-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Authored
              </span>
            </div>
            <div className="mt-5">
              <div className="text-3xl font-extrabold text-white font-serif">11</div>
              <p className="text-sm font-semibold text-emerald-300 mt-1">Published Books</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                University textbooks & comprehensive Business Dictionary
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-emerald-500/25 bg-[#0d1410]/80 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <GraduationCap className="text-amber-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Pedagogy
              </span>
            </div>
            <div className="mt-5">
              <div className="text-3xl font-extrabold text-white font-serif">15+</div>
              <p className="text-sm font-semibold text-emerald-300 mt-1">Years Leadership</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Teaching, program coordination, and curriculum governance
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-emerald-500/25 bg-[#0d1410]/80 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <FlaskConical className="text-amber-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="bg-emerald-950/80 border border-emerald-500/40 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Research
              </span>
            </div>
            <div className="mt-5">
              <div className="text-3xl font-extrabold text-white font-serif">13+</div>
              <p className="text-sm font-semibold text-emerald-300 mt-1">Peer-Reviewed Papers</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Published & forthcoming articles in JIBM, IGI Global, Bentham
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-emerald-500/25 bg-[#0d1410]/80 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <Award className="text-amber-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Approved
              </span>
            </div>
            <div className="mt-5">
              <div className="text-3xl font-serif font-extrabold text-amber-400">UGC</div>
              <p className="text-sm font-semibold text-emerald-300 mt-1">Funded Research Grant</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Voluntary disclosure & board attributes project (Phase 2)
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;