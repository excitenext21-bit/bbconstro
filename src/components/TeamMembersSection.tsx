import React, { useState } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface TeamMembersSectionProps {
  onContactTeam?: () => void;
}

export const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ onContactTeam }) => {
  const members = [
    {
      name: 'Michel Smith',
      role: 'Senior HVAC Project Lead',
      experience: '14+ Years (Ex-Voltas)',
      phone: '+91 772000 7392',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Sara Prova',
      role: 'MEP Thermal Design Lead',
      experience: 'B.E. Mechanical (ISHRAE)',
      phone: '+91 772000 7392',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Janny Mari',
      role: '24/7 Breakdown Dispatch Head',
      experience: '10+ Years Field Logistics',
      phone: '+91 772000 7392',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="leadership" className="relative py-20 lg:py-28 bg-[#00153f] overflow-hidden text-slate-100 border-t border-slate-800/80">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text">
        TEAM
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Header Row matching Realar Our Team Member */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
              style={{ fontSize: '38px' }}
            >
              Our Team Specialists
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              We are an engineering firm with over 17 years of expertise, and our main goal is to provide amazing climate reliability to our partners and clients.
            </p>
          </div>

          <button
            onClick={onContactTeam}
            className="self-start md:self-auto px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-sm tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95 shrink-0 cursor-pointer"
          >
            <span className="font-[300]">View All Members</span>
            <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
          </button>
        </div>

        {/* 3 Tall Rounded Portrait Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#041a4a] border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col"
            >
              {/* Portrait Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041a4a] via-transparent to-transparent" />

                {/* Round Phone Button at bottom-right of photo matching reference */}
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#f7985f] hover:bg-[#c05e32] text-slate-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  aria-label={`Call ${member.name}`}
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>

              {/* Member Details */}
              <div className="p-6 pt-2">
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-[#f7985f] transition">
                  {member.name}
                </h3>
                <p className="text-xs text-[#f7985f] font-semibold uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows < and > matching reference */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : 2))}
            className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-[#f7985f] flex items-center justify-center transition"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev < 2 ? prev + 1 : 0))}
            className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-[#f7985f] flex items-center justify-center transition"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
