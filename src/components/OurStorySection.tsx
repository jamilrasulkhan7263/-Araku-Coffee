import React from 'react';
import { Award, Leaf, HeartHandshake, Coffee, Sprout } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#D7CCC8]/45 backdrop-blur-md rounded-[2.8rem] p-8 sm:p-12 lg:p-16 border border-white/80 shadow-bespoke">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4AC]" />
                <span className="text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-[#263238]/70">
                  #Arakunomics &amp; Regenerative Heritage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] tracking-tight leading-[1.12]">
                Born in the Araku Valley,{' '}
                <span className="font-editorial italic font-normal text-[#263238]/85">
                  Elevated in Bandra
                </span>
              </h2>

              <p className="text-[#263238]/85 text-sm sm:text-base leading-relaxed">
                Araku Coffee is the culmination of <strong>#Arakunomics</strong>: a self-sustaining regenerative economic model that honors and empowers over 3 million indigenous tribal farmers across the misty high slopes of the Eastern Ghats in Andhra Pradesh.
              </p>

              <p className="text-[#263238]/85 text-sm sm:text-base leading-relaxed">
                By planting millions of indigenous shade trees and enriching depleted soils through biodynamic farming, Araku reversed historical deforestation. In Mumbai, our Bandra flagship translates this farm-to-cup purity into an unhurried, minimalist sanctuary with custom oak timber, natural stone, brushed brass, and barrier-free Modbar counters.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#263238]/12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf className="w-4 h-4 text-[#8FB4AC]" />
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech">100% Organic</h4>
                  </div>
                  <p className="text-xs text-[#263238]/70 font-editorial italic">Biodynamic shade-grown Arabica</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sprout className="w-4 h-4 text-[#8FB4AC]" />
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech">3M+ Farmers</h4>
                  </div>
                  <p className="text-xs text-[#263238]/70 font-editorial italic">Direct tribal farmer equity</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#8FB4AC]" />
                    <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech">Paris Gold</h4>
                  </div>
                  <p className="text-xs text-[#263238]/70 font-editorial italic">Prix Épicures 88+ SCA winner</p>
                </div>
              </div>
            </div>

            {/* Bespoke Editorial Quote Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#D7CCC8] rounded-[2.5rem] rounded-tr-[4.5rem] p-8 sm:p-10 border border-white/90 shadow-bespoke hover:shadow-bespoke-hover transition-all duration-500 relative">
                <Coffee className="w-8 h-8 text-[#8FB4AC] mb-6" />
                <blockquote className="font-editorial italic text-xl sm:text-2xl text-[#263238] font-normal leading-relaxed mb-6">
                  “A cup of Araku is not merely specialty coffee. It is the regeneration of a forest, the dignity of a tribal farmer, and the calm of modern design.”
                </blockquote>
                <div className="pt-4 border-t border-[#263238]/15 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#263238]">The Arakunomics Collective</h4>
                    <p className="text-xs text-[#263238]/65 font-tech">Tribal Farmer Cooperatives &amp; Bandra Baristas</p>
                  </div>
                  <span className="font-tech text-xs font-bold px-3 py-1 rounded-full bg-white/70 text-[#263238] border border-white/80">
                    Bandra Flagship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
