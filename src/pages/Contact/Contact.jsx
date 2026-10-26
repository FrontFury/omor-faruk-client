import React, { useState } from 'react'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Building2 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { profile } from "../../data/profileData"

const summaryMetrics = [
  { value: "Office", label: "Demra, Dhaka-1361, Bangladesh", icon: MapPin },
  { value: "Email", label: profile.email || "mamun.mba@diit.info", icon: Mail },
  { value: "Hotline", label: "+8801858107075 / +8801758141322", icon: Phone },
  { value: "09:30 - 04:30", label: "Sunday to Thursday Advising Hours", icon: Clock }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form submission logic if needed
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Advising & Collaboration"
          title="Contact & Advising Hours"
          description="Direct communication portal for current MBA students, prospective scholars, and empirical research collaborators."
        >
          <div className="space-y-8">

            {/* TOP HIGHLIGHT STAT CARDS - MATCHES OTHER PAGES 4-CARD GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {summaryMetrics.map(({ value, label, icon: Icon }) => (
                <div 
                  key={label}
                  className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Advising
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xl font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors truncate">
                      {value}
                    </div>
                    <p className="text-xs font-semibold text-emerald-300 mt-1 line-clamp-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MAIN LAYOUT: LEFT CONTACT DETAILS & RIGHT MESSAGE FORM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: CONTACT CARDS & OFFICE HOURS (5 COLUMNS) */}
              <div className="lg:col-span-5 space-y-5">
                
                {/* 1. Mailing & Residence Address */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex items-start gap-4 group">
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0 mt-0.5">
                    <MapPin size={22} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      Mailing & Residence Address
                    </h3>
                    <p className="text-xs font-bold text-amber-400">Dhaka Division</p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      18/67 Adarsha Road, Bahir Tengra, Sarulla, Demra, Dhaka-1361, Bangladesh
                    </p>
                  </div>
                </div>

                {/* 2. Institutional Inquiries */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex items-start gap-4 group">
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0 mt-0.5">
                    <Mail size={22} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      Institutional Inquiries
                    </h3>
                    <p className="text-xs font-bold text-emerald-300">Official MBA Advising Email</p>
                    <a 
                      href={`mailto:${profile.email || "mamun.mba@diit.info"}`}
                      className="text-xs font-mono font-bold text-amber-300 hover:underline mt-1 block break-all"
                    >
                      {profile.email || "mamun.mba@diit.info"}
                    </a>
                  </div>
                </div>

                {/* 3. Direct Contact Numbers */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex items-start gap-4 group">
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0 mt-0.5">
                    <Phone size={22} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      Direct Contact Numbers
                    </h3>
                    <p className="text-xs font-bold text-emerald-300">Advising Hotline</p>
                    <div className="space-y-0.5 pt-1 text-xs font-mono font-bold text-amber-300">
                      <p>+8801858107075</p>
                      <p>+8801758141322</p>
                    </div>
                  </div>
                </div>

                {/* 4. MBA Advising Office Hours Card */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-r from-[#07100b] via-[#0c1811] to-[#07100b] p-6 shadow-2xl backdrop-blur-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles size={13} />
                      MBA Advising Office Hours
                    </span>
                    <Clock size={18} className="text-amber-400" />
                  </div>

                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-extrabold text-amber-300">
                      Sunday to Thursday: 09:30 AM – 04:30 PM
                    </p>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
                      <Building2 size={13} className="text-emerald-400 shrink-0" />
                      MBA Faculty Room, Department of Business Administration, DIIT
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: INTERACTIVE MESSAGE FORM (7 COLUMNS) */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                  
                  {/* Form Header */}
                  <div className="border-b border-emerald-900/40 pb-4 space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <MessageSquare size={14} />
                      Direct Message
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      Send a Message
                    </h3>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-emerald-950/80 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-2">
                      <CheckCircle2 size={36} className="text-amber-400 mx-auto" />
                      <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                      <p className="text-xs text-slate-300">
                        Thank you for reaching out. Your inquiry will be answered shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Your Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Your Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required
                          placeholder="Tanvir Ahmed" 
                          className="w-full bg-[#121c17]/80 border border-emerald-500/20 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition"
                        />
                      </div>

                      {/* Your Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Your Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required
                          placeholder="tanvir.ahmed@gmail.com" 
                          className="w-full bg-[#121c17]/80 border border-emerald-500/20 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Subject</label>
                        <input 
                          type="text" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          required
                          placeholder="Research Collaboration / Query" 
                          className="w-full bg-[#121c17]/80 border border-emerald-500/20 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Message</label>
                        <textarea 
                          name="message" 
                          rows={4} 
                          value={formData.message} 
                          onChange={handleChange} 
                          required
                          placeholder="Write your message here..." 
                          className="w-full bg-[#121c17]/80 border border-emerald-500/20 rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3.5 rounded-2xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg text-xs uppercase tracking-wider"
                      >
                        <Send size={15} />
                        <span>Send Message</span>
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </PortfolioPage>

      </div>
    </div>
  )
}

export default Contact