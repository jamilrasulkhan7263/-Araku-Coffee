import React, { useRef } from 'react';
import { Droplet, Flame, Compass, ArrowRight, Coffee, Sparkles } from 'lucide-react';

interface ExperienceCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const TiltExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  title,
  subtitle,
  description,
  tag,
  icon,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#D7CCC8]/55 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/80 shadow-bespoke hover:shadow-bespoke-hover transition-all duration-300 ease-out will-change-transform flex flex-col justify-between group"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-tech text-3xl font-bold text-[#8FB4AC]/70">
            {number}
          </span>
          <div className="p-3 rounded-2xl bg-white/80 text-[#263238] border border-white/80 shadow-xs">
            {icon}
          </div>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-[#263238]/60 font-tech font-bold block mb-1">
          {subtitle}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#263238] tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-sm text-[#263238]/75 leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#263238]/10 flex items-center justify-between">
        <span className="text-xs font-editorial italic text-[#263238]/75">
          {tag}
        </span>
        <span className="text-xs font-bold text-[#263238] group-hover:text-[#8FB4AC] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Details <ArrowRight className="w-3.5 h-3.5 text-[#8FB4AC]" />
        </span>
      </div>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceCardProps[] = [
    {
      number: '01',
      title: 'Modular Modbar Counters',
      subtitle: 'Minimalist Architecture',
      description:
        'Espresso boilers and grinders are housed seamlessly beneath the counter. Minimalist brass taps rise from solid oak stone surfaces, inviting eye-to-eye conversations with our baristas.',
      tag: 'Zero Barrier Architecture',
      icon: <Coffee className="w-5 h-5 text-[#8FB4AC]" />,
    },
    {
      number: '02',
      title: 'The Iconic Araku Moka Pot',
      subtitle: 'Sculptural Ritual',
      description:
        'Experience table-side extraction with our award-winning moka pot design. Heavy-gauge aluminum and tactile brass knobs brew dense, aromatic single-origin extractions.',
      tag: 'Table-Side Brew Ritual',
      icon: <Flame className="w-5 h-5 text-[#8FB4AC]" />,
    },
    {
      number: '03',
      title: '24-Hour Cascara & Nitrogen Bar',
      subtitle: 'Cascara Craft',
      description:
        'Sun-dried organic coffee cherry tea cold-steeped for 24 hours and charged with silky nitrogen micro-bubbles, revealing natural black cherry and hibiscus effervescence.',
      tag: 'Antioxidant-Rich Brew',
      icon: <Droplet className="w-5 h-5 text-[#8FB4AC]" />,
    },
    {
      number: '04',
      title: 'Bandra Cupping & Sensory Lab',
      subtitle: 'Q-Grader Cupping Flights',
      description:
        'Score coffees side-by-side: Signature, Micro Climate, High Altitude, and Grand Reserve using certified Specialty Coffee Association sensory scorecards.',
      tag: 'SCA 88+ Point Flights',
      icon: <Compass className="w-5 h-5 text-[#8FB4AC]" />,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4AC]" />
            <span className="text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-[#263238]/70">
              Sensory Craft in Bandra West
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] tracking-tight mb-4">
            Uncompromising Coffee{' '}
            <span className="font-editorial italic font-normal text-[#263238]/85">
              Disciplines
            </span>
          </h2>
          <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed font-normal">
            Every ritual at the Bandra flagship honors the tribal terroir of the Araku Valley through thoughtful modern design.
          </p>
        </div>

        {/* 4-Card 3D Hover Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <TiltExperienceCard key={exp.number} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
