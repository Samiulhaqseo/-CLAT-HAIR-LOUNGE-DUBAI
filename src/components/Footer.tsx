import { Sparkles, Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#12100E] text-[#BDB2A0] border-t border-[#26211B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.2em] font-medium text-white uppercase">
                ÉCLAT
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B7953E]"></span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#A8987E] font-sans -mt-2">
              HAIR LOUNGE • DUBAI
            </p>
            <p className="text-xs sm:text-sm text-[#8F8372] leading-relaxed max-w-sm pt-2">
              Bespoke haute coiffure, couture French balayage, and restorative hair spa rituals in Downtown Dubai. 
              Infused with Parisian mastery and hospital-grade purified reverse osmosis water.
            </p>
            <p className="text-xs font-serif text-[#CBAE66] tracking-wider">
              فن الجمال والأناقة في قلب دبي
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#DECA95] transition-colors">
                  Services & AED Pricing
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#DECA95] transition-colors">
                  Before & After Transformations
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#DECA95] transition-colors">
                  The Dubai RO Water Advantage
                </a>
              </li>
              <li>
                <a href="#stylists" className="hover:text-[#DECA95] transition-colors">
                  Master Stylists & Colorists
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#DECA95] transition-colors">
                  Online Chair Reservation
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DECA95] transition-colors">
                  Valet P1 & Driving Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Concierge & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Salon Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-[#9E917F]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#CBAE66] shrink-0 mt-0.5" />
                <span>Level 2, Boulevard Point, Mohammed Bin Rashid Blvd, Downtown Dubai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#CBAE66] shrink-0" />
                <a href="tel:+97143982200" className="hover:text-white transition-colors">
                  +971 4 398 2200
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +971 50 123 4567 (WhatsApp Line)
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#201C18] border border-[#352F25] flex items-center justify-center text-[#DECA95] hover:bg-[#DECA95] hover:text-[#141210] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#201C18] border border-[#352F25] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and Dubai license notes */}
        <div className="pt-8 border-t border-[#241F1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6455]">
          <div>
            © {new Date().getFullYear()} Éclat Hair Lounge Dubai LLC. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Dubai DET Commercial License No. 892401</span>
            <span>•</span>
            <span>VAT Registered (TRN 100482937400003)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
