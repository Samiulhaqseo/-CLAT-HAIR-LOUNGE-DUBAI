import { Star, Sparkles, ShieldCheck, ArrowDown, Calendar, MessageCircle, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#161412] text-white pt-10 pb-20 lg:py-24">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B7953E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#8C7A5E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Haute Coiffure Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Dubai Luxury Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-[#25221D] border border-[#3E372E] px-3.5 py-1.5 rounded-full w-fit">
              <span className="flex items-center space-x-1 text-[#DECA95] text-xs font-medium">
                <Star className="w-3.5 h-3.5 fill-[#DECA95] text-[#DECA95]" />
                <Star className="w-3.5 h-3.5 fill-[#DECA95] text-[#DECA95]" />
                <Star className="w-3.5 h-3.5 fill-[#DECA95] text-[#DECA95]" />
                <Star className="w-3.5 h-3.5 fill-[#DECA95] text-[#DECA95]" />
                <Star className="w-3.5 h-3.5 fill-[#DECA95] text-[#DECA95]" />
                <span className="ml-1 text-white font-semibold">4.9 / 5</span>
              </span>
              <span className="text-[#8E8474] text-xs">•</span>
              <span className="text-[#C2B5A0] text-xs tracking-wider uppercase font-medium">
                500+ Verified Dubai Reviews
              </span>
            </div>

            {/* Arabic Welcome Script + Main Title */}
            <div className="space-y-3">
              <p className="text-sm font-serif tracking-[0.25em] text-[#CBAE66] uppercase">
                صالون إكلا للشعر • Downtown Dubai
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.12] text-[#FAF6ED]">
                Haute Coiffure & Bespoke Hair Rituals in <span className="italic font-normal text-[#DECA95]">Dubai</span>
              </h1>
            </div>

            {/* Lead Narrative Description */}
            <p className="text-base sm:text-lg text-[#BDB29F] font-light leading-relaxed max-w-2xl">
              An sanctuary of Parisian sophistication nestled on Mohammed Bin Rashid Boulevard. 
              Specializing in seamless French balayage, climate-proof anti-humidity keratin therapies, 
              and Russian hair extensions — washed exclusively in purified hospital-grade reverse-osmosis soft water.
            </p>

            {/* Key Value Pill Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-[#D8CFBC] bg-[#221F1B] border border-[#322E27] p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#CBAE66] shrink-0" />
                <span>RO Purified Soft Water</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#D8CFBC] bg-[#221F1B] border border-[#322E27] p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#CBAE66] shrink-0" />
                <span>Private VIP Suites</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#D8CFBC] bg-[#221F1B] border border-[#322E27] p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#CBAE66] shrink-0" />
                <span>Complimentary Valet P1</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                id="hero-reserve-cta"
                onClick={onBookClick}
                className="inline-flex items-center justify-center space-x-2.5 bg-[#DECA95] hover:bg-[#EBDDB7] text-[#191714] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-[#DECA95]/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Chair</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full border border-[#484033] hover:border-[#DECA95] text-[#E0D8C8] hover:text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all bg-[#1F1C18]/60 hover:bg-[#1F1C18]"
              >
                <span>View Menu & AED Pricing</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Consultation note */}
            <div className="flex items-center space-x-3 pt-2 text-xs text-[#9E9381]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online booking open for this week • Instant WhatsApp confirmations</span>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase & Salon Snapshot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Rim */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#383127] bg-[#201D19]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                  alt="Éclat Hair Lounge Interior in Downtown Dubai"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/20 pointer-events-none" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1C1916]/95 backdrop-blur-md border border-[#3E362A] p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#CBAE66] uppercase tracking-widest font-serif font-medium">
                        Downtown Dubai Lounge
                      </p>
                      <h4 className="text-sm font-semibold text-white mt-0.5">
                        Boulevard Point • 2nd Level
                      </h4>
                      <p className="text-[11px] text-[#A69B88] mt-0.5">
                        Private consultations & custom shade matching
                      </p>
                    </div>

                    <div className="text-right pl-3 border-l border-[#352F26]">
                      <span className="text-[10px] uppercase tracking-wider text-[#A69B88] block">Hours</span>
                      <span className="text-xs font-semibold text-[#DECA95] block">10am – 9pm</span>
                      <span className="text-[10px] text-emerald-400">Open Today</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Award Accent Card */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#1F1C18] border border-[#433A2D] rounded-xl p-3 shadow-xl items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#2E281F] flex items-center justify-center border border-[#B7953E]/40 text-[#DECA95]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9E9381] block">Dubai Luxury Awards</span>
                  <span className="text-xs font-semibold text-white">Best Salon Experience 2025</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
