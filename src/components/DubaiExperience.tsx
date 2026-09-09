import { SALON_AMENITIES } from '../data/salonData';
import { Droplets, Lock, Car, Coffee, Sparkles, Globe, Shield, HeartHandshake } from 'lucide-react';

export function DubaiExperience() {
  const iconMap: Record<string, any> = {
    Droplets,
    Lock,
    Car,
    Coffee,
    Sparkles,
    Globe
  };

  return (
    <section id="experience" className="py-20 bg-[#FAF8F5] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E7F38] font-bold block">
              The Éclat Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17] leading-tight">
              Curated Exclusively for Dubai’s Discerning Lifestyle & Climate
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-sm text-[#6A6051] leading-relaxed">
              We engineered our salon infrastructure to solve the unique challenges of desert humidity, 
              chlorinated water, and intense sun exposure while elevating your comfort.
            </p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON_AMENITIES.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E1D3] p-7 flex flex-col justify-between hover:border-[#B7953E] hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] border border-[#E5DAC1] flex items-center justify-center text-[#9E7F38]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1C1A17]">
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#615749] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Suite Spotlight Banner */}
        <div className="mt-14 rounded-3xl overflow-hidden bg-[#1D1A16] text-white p-8 sm:p-12 relative border border-[#3A3328]">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#B7953E]/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#2D2821] border border-[#483F31] px-3.5 py-1 rounded-full text-xs text-[#DECA95] uppercase tracking-wider font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Dedicated Privacy Suite</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-[#FAF6ED]">
                Looking for 100% Private Ladies Styling in Downtown Dubai?
              </h3>
              <p className="text-xs sm:text-base text-[#B3A897] font-light leading-relaxed max-w-2xl">
                Our secluded VIP Majlis suite features a dedicated private entrance, private wash basin, 
                independent temperature & acoustic controls, and female-only master styling staff for veiled clients 
                and high-profile guests.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#booking"
                className="w-full text-center bg-[#DECA95] hover:bg-[#EADBBE] text-[#191714] font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all"
              >
                Reserve VIP Suite
              </a>
              <a
                href="https://wa.me/971501234567?text=Hello%20Eclat%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Private%20VIP%20Ladies%20Suite."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-[#524736] hover:border-[#DECA95] text-[#D4CABB] font-medium text-xs uppercase tracking-wider py-3 px-6 rounded-full transition-all"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
