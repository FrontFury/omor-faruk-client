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
  DollarSign,
} from 'lucide-react';

import ProfileImage from '../../assets/Home-Profile.png';

const Home = () => {
  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        {/* MAIN FROSTED GLASS OVERLAY CONTAINER */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Ambient Glow Effects Inside Card */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Profile Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/60 border border-emerald-500/30 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-emerald-950/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Vice Principal (In-Charge) & Assistant Professor
                </span>
              </div>

              {/* Name & Title */}
              <div className="space-y-1.5">
                <h1 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight">
                  <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent drop-shadow-sm">
                    Md. Omar Faruk
                  </span>
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-emerald-300/90">
                  Ph.D. (Scholar), Jagannath University
                </h2>
                <p className="text-sm md:text-base text-slate-300 font-medium">
                  MBA & BBA in Accounting & Information Systems (AIS), University of Dhaka
                </p>
              </div>

              {/* Position Card */}
              <div className="rounded-2xl border border-amber-400/20 bg-[#121c17]/60 p-5 shadow-xl backdrop-blur-md space-y-4 hover:border-amber-400/30 transition duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0 shadow-inner">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white">
                      Head, MBA Program & Assistant Professor
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 mt-0.5">
                      Department of Business Administration, Daffodil Institute of Information & Technology (DIIT)
                    </p>
                  </div>
                </div>

                <hr className="border-emerald-900/40" />

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-amber-400 shrink-0" />
                    <span>Daffodil Plaza, Mirpur Road, Dhanmondi, Dhaka-1207</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-amber-400 shrink-0" />
                    <a href="mailto:head.mba@diit.info" className="text-slate-200 hover:text-amber-300 transition underline decoration-amber-400/30">
                      head.mba@diit.info
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-amber-400 shrink-0" />
                    <span>01683689117</span>
                  </div>
                </div>
              </div>

              {/* Career Objective */}
              <div className="relative overflow-hidden rounded-r-2xl border-y border-r border-emerald-500/30 border-l-4 border-l-amber-400 bg-emerald-950/30 p-5 backdrop-blur-md">
                <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">
                  Career Objective
                </h4>
                <p className="italic text-slate-200 text-xs md:text-sm leading-relaxed">
                  “To develop a career in an academic atmosphere that will ensure the best use of my learning, knowledge, and potential where a strong sense of responsibility is appreciated and willingness to excel forward is encouraged. Devoting myself to learning and adding value to the organization I am involved in.”
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02]">
                  <BookOpen size={16} />
                  Explore Research & Books
                </button>
                
                <button className="flex items-center gap-2 bg-[#121c17]/80 hover:bg-emerald-950/80 text-slate-200 border border-emerald-500/30 font-semibold px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all duration-300 hover:text-amber-300 backdrop-blur-md">
                  <UserCheck size={16} />
                  Administrative Leadership
                </button>

                <div className="w-full sm:w-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 hover:bg-indigo-900/50 text-indigo-300 font-semibold px-4 py-2.5 rounded-xl text-xs transition-all duration-300 backdrop-blur-md"
                  >
                    <ExternalLink size={15} className="text-indigo-400" />
                    IGI Global Reviewer Profile
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Profile Image Frame & Citations */}
            <div className="lg:col-span-5 space-y-4 w-full">
              
              {/* Profile Image Frame Container */}
              <div className="relative rounded-2xl border border-amber-400/30 bg-[#121c17]/60 p-3.5 shadow-xl backdrop-blur-md w-full">
                <div className="w-full aspect-[4/4.5] bg-slate-900/80 rounded-xl overflow-hidden border border-emerald-900/40 shadow-inner">
                  <img 
                    src={ProfileImage} 
                    alt="Md. Omar Faruk" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
                  />
                </div>
              </div>

              {/* Citations & Impact Metrics */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="rounded-xl border border-emerald-500/20 bg-[#121c17]/60 p-4 text-center backdrop-blur-md shadow-lg">
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                    Total Citations
                  </span>
                  <span className="text-2xl font-bold text-white my-1 block">23</span>
                  <span className="text-[11px] text-slate-400">Google Scholar</span>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-[#121c17]/60 p-4 text-center backdrop-blur-md shadow-lg">
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                    h10-Index
                  </span>
                  <span className="text-2xl font-bold text-white my-1 block">01</span>
                  <span className="text-[11px] text-slate-400">Academic Impact</span>
                </div>
              </div>

              {/* Editorial Board Reviewer Banner */}
              <div className="rounded-xl border border-emerald-500/20 bg-[#121c17]/60 p-4 flex items-center gap-3.5 backdrop-blur-md shadow-lg w-full">
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
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
          <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <BookMarked className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
              <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Authored
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-white">11</div>
              <p className="text-sm font-semibold text-emerald-300 mt-0.5">Published Books</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                University textbooks & comprehensive Business Dictionary
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <GraduationCap className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
              <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Pedagogy
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-white">15+</div>
              <p className="text-sm font-semibold text-emerald-300 mt-0.5">Years Academic Leadership</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Teaching, program coordination, and curriculum governance
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <FlaskConical className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
              <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Research
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-white">13+</div>
              <p className="text-sm font-semibold text-emerald-300 mt-0.5">Peer-Reviewed Papers</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Published & forthcoming articles in JIBM, IGI Global, Bentham
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <DollarSign className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                Approved
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-serif font-extrabold text-amber-400">UGC</div>
              <p className="text-sm font-semibold text-emerald-300 mt-0.5">Funded Research Grant</p>
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