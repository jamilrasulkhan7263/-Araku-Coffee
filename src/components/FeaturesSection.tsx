import React from 'react';
import { Flame, Sprout, Compass, Check, ArrowRight, ShieldCheck, Sparkles, Coffee } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

export const FeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'arakunomics',
      title: 'The #Arakunomics Model',
      tagline: 'Regenerative Agriculture',
      description:
        'A globally celebrated economic and ecological revolution. Reversing deforestation in the Eastern Ghats with 3+ million planted trees and empowering tribal farmer cooperatives through direct equity and fair trade.',
      icon: <Sprout className="w-6 h-6 text-[#8FB4AC]" />,
      highlights: [
        '100% Certified Biodynamic & Organic Arabica',
        'Shade-grown under jackfruit, silver oak & pepper',
        'Guaranteed direct farmer equity & price premiums',
      ],
    },
    {
      id: 'architecture',
      title: 'Minimalist Spatial Design',
      tagline: 'Oak, Brass & Modular Modbar',
      description:
        'Conceived as a sensory salon in Bandra West. Designed with tactile oak timber, natural stone, sculptural clay accents, and under-counter Modbar espresso taps that dismantle barriers between barista and guest.',
      icon: <Compass className="w-6 h-6 text-[#8FB4AC]" />,
      highlights: [
        'Barrier-free under-counter Modbar coffee taps',
        'Natural stone, warm oak timber & custom brass',
        'Acoustically tuned salon & open air Bandra verandah',
      ],
    },
    {
      id: 'gastronomy',
      title: 'Curated Bandra Gastronomy',
      tagline: 'Farm-to-Table Plates & Gear',
      description:
        'From our fiery Garlic Thecha Ciabatta and Beetroot Brûlée to the sculptural Araku Moka Pot and V60 pour-over sets, our culinary laboratory celebrates terroir from plate to cup.',
      icon: <Coffee className="w-6 h-6 text-[#8FB4AC]" />,
      highlights: [
        'Garlic Thecha Ciabatta & Beetroot Brûlée',
        'Iconic Araku Moka Pot & Origami drippers',
        'Fresh daily bakes & 24h Cascara cold brews',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#8FB4AC] animate-pulse" />
            <span className="text-[11px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/70">
              The Araku Bandra Philosophy
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238] tracking-tight mb-4 text-balance">
            Crafted by Nature, Perfected in Mumbai
          </h2>
          <p className="font-sans-body text-[#263238]/75 text-sm sm:text-base leading-relaxed">
            Three core pillars anchor the Bandra flagship: restorative regenerative ecology, award-winning specialty extraction, and elevated culinary hospitality.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-[#D7CCC8] p-8 sm:p-10 border border-white/85 shadow-[0_20px_50px_rgba(38,50,56,0.06)] hover:shadow-[0_30px_60px_rgba(38,50,56,0.12)] transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden ${
                index === 0
                  ? 'rounded-[2.5rem] md:rounded-tl-[3.5rem]'
                  : index === 2
                  ? 'rounded-[2.5rem] md:rounded-br-[3.5rem]'
                  : 'rounded-[2.5rem]'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#8FB4AC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-xs border border-white group-hover:scale-105 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-tech uppercase tracking-[0.2em] font-bold text-[#263238]/60">
                    {feature.tagline}
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-bold text-[#263238] mb-3 group-hover:text-[#263238] transition-colors tracking-tight">
                  {feature.title}
                </h3>

                <p className="font-sans-body text-xs sm:text-sm text-[#263238]/80 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#263238]/90">
                      <div className="w-4 h-4 rounded-full bg-[#8FB4AC]/35 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#263238]" />
                      </div>
                      <span className="font-sans-body">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#263238]/10 flex items-center justify-between text-xs font-semibold text-[#263238]">
                <span className="text-[#263238]/60 font-tech uppercase tracking-wider text-[11px]">
                  Bandra Signature
                </span>
                <span className="font-headline font-bold text-xs uppercase tracking-wider text-[#263238] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5 text-[#8FB4AC]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
