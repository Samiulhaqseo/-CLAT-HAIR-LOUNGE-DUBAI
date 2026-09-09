import { useState } from 'react';
import { TRANSFORMATIONS } from '../data/salonData';
import { Clock, User, Sparkles, SlidersHorizontal } from 'lucide-react';

export function TransformationsSection() {
  const [activeTab, setActiveTab] = useState<string>('All');
  // Track which images have "After" toggled (default is After, with toggle to inspect Before)
  const [viewModes, setViewModes] = useState<Record<string, 'after' | 'before'>>({
    'tr-1': 'after',
    'tr-2': 'after',
    'tr-3': 'after'
  });

  const categories = ['All', 'Balayage', 'Keratin & Rituals', 'Extensions'];

  const filteredItems = activeTab === 'All'
    ? TRANSFORMATIONS
    : TRANSFORMATIONS.filter(item => item.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(item.category.toLowerCase()));

  const toggleView = (id: string) => {
    setViewModes(prev => ({
      ...prev,
      [id]: prev[id] === 'after' ? 'before' : 'after'
    }));
  };

  return (
    <section id="transformations" className="py-20 bg-[#F4EFE7] border-b border-[#E3D9C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#937533] font-semibold block">
            Real Dubai Hair Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1C1A17]">
            Artistry & Tangible Results
          </h2>
          <p className="text-sm sm:text-base text-[#615647]">
            Every look is sculpted to resist Dubai’s humidity, hard water exposure, and sunlight while achieving mirror-like brilliance.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex items-center justify-center space-x-2 mb-10 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === category
                  ? 'bg-[#1C1A17] text-white'
                  : 'bg-white/80 text-[#554D41] hover:bg-white border border-[#DDD3C1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Transformation Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map(item => {
            const currentMode = viewModes[item.id] || 'after';
            const displayImage = currentMode === 'after' ? item.afterImage : item.beforeImage;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#DDD3C1] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual Area with Interactive Before/After Toggle */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#24211D]">
                  <img
                    src={displayImage}
                    alt={`${item.title} ${currentMode}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Mode Badge (Before vs After) */}
                  <div className="absolute top-3 left-3 bg-[#1C1A17]/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border border-white/20">
                    {currentMode === 'after' ? (
                      <span className="flex items-center space-x-1 text-[#DECA95]">
                        <Sparkles className="w-3 h-3" />
                        <span>After Result</span>
                      </span>
                    ) : (
                      <span className="text-[#DDD3C1]">Initial State (Before)</span>
                    )}
                  </div>

                  {/* Toggle Mode Button */}
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={() => toggleView(item.id)}
                      className="bg-[#1C1A17]/90 hover:bg-[#1C1A17] text-white px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border border-white/20 shadow-md flex items-center space-x-1.5 transition-all cursor-pointer active:scale-95"
                    >
                      <SlidersHorizontal className="w-3 h-3 text-[#DECA95]" />
                      <span>{currentMode === 'after' ? 'View Before' : 'View After'}</span>
                    </button>
                  </div>
                </div>

                {/* Details info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#937533] block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-[#1C1A17] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#63594A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EBE1] space-y-1.5 text-xs text-[#6E6454]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5 text-[#B7953E]" />
                        <span>Artisan: <strong>{item.stylistName}</strong></span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-[#B7953E]" />
                        <span>{item.duration}</span>
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8C7A5E] bg-[#FAF7F2] p-2 rounded-lg border border-[#EDE5D6]">
                      Formula: {item.serviceUsed}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
