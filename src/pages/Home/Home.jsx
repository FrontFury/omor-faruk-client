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
    <div className="w-full min-h-screen bg-[#f5f6f8] text-gray-800 p-4 sm:p-6 md:p-8 lg:p-12 font-sans">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        {/* TOP SECTION: Main Profile & CV Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Main Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200/80 text-gray-700 text-xs md:text-sm font-semibold rounded-md uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                Vice Principal (In-Charge) & Assistant Professor
              </span>
            </div>

            {/* Name and Degrees */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 tracking-tight">
                Md. Omar Faruk
              </h1>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                Ph.D. (Scholar), Jagannath University
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                MBA & BBA in Accounting & Information Systems (AIS), University of Dhaka
              </p>
            </div>

            {/* Position Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 bg-gray-100 rounded-lg text-gray-700">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    Head, MBA Program & Assistant Professor
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Department of Business Administration, Daffodil Institute of Information & Technology (DIIT)
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400 shrink-0" />
                  <span>Daffodil Plaza, Mirpur Road, Dhanmondi, Dhaka-1207</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-400 shrink-0" />
                  <a href="mailto:head.mba@diit.info" className="hover:underline text-gray-700">
                    head.mba@diit.info
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-400 shrink-0" />
                  <span>01683689117</span>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="bg-[#eaf3ed] border-l-4 border-[#0b4d2c] p-4 rounded-r-lg">
              <h4 className="text-sm font-bold text-[#0b4d2c] uppercase tracking-wide mb-1">
                Career Objective
              </h4>
              <p className="italic text-gray-700 text-sm md:text-base leading-relaxed">
                “To develop a career in an academic atmosphere that will ensure the best use of my learning, knowledge, and potential where a strong sense of responsibility is appreciated and willingness to excel forward is encouraged. Devoting myself to learning and adding value to the organization I am involved in.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button className="flex items-center gap-2 bg-[#0b4d2c] hover:bg-[#083820] text-white font-medium px-5 py-2.5 rounded-md text-sm transition shadow-sm">
                <BookOpen size={18} />
                Explore Research & Books
              </button>
              
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium px-5 py-2.5 rounded-md text-sm transition shadow-sm">
                <UserCheck size={18} />
                Administrative Leadership
              </button>

              <div className="w-full sm:w-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium px-4 py-2.5 rounded-md text-xs md:text-sm transition"
                >
                  <ExternalLink size={16} />
                  IGI Global Reviewer Profile
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Image Preview & Metrics */}
          <div className="lg:col-span-5 space-y-4 w-full">
            
            {/* Profile Image Frame Container */}
            <div className="bg-white border-t-8 border-[#0b4d2c] rounded-b-xl shadow-sm overflow-hidden border border-gray-200 p-4 md:p-6 w-full">
              {/* Full Width & Height Image Box */}
              <div className="w-full h-80 sm:h-96 md:h-[450px] lg:h-[480px] bg-gray-50 rounded-sm relative overflow-hidden shadow-inner">
                <img 
                  src={ProfileImage} 
                  alt="Academic Profile" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </div>

            {/* Citations & Impact Metrics */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#f0f2f5] p-3 rounded-lg text-center border border-gray-200">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  Total Citations
                </span>
                <span className="text-2xl font-bold text-gray-800 my-0.5 block">23</span>
                <span className="text-xs text-gray-500">Google Scholar</span>
              </div>

              <div className="bg-[#f0f2f5] p-3 rounded-lg text-center border border-gray-200">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                  h10-Index
                </span>
                <span className="text-2xl font-bold text-gray-800 my-0.5 block">01</span>
                <span className="text-xs text-gray-500">Academic Impact</span>
              </div>
            </div>

            {/* Editorial Board Reviewer Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 shadow-sm w-full">
              <div className="p-2 bg-emerald-50 rounded text-emerald-800 shrink-0">
                <BookOpen size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide block">
                  Editorial Board Reviewer
                </span>
                <p className="text-xs font-semibold text-gray-800">
                  IGI Global Scientific Publishing, New York, USA
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Key Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 w-full">
          
          {/* Card 1: Authored Books */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <BookMarked className="text-gray-700" size={20} />
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                Authored
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-gray-900">11</div>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">Published Books</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                University textbooks & comprehensive Business Dictionary
              </p>
            </div>
          </div>

          {/* Card 2: Academic Leadership */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <GraduationCap className="text-gray-700" size={20} />
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                Pedagogy
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">Years Academic Leadership</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Teaching, program coordination, and curriculum governance
              </p>
            </div>
          </div>

          {/* Card 3: Peer-Reviewed Papers */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <FlaskConical className="text-gray-700" size={20} />
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                Research
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-gray-900">13+</div>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">Peer-Reviewed Papers</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Published & forthcoming articles in JIBM, IGI Global, Bentham
              </p>
            </div>
          </div>

          {/* Card 4: Funded Research Grant */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <DollarSign className="text-gray-700" size={20} />
              <span className="bg-[#0b4d2c] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                Approved
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-serif font-bold text-[#0b4d2c]">UGC</div>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">Funded Research Grant</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
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