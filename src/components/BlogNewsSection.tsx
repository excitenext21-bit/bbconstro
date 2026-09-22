import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface BlogNewsSectionProps {
  onOpenBooking: () => void;
}

export const BlogNewsSection: React.FC<BlogNewsSectionProps> = ({ onOpenBooking }) => {
  const articles = [
    {
      id: '01',
      category: 'Commercial HVAC',
      date: 'March 14, 2026',
      author: 'Mr. Pravin Bakshi',
      title: 'Energy Trends That Will Shape The Future Of Sustainable Architecture In Pune',
      excerpt: 'Appropriately optimize commercial HVAC networks rather than magnetic experiences. Intrinsicly actualize resource-leveling methodologies for high-rise corporate towers.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80',
      isReversed: false
    },
    {
      id: '02',
      category: 'Industrial Engineering',
      date: 'March 08, 2026',
      author: 'Technical Team',
      title: 'Why Braze-Free Lokring Piping Eliminates Hot-Work Hazards In Active Facilities',
      excerpt: 'Appropriately optimize industrial refrigerant piping networks rather than hazardous open flames. Certified mechanical joints deliver zero fire-risk in high-tech cleanrooms.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      isReversed: true
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#00153f] overflow-hidden text-slate-100 border-t border-slate-800/80">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text">
        BLOG
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Header Row matching Realar Blog & News */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Latest Blog & News
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              We are an engineering firm with over 17 years of expertise, and our main goal is to provide amazing climate solutions to our partners and clients.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-sm tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95 shrink-0 cursor-pointer"
          >
            <span className="font-[300]">Browse All Blog</span>
            <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
          </button>
        </div>

        {/* 2 Alternating Rows matching Realar exact layout:
            Row 1: Image Left, Content Right
            Row 2: Content Left, Image Right
        */}
        <div className="space-y-12 sm:space-y-16">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#041a4a] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl hover:border-slate-700 transition-all"
            >
              {/* Image Container */}
              <div
                className={`lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-800 ${
                  item.isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div
                className={`lg:col-span-6 flex flex-col justify-between ${
                  item.isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  {/* Category Pill & Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-[#f7985f] bg-[#f7985f]/15 border border-[#c05e32]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>By {item.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit'] mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#f7985f] hover:text-[#f9ab7c] transition group"
                  >
                    <span>Read More</span>
                    <LongTailArrowRight className="w-6 h-3 stroke-[1] group-hover:translate-x-1.5 transition-transform" strokeWidth={1} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
