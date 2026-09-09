import { useState } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { HairService } from '../types';
import { Clock, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: HairService) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cut' | 'color' | 'ritual' | 'extensions' | 'bridal'>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'cut', label: 'Cuts & Blowouts' },
    { id: 'color', label: 'Balayage & Color' },
    { id: 'ritual', label: 'Anti-Humidity & Spa' },
    { id: 'extensions', label: 'Slavic Extensions' },
    { id: 'bridal', label: 'VIP & Bridal' }
  ] as const;

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A2833E] font-medium block">
            Bespoke Menu & Transparent AED Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17]">
            Curated Services for Discerning Hair
          </h2>
          <p className="text-sm sm:text-base text-[#6E6455] leading-relaxed">
            Every session begins with a comprehensive diagnostic of your hair texture, scalp health, 
            and lifestyle in the UAE climate. Pricing is all-inclusive with zero hidden surcharges.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1C1A17] text-[#DECA95] shadow-sm'
                  : 'bg-[#EFE9DD] text-[#554D41] hover:bg-[#E5DDCF] hover:text-[#1C1A17]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-[#E8E1D3] p-6 flex flex-col justify-between hover:border-[#CBAE66] hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {service.tag ? (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest bg-[#F7F2E7] text-[#8C6D2B] border border-[#E5D7B7]">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{service.tag}</span>
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <div className="flex items-center text-xs text-[#7A6E5D] space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#B7953E]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Service Name & Arabic text */}
                <h3 className="text-xl font-serif font-medium text-[#1C1A17] group-hover:text-[#8C6D2B] transition-colors leading-snug">
                  {service.name}
                </h3>
                {service.arabicName && (
                  <p className="text-xs text-[#9B8F7D] font-serif mt-1 dir-rtl">
                    {service.arabicName}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C5447] mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Inclusions checklist */}
                <div className="mt-4 pt-4 border-t border-[#F0EBE1] space-y-2">
                  <span className="text-[11px] font-semibold text-[#8C7A5E] uppercase tracking-wider block">
                    Treatment Inclusions:
                  </span>
                  {service.includes.map((inc, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#4F473B]">
                      <Check className="w-3.5 h-3.5 text-[#B7953E] shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Booking Action */}
              <div className="mt-6 pt-5 border-t border-[#F0EBE1] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A7E6C] block">Fixed Rate</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-serif font-bold text-[#1C1A17]">
                      AED {service.priceAED.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  id={`select-service-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center space-x-1.5 bg-[#1C1A17] hover:bg-[#B7953E] text-white px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Book This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Hair Diagnostic Assistance Banner */}
        <div className="mt-14 bg-[#F2ECE1] border border-[#DDD3C1] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-serif font-medium text-[#1C1A17]">
              Unsure which treatment fits your hair density & goals?
            </h4>
            <p className="text-xs sm:text-sm text-[#675C4C]">
              Send a photo of your current hair on WhatsApp for a complimentary 5-minute chromatic diagnostic with our Parisian color directors.
            </p>
          </div>

          <a
            href="https://wa.me/971501234567?text=Hello%20Eclat%20Dubai%2C%20I%20would%20like%20a%20complimentary%20hair%20photo%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
