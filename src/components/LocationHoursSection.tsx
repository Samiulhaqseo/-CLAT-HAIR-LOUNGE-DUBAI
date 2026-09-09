import { MapPin, Clock, Phone, Mail, Navigation, Car, ExternalLink, MessageCircle } from 'lucide-react';

export function LocationHoursSection() {
  return (
    <section id="location" className="py-20 bg-[#FAF8F5] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7F38] font-bold block">
            Visit Us in Downtown Dubai
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17]">
            Location & Salon Hours
          </h2>
          <p className="text-sm text-[#6B6051]">
            Conveniently situated along the prestigious Mohammed Bin Rashid Boulevard, with dedicated valet drop-off.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address & Valet Card */}
            <div className="bg-white border border-[#E8E1D3] rounded-3xl p-7 space-y-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] border border-[#E5DAC1] flex items-center justify-center text-[#9E7F38] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7F38] block">
                    Prime Location
                  </span>
                  <h3 className="text-lg font-serif font-medium text-[#1C1A17] mt-0.5">
                    Boulevard Point, Downtown Dubai
                  </h3>
                  <p className="text-xs sm:text-sm text-[#615749] mt-1 leading-relaxed">
                    Level 2, Retail Suite 204, Mohammed Bin Rashid Boulevard, Downtown Dubai, UAE
                  </p>
                  <p className="text-xs text-[#8C7A5E] mt-1">
                    (Directly opposite Dubai Mall Fashion Avenue & The Address Downtown)
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5D6] flex items-center space-x-3 text-xs text-[#52493D]">
                <Car className="w-5 h-5 text-[#9E7F38] shrink-0" />
                <span>
                  <strong>Valet Parking:</strong> Pull into Boulevard Point Entrance P1. Hand your car to the valet with the mention "Éclat Hair Lounge" for validated complimentary parking.
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Boulevard+Point+Downtown+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#1C1A17] hover:bg-[#9E7F38] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href="tel:+97143982200"
                  className="inline-flex items-center space-x-2 border border-[#D5C9B3] hover:bg-[#F2ECE1] text-[#3A332A] px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7F38]" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white border border-[#E8E1D3] rounded-3xl p-7 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#E5DAC1] flex items-center justify-center text-[#9E7F38]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-medium text-[#1C1A17]">Salon Operating Hours</h4>
                  <span className="text-[11px] text-[#7A6E5D]">Open 7 Days a Week</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#5A5043]">
                <div className="flex justify-between py-2 border-b border-[#F0EBE1]">
                  <span className="font-medium text-[#1C1A17]">Monday – Thursday</span>
                  <span className="font-semibold text-[#8C6D2B]">10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#F0EBE1]">
                  <span className="font-medium text-[#1C1A17]">Friday</span>
                  <span className="font-semibold text-[#8C6D2B]">10:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#F0EBE1]">
                  <span className="font-medium text-[#1C1A17]">Saturday – Sunday</span>
                  <span className="font-semibold text-[#8C6D2B]">10:00 AM – 9:00 PM</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-[#8C7A5E] italic">
                * VIP Bridal Suites & Private Salon Bookings can be scheduled outside standard operational hours upon advance request.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Map / Lounge Ambience Card */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E0D7C4] relative flex flex-col min-h-[420px] bg-[#221E19] text-white">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
              alt="Downtown Dubai Landmark View"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/50 to-transparent" />

            {/* Overlay Interactive Location Box */}
            <div className="relative z-10 p-8 sm:p-10 mt-auto space-y-5">
              <div className="inline-flex items-center space-x-2 bg-[#1C1915]/90 border border-[#483F31] px-3.5 py-1.5 rounded-full text-xs text-[#DECA95]">
                <MapPin className="w-3.5 h-3.5 text-[#DECA95]" />
                <span>Burj Khalifa District • Downtown Dubai</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Step into Tranquil Parisian Elegance
                </h3>
                <p className="text-xs sm:text-sm text-[#C4B8A5] leading-relaxed">
                  Enjoy views of the iconic downtown skyline while relaxing with our signature scalp spa and blowouts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                <div>
                  <span className="text-[#998D7B] block text-[10px] uppercase tracking-wider">Direct Concierge</span>
                  <a href="tel:+97143982200" className="text-white hover:text-[#DECA95] font-medium transition-colors">
                    +971 4 398 2200
                  </a>
                </div>
                <div>
                  <span className="text-[#998D7B] block text-[10px] uppercase tracking-wider">WhatsApp Line</span>
                  <a href="https://wa.me/971501234567" className="text-[#25D366] hover:underline font-medium">
                    +971 50 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
