import { TESTIMONIALS } from '../data/salonData';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#FAF8F5] border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E7F38] font-bold block">
              Client Praises & Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17]">
              Loved by Dubai’s Discerning Residents
            </h2>
            <p className="text-sm text-[#6B6152]">
              Real testimonials from our regular clientele across Palm Jumeirah, Emirates Hills, DIFC, and Downtown.
            </p>
          </div>

          {/* Aggregate Rating Block */}
          <div className="bg-white border border-[#E0D7C4] rounded-2xl p-5 shrink-0 flex items-center space-x-4 shadow-sm">
            <div className="text-3xl font-serif font-bold text-[#1C1A17]">
              4.9
            </div>
            <div className="space-y-1">
              <div className="flex text-[#CBAE66]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#CBAE66]" />
                ))}
              </div>
              <p className="text-[11px] text-[#7A6E5C]">
                Based on <strong>540+ reviews</strong> on Google & Fresha
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D3] flex flex-col justify-between hover:shadow-md transition-all relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#CBAE66]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#CBAE66]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#A19584]">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#453E34] italic leading-relaxed mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1] space-y-1">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-bold text-[#1C1A17]">{review.name}</span>
                  {review.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Client" />
                  )}
                </div>
                <p className="text-[11px] text-[#8C7A5E]">{review.district}</p>
                <span className="inline-block text-[10px] bg-[#FAF6EE] text-[#756238] px-2 py-0.5 rounded border border-[#EDE3CF]">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
