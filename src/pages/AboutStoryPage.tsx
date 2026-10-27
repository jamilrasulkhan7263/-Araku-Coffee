import React, { useState } from 'react';
import {
  Compass,
  Flame,
  Wheat,
  Coffee,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Droplets,
  Thermometer,
  Layers,
  CheckCircle2,
  Instagram,
  Linkedin,
  FileText,
  Recycle,
  Sprout,
  Sun,
  Globe,
  Clock,
  Hammer,
} from 'lucide-react';

interface CraftStep {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
  }[];
  deepDive: string;
  equipment: string;
}

export const AboutStoryPage: React.FC<{
  onExploreMenu: () => void;
  onBookTable: () => void;
}> = ({ onExploreMenu, onBookTable }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const craftSteps: CraftStep[] = [
    {
      id: 1,
      number: '01',
      title: 'Biodynamic Agroforestry',
      subtitle: '#Arakunomics in the Valley',
      shortDesc:
        'Cultivated in the Eastern Ghats at 900m–1,400m elevation under dense, multi-tiered native shade tree canopies.',
      icon: <Sprout className="w-5 h-5" />,
      specs: [
        { label: 'Harvest Elevation', value: '900m – 1,400m' },
        { label: 'Sugar Ripeness', value: '22° Brix Crimson Cherry' },
        { label: 'Tribal Community', value: '3M+ Farmer Partners' },
      ],
      deepDive:
        'Under the #Arakunomics framework, coffee is never grown as a sterile monoculture. It grows amidst jackfruit, mango, silver oak, and black pepper vines. Over 3 million fruit and shade trees have been planted across the valley, sequestering carbon, reviving indigenous birds and pollinators, and regenerating rich organic soil biology.',
      equipment: 'Biodynamic Composts & Natural Spring Water',
    },
    {
      id: 2,
      number: '02',
      title: 'Patio Sun Drying',
      subtitle: 'Raised African Drying Beds',
      shortDesc:
        'Float-sorted in cool mountain stream water and dried for 18–21 days on raised beds under gentle mountain breezes.',
      icon: <Sun className="w-5 h-5" />,
      specs: [
        { label: 'Drying Duration', value: '18 to 21 Days' },
        { label: 'Moisture Target', value: '10.5% – 11.2%' },
        { label: 'Sorting Standard', value: 'Triple-Sorted Red AAA' },
      ],
      deepDive:
        'Tribal farmer cooperatives manually turn the cherry beds every 45 minutes to guarantee even air circulation and eliminate mildew risk. Both washed and anaerobic natural lots undergo micro-fermentations to develop sweet red grape, wild berry, and stone fruit acidity.',
      equipment: 'Raised African Meshed Drying Beds',
    },
    {
      id: 3,
      number: '03',
      title: 'Terroir-Focused Roasting',
      subtitle: 'Cast-Iron Drum Craft',
      shortDesc:
        'Roasted in micro-batches to showcase origin clarity, winning the Prix Épicures Gold Award in Paris with SCA 88+ points.',
      icon: <Flame className="w-5 h-5" />,
      specs: [
        { label: 'Roast Style', value: 'Light-Medium Terroir Profile' },
        { label: 'First Crack Temp', value: '194°C Controlled RoR' },
        { label: 'Sensory Score', value: 'SCA 88+ Gold Paris' },
      ],
      deepDive:
        'Our certified Q-Graders calibrate rate-of-rise (RoR) heat transfer curves for each seasonal micro-lot. We never over-roast or mask natural sugars; our profiles elevate orange zest, dark chocolate, passionfruit, and sweet almond notes gifted by the red soils of the Eastern Ghats.',
      equipment: 'Giesen Specialty Cast-Iron Drum Roaster',
    },
    {
      id: 4,
      number: '04',
      title: 'Modular Modbar Service',
      subtitle: 'Minimalist Spatial Architecture',
      shortDesc:
        'Poured at our Bandra Flagship across seamless oak and natural stone counters with under-counter Modbar espresso taps.',
      icon: <Coffee className="w-5 h-5" />,
      specs: [
        { label: 'Bar Architecture', value: 'Modular Under-Counter Modbar' },
        { label: 'Interior Finishes', value: 'Oak, Natural Stone & Brass' },
        { label: 'Vessel Stoneware', value: 'Custom Sculptural Ceramics' },
      ],
      deepDive:
        'In Bandra West, our flagship spatial design removes traditional machine walls. The boiler machinery is concealed under-counter, allowing baristas to engage in open, warm dialogue with guests across natural stone and oak surfaces, complemented by the iconic Araku Moka Pot table ritual.',
      equipment: 'Modbar Under-Counter Taps & Sculptural Araku Moka Pots',
    },
  ];

  const currentCraft = craftSteps.find((s) => s.id === activeStep) || craftSteps[0];

  const teamMembers = [
    {
      name: 'Manoj Kumar',
      role: 'Pioneer of #Arakunomics & Naandi',
      badge: 'Regenerative Visionary',
      bio: 'Architect of #Arakunomics, uniting 3 million indigenous farmers across the Araku Valley to build a world-class coffee economy and restore forest ecosystems.',
      specialty: 'Regenerative Agroforestry & Farmer Equity',
      imageEmoji: '🌱',
      instagram: '@arakucoffeein',
      linkedin: 'manoj-kumar-araku',
    },
    {
      name: 'Hippolyte Courty',
      role: 'Master Coffee Sommelier',
      badge: 'Paris Sensory Lead',
      bio: 'Renowned French coffee sommelier who collaborated to develop Araku’s Paris flagship cupping profiles, yielding the coveted Prix Épicures gold prize in France.',
      specialty: 'SCA 88+ Sensory Calibration',
      imageEmoji: '☕',
      instagram: '@arakucoffeein',
      linkedin: 'hippolyte-courty-araku',
    },
    {
      name: 'Kavita Somayajula',
      role: 'Lead Agronomist & Cooperative Liaison',
      badge: 'Biodynamic Soil Specialist',
      bio: 'Works directly with tribal farmer women in Paderu and Ananthagiri, supervising compost enrichment, water conservation, and certified organic harvest sorting.',
      specialty: 'Organic Soil Carbon Enrichment',
      imageEmoji: '👩‍🌾',
      instagram: '@arakucoffeein',
      linkedin: 'kavita-araku-agronomy',
    },
    {
      name: 'Devansh Kulkarni',
      role: 'Head of Culinary & Barista Craft',
      badge: 'Bandra Flagship Lead',
      bio: 'Curates the Bandra flagship menu: pairing single-estate Araku pours with bold coastal plates like Garlic Thecha Ciabatta and Beetroot Brûlée.',
      specialty: 'Modbar Physics & Fermented Flavor Pairing',
      imageEmoji: '👨‍🍳',
      instagram: '@arakucoffeein',
      linkedin: 'devansh-araku-bandra',
    },
  ];

  return (
    <div className="min-h-screen bg-[#E2E3E5] text-[#263238] pb-24 animate-in fade-in duration-300">
      {/* 1. Header Hero Banner */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Zero-Pill Discipline Header Kicker */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC] animate-pulse" />
              <span className="text-[11px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/70">
                The Story of #Arakunomics · Page 3 · Araku Coffee Bandra
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight mb-6 leading-[1.08] text-balance">
              Restoring the Earth. Empowering 3 Million Farmers.
            </h1>

            <p className="font-editorial italic text-base sm:text-xl text-[#263238]/85 leading-relaxed max-w-2xl mx-auto">
              #Arakunomics is a celebrated economic revolution: transforming depleted lands in the Eastern Ghats into biodiverse forest coffee, poured at our minimalist flagship in Bandra West.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Journey & Philosophy Section (2-Column Layout) */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D7CCC8]/70 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/85 shadow-[0_20px_50px_rgba(38,50,56,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Rich narrative heading & text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-[0.2em] text-[#263238]/70">
                  <Sprout className="w-4 h-4 text-[#8FB4AC]" />
                  <span>The #Arakunomics Philosophy</span>
                </div>

                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238] leading-tight tracking-tight text-balance">
                  From Soil Regeneration to Award-Winning Cups
                </h2>

                <p className="font-sans-body text-sm sm:text-base text-[#263238]/85 leading-relaxed">
                  Two decades ago, the indigenous tribal farmers of the Araku Valley in Andhra Pradesh faced the consequences of deforestation and soil erosion. Rather than accepting industrial commodity coffee models, <strong>#Arakunomics</strong> was pioneered to restore the land through biodynamic agroforestry.
                </p>

                <p className="font-sans-body text-sm sm:text-base text-[#263238]/85 leading-relaxed">
                  Today, over 3 million fruit, shade, and timber trees have been planted across the valley. Tribal farmers are equal shareholders in their cooperatives, receiving guaranteed direct premiums, healthcare, and education. In 2018, Araku won the prestigious <em>Prix Épicures</em> in Paris for the world’s best specialty coffee.
                </p>

                {/* Key Provenance Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#263238]/15">
                  <div className="bg-white/70 p-4 rounded-2xl border border-white text-center shadow-2xs">
                    <span className="font-headline text-xl sm:text-2xl font-black text-[#263238] block">
                      3M+
                    </span>
                    <span className="text-[10px] font-tech text-[#263238]/70 uppercase tracking-wider">
                      Trees Planted
                    </span>
                  </div>
                  <div className="bg-white/70 p-4 rounded-2xl border border-white text-center shadow-2xs">
                    <span className="font-headline text-xl sm:text-2xl font-black text-[#263238] block">
                      100%
                    </span>
                    <span className="text-[10px] font-tech text-[#263238]/70 uppercase tracking-wider">
                      Tribal Owned
                    </span>
                  </div>
                  <div className="bg-white/70 p-4 rounded-2xl border border-white text-center shadow-2xs">
                    <span className="font-headline text-xl sm:text-2xl font-black text-[#263238] block">
                      88+
                    </span>
                    <span className="text-[10px] font-tech text-[#263238]/70 uppercase tracking-wider">
                      SCA Paris Score
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Minimalist Spatial Architecture Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#D7CCC8] rounded-3xl p-8 border border-white/90 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-[#263238]/15 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#8FB4AC] flex items-center justify-center text-[#263238]">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-tech font-bold uppercase tracking-wider text-[#263238]">
                        Bandra Minimalist Design
                      </span>
                    </div>
                    <span className="text-[10px] font-tech font-bold bg-white/70 px-2.5 py-1 rounded-full text-[#263238]">
                      Jorge Pardo Collab
                    </span>
                  </div>

                  {/* Architectural Blueprint List */}
                  <div className="bg-white/80 rounded-2xl p-6 border border-white space-y-4 mb-6 shadow-2xs">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#263238]/60 font-tech">Oak Timber</span>
                      <span className="font-bold text-[#263238]">Tactile Solid White Oak Surfaces</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#263238]/60 font-tech">Natural Stone</span>
                      <span className="font-bold text-[#263238]">Muted Sandstone &amp; Slate Countertops</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#263238]/60 font-tech">Clean Brass</span>
                      <span className="font-bold text-[#263238]">Hand-Brushed Brass Accents &amp; Lighting</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#263238]/60 font-tech">Modbar Taps</span>
                      <span className="font-bold text-[#8FB4AC]">Zero-Wall Under-Counter Boilers</span>
                    </div>
                  </div>

                  <blockquote className="font-serif-luxury text-base text-[#263238] italic leading-snug mb-4">
                    "We concealed all bulky espresso boilers under the counter. The minimalist Modbar allows baristas and guests to connect directly, turning extraction into a shared dialogue."
                  </blockquote>

                  <div className="flex items-center gap-2 text-xs font-tech text-[#263238]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4AC]" />
                    <span>Araku World Flagship, Bandra West, Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive 4-Step Craft Process Visualizer */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#D7CCC8] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#263238] font-tech">
                The Farm-to-Cup Lifecycle
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] mb-3">
              Precision from Forest Soil to Ceramic Cup
            </h2>
            <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed">
              Explore how each stage of #Arakunomics shapes the coffee in your cup at Bandra.
            </p>
          </div>

          {/* Stepper Navigation: 4 Warm Oat Cards with Mint Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {craftSteps.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-6 rounded-3xl text-left transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#D7CCC8] border-[#8FB4AC] shadow-lg -translate-y-1'
                      : 'bg-[#D7CCC8]/60 hover:bg-[#D7CCC8] border-white/80 shadow-2xs'
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                      isActive ? 'bg-[#8FB4AC] opacity-100' : 'bg-transparent opacity-0'
                    }`}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-tech text-xs font-bold uppercase tracking-widest text-[#263238]/50">
                      Phase {step.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#8FB4AC] text-[#263238] shadow-2xs'
                          : 'bg-white/70 text-[#263238]/70'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#263238] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-tech text-[#8FB4AC] font-bold block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-[#263238]/75 leading-relaxed line-clamp-2">
                    {step.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Inspector Panel */}
          <div className="bg-[#D7CCC8] rounded-3xl p-8 sm:p-10 border border-white/90 shadow-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-[#263238]/60 font-bold">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8FB4AC] text-[#263238]">
                    Phase {currentCraft.number} Detail
                  </span>
                  <span>{currentCraft.title}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#263238]">
                  {currentCraft.subtitle}
                </h3>

                <p className="text-sm text-[#263238]/85 leading-relaxed">
                  {currentCraft.deepDive}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-tech text-[#263238]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#8FB4AC]" />
                  <span>Tools &amp; Equipment: {currentCraft.equipment}</span>
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="lg:col-span-5 space-y-3">
                <div className="bg-white/80 rounded-2xl p-5 border border-white space-y-3">
                  <span className="text-xs font-tech font-bold uppercase tracking-wider text-[#263238]/60 block pb-2 border-b border-[#263238]/10">
                    Scientific &amp; Ecological Parameters
                  </span>
                  {currentCraft.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-[#263238]/70">{spec.label}</span>
                      <span className="font-tech font-bold text-[#263238] bg-[#E2E3E5] px-2.5 py-1 rounded-lg">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Pioneers & Master Baristas Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#D7CCC8] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#263238] font-tech">
                The People of Araku
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] mb-3">
              Leaders of the Regenerative Movement
            </h2>
            <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed">
              From the tribal hills of Andhra Pradesh to our culinary hearth in Bandra.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#D7CCC8] rounded-3xl p-6 sm:p-7 border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center text-3xl mb-5 shadow-xs border border-white group-hover:scale-105 transition-transform duration-200">
                    {member.imageEmoji}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8FB4AC] text-[#263238] shadow-2xs mb-2">
                    <Award className="w-3 h-3 text-[#263238]" />
                    {member.badge}
                  </span>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#263238] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-tech text-[#263238]/70 block mb-3 font-semibold">
                    {member.role}
                  </span>

                  <p className="text-xs text-[#263238]/80 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#263238]/10 mt-auto">
                  <span className="text-[10px] font-tech text-[#263238]/60 uppercase block mb-1">
                    Core Dedication
                  </span>
                  <span className="text-xs font-bold text-[#263238] block mb-3">
                    {member.specialty}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://instagram.com/arakucoffeein"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/70 hover:bg-white text-[#263238] transition-colors border border-white text-xs flex items-center gap-1 font-tech"
                      title={member.instagram}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/70 hover:bg-white text-[#263238] transition-colors border border-white text-xs flex items-center gap-1 font-tech"
                      title={member.linkedin}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sustainability & Local Farming Banner */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D7CCC8] rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/90 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-xs font-tech font-bold uppercase tracking-wider text-[#263238] mb-3">
                <Recycle className="w-3.5 h-3.5 text-[#8FB4AC]" />
                <span>The #Arakunomics Blueprint</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] mb-4">
                Economic Dignity Through Ecological Restoration
              </h2>
              <p className="text-sm sm:text-base text-[#263238]/80 leading-relaxed">
                When you drink Araku at our Bandra flagship, you participate in a global movement of regenerative agriculture. Zero synthetic fertilizers, direct farmer profit equity, and full traceability.
              </p>
            </div>

            {/* 3 Sustainability Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/85 rounded-2xl p-6 border border-white shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#8FB4AC]/25 flex items-center justify-center text-[#263238] mb-4">
                  <Sprout className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#263238] mb-2">
                  3 Million Shade Trees
                </h4>
                <p className="text-xs text-[#263238]/75 leading-relaxed">
                  Planting millions of endemic fruit, pepper, and timber trees has reversed mountain soil erosion and converted monoculture into high-carbon biological sanctuaries.
                </p>
              </div>

              <div className="bg-white/85 rounded-2xl p-6 border border-white shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#8FB4AC]/25 flex items-center justify-center text-[#263238] mb-4">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#263238] mb-2">
                  100% Certified Biodynamic
                </h4>
                <p className="text-xs text-[#263238]/75 leading-relaxed">
                  Strict zero-chemical farming utilizing natural composts, celestial lunar planting rhythms, and clean mountain stream gravity water filters.
                </p>
              </div>

              <div className="bg-white/85 rounded-2xl p-6 border border-white shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#8FB4AC]/25 flex items-center justify-center text-[#263238] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#263238] mb-2">
                  100% Direct Tribal Equity
                </h4>
                <p className="text-xs text-[#263238]/75 leading-relaxed">
                  Tribal farmers own their crop processing units and receive guaranteed premiums, shielding them completely from volatile international commodity markets.
                </p>
              </div>
            </div>

            {/* Bottom Callout Actions */}
            <div className="pt-6 border-t border-[#263238]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-tech text-[#263238]/70">
                Experience the harvest at our Bandra Flagship or order whole beans &amp; gear via WhatsApp.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onExploreMenu}
                  className="px-6 py-3 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  Explore Menu (Page 2)
                </button>
                <button
                  onClick={onBookTable}
                  className="px-6 py-3 rounded-xl bg-[#263238] hover:bg-[#34444c] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs cursor-pointer"
                >
                  Reserve Table (Page 5)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
