import { STYLISTS } from '../data/salonData';
import { Stylist } from '../types';
import { Globe, Award, Sparkles, Instagram, Calendar } from 'lucide-react';

interface StylistsSectionProps {
  onSelectStylist: (stylist: Stylist) => void;
}

export function StylistsSection({ onSelectStylist }: StylistsSectionProps) {
  return (
    <section id="stylists" className="py-20 bg-[#F4EFE7] border-b border-[#E3D9C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#937533] font-bold block">
            European & International Artistry
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17]">
            Meet the Master Creators
          </h2>
          <p className="text-sm sm:text-base text-[#615647]">
            Trained in Paris, London, and Beirut with over a decade of high-fashion and red-carpet experience across the GCC.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#DDD3C1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Origin Badge */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#24201B]">
                  <img
                    src={stylist.avatar}
                    alt={stylist.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Origin Badge */}
                  <div className="absolute top-3 left-3 bg-[#1C1A17]/85 backdrop-blur-md text-[#DECA95] px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border border-white/20 flex items-center space-x-1">
                    <Award className="w-3 h-3 text-[#DECA95]" />
                    <span>{stylist.origin}</span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1C1A17] px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow">
                    {stylist.experienceYears}+ Years Exp.
                  </div>
                </div>

                {/* Stylist Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-[#1C1A17]">
                      {stylist.name}
                    </h3>
                    <p className="text-xs text-[#937533] uppercase tracking-wider font-semibold mt-0.5">
                      {stylist.title}
                    </p>
                  </div>

                  <p className="text-xs text-[#615647] leading-relaxed">
                    {stylist.bio}
                  </p>

                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EDE5D6] space-y-1.5">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-[#806B3E] flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-[#B7953E]" />
                      <span>Signature Specialization:</span>
                    </div>
                    <p className="text-xs text-[#3E382E] font-medium leading-tight">
                      {stylist.specialty}
                    </p>
                  </div>

                  {/* Languages Spoken */}
                  <div className="flex items-center space-x-2 text-xs text-[#7A6E5D] pt-1">
                    <Globe className="w-3.5 h-3.5 text-[#B7953E] shrink-0" />
                    <span>Languages: <strong>{stylist.languages.join(' • ')}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectStylist(stylist)}
                  className="w-full bg-[#1C1A17] hover:bg-[#B7953E] text-white py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DECA95]" />
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
