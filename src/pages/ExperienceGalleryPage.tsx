import React, { useState } from 'react';
import {
  Sparkles,
  Volume2,
  Sun,
  Flame,
  Music,
  Laptop,
  Compass,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  CheckCircle2,
  Coffee,
  Heart,
  Dog,
  Clock,
  ArrowRight,
  MapPin,
} from 'lucide-react';

export type VibeCategory =
  | 'All'
  | 'Modbar Sensory Counter'
  | 'Oak Timber Salon'
  | 'Bandra Verandah'
  | 'Cupping & Moka Ritual';

interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<VibeCategory, 'All'>;
  caption: string;
  emoji: string;
  aspect: 'tall' | 'wide' | 'square';
  lighting: string;
  soundLevel: string;
  bestTime: string;
  tag: string;
  visualColor: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  orderedItem: string;
  verified: boolean;
  avatarEmoji: string;
}

export const ExperienceGalleryPage: React.FC<{
  onExploreMenu: () => void;
  onBookTable: () => void;
}> = ({ onExploreMenu, onBookTable }) => {
  const [selectedVibe, setSelectedVibe] = useState<VibeCategory>('All');
  const [activePhotoModal, setActivePhotoModal] = useState<GalleryItem | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const vibeCategories: { label: VibeCategory; icon: React.ReactNode; desc: string }[] = [
    { label: 'All', icon: <Sparkles className="w-4 h-4" />, desc: 'Bandra Flagship Panorama' },
    { label: 'Modbar Sensory Counter', icon: <Coffee className="w-4 h-4" />, desc: 'Zero-barrier espresso taps' },
    { label: 'Oak Timber Salon', icon: <Laptop className="w-4 h-4" />, desc: '40 dB • Mindful focus' },
    { label: 'Bandra Verandah', icon: <Sun className="w-4 h-4" />, desc: 'Open-air coastal breeze' },
    { label: 'Cupping & Moka Ritual', icon: <Flame className="w-4 h-4" />, desc: 'Araku Moka Pot flights' },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Minimalist Modular Modbar Counter',
      category: 'Modbar Sensory Counter',
      caption: 'Concealed under-counter boilers with clean brushed brass taps rising from natural stone, inviting face-to-face barista dialogue without bulky machine barriers.',
      emoji: '☕',
      aspect: 'wide',
      lighting: 'Focused 3000K Brass Pendants',
      soundLevel: '50 dB • Gentle Extraction & Dialogue',
      bestTime: '08:00 AM – 11:30 AM',
      tag: 'Modbar Tap',
      visualColor: '#8FB4AC',
    },
    {
      id: 'gal-2',
      title: 'Solid White Oak Focus Salon',
      category: 'Oak Timber Salon',
      caption: 'Handcrafted white oak communal tables with discreet high-speed power outlets, acoustically dampened ceiling baffles, and soft diffused daylight.',
      emoji: '💻',
      aspect: 'tall',
      lighting: 'Natural North Light + Warm 2700K Glow',
      soundLevel: '38 dB • Quiet Focus Whisper',
      bestTime: '09:00 AM – 01:00 PM',
      tag: 'Focus Haven',
      visualColor: '#D7CCC8',
    },
    {
      id: 'gal-3',
      title: 'Tropical Bandra Open Verandah',
      category: 'Bandra Verandah',
      caption: 'Lush tropical patio shaded by frangipani trees, with artisanal terracotta planters, gentle Arabian Sea breezes, and pet-friendly seating.',
      emoji: '🌿',
      aspect: 'tall',
      lighting: 'Dappled Morning & Twilight Light',
      soundLevel: '42 dB • Rustling Leaves & Coastal Wind',
      bestTime: '08:00 AM – 11:00 AM & 05:00 PM',
      tag: 'Pet Verandah',
      visualColor: '#8FB4AC',
    },
    {
      id: 'gal-4',
      title: 'Araku Moka Pot Table Ritual',
      category: 'Cupping & Moka Ritual',
      caption: 'Our iconic matte mint & charcoal moka pots brought to table-side, pouring rich dark chocolate and berry extractions directly into custom stoneware.',
      emoji: '⚱️',
      aspect: 'wide',
      lighting: 'Warm Ambient Candlelight & Filaments',
      soundLevel: '48 dB • Gurgling Brew & Warm Laughs',
      bestTime: 'All Day Specialty Service',
      tag: 'Moka Ritual',
      visualColor: '#263238',
    },
    {
      id: 'gal-5',
      title: 'Grand Reserve Sensory Cupping Table',
      category: 'Cupping & Moka Ritual',
      caption: 'Round stone cupping counter where guests compare SCA 88+ Grand Reserve and Micro Climate lots across aroma, acidity, and mouthfeel with certified Q-Graders.',
      emoji: '✨',
      aspect: 'tall',
      lighting: 'Color-Neutral 4000K Sensory Lighting',
      soundLevel: '52 dB • Slurping & Sensory Scoring',
      bestTime: 'Saturdays & Sundays 10:30 AM',
      tag: 'Cupping Lab',
      visualColor: '#D7CCC8',
    },
    {
      id: 'gal-6',
      title: 'Fresh Daily Hearth Bakery Display',
      category: 'Oak Timber Salon',
      caption: '27-layer French butter croissants and Garlic Thecha Ciabatta fresh out of the stone deck oven, arranged on cool slate and timber boards.',
      emoji: '🥐',
      aspect: 'wide',
      lighting: 'Morning Golden Warmth',
      soundLevel: '44 dB • Gentle Breakfast Murmur',
      bestTime: 'Fresh Bakes at 08:00 AM Daily',
      tag: 'Daily Hearth',
      visualColor: '#8FB4AC',
    },
  ];

  const filteredGallery = galleryItems.filter(
    (item) => selectedVibe === 'All' || item.category === selectedVibe
  );

  const testimonials: Testimonial[] = [
    {
      id: 'rev-1',
      name: 'Rhea Kapoor',
      role: 'Creative Director & Bandra Local',
      rating: 5,
      date: 'Visited yesterday',
      comment:
        'The minimalist spatial design of Araku Bandra is sublime. Sitting at the Modbar counter without a massive espresso machine in between creates the most genuine coffee interaction in Mumbai.',
      orderedItem: 'Micro Climate Pour-Over & Beetroot Brûlée',
      verified: true,
      avatarEmoji: '👩‍💼',
    },
    {
      id: 'rev-2',
      name: 'Chef Tarun Sibal',
      role: 'Restaurateur & Culinary Consultant',
      rating: 5,
      date: 'Visited last week',
      comment:
        'The Garlic Thecha Ciabatta paired with Araku Signature cold brew is a masterclass in local terroir meeting specialty coffee. True reverence for Indian ingredients.',
      orderedItem: 'Garlic Thecha Ciabatta & Araku Signature',
      verified: true,
      avatarEmoji: '👨‍🍳',
    },
    {
      id: 'rev-3',
      name: 'Anand Mahindra',
      role: 'Patron of #Arakunomics',
      rating: 5,
      date: 'Visited this month',
      comment:
        'Every sip connects directly back to the tribal farmers of the Araku Valley. To see this regenerative philosophy come to life in Bandra with world-class design is immensely gratifying.',
      orderedItem: 'Grand Reserve Selection & Araku Moka Pot',
      verified: true,
      avatarEmoji: '🏛️',
    },
    {
      id: 'rev-4',
      name: 'Kavya & Kabir',
      role: 'Weekend Verandah Regulars',
      rating: 5,
      date: 'Visited Saturday morning',
      comment:
        'We love bringing our indie dog to the 12th Road verandah. The staff greeted us with chilled water and the 24-hour cascara nitro cold brew is simply unmatched.',
      orderedItem: '24h Cascara Nitro Cold Brew & Croissant',
      verified: true,
      avatarEmoji: '🐕',
    },
  ];

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
  };

  return (
    <div className="min-h-screen bg-[#E2E3E5] text-[#263238] pb-24 animate-in fade-in duration-300">
      {/* 1. Page Header & Introduction */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC] animate-pulse" />
              <span className="text-[11px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/70">
                Spatial Architecture · Page 4 · Bandra World Flagship
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight mb-6 leading-[1.08] text-balance">
              Experience the Bandra Sanctuary
            </h1>

            <p className="font-editorial italic text-base sm:text-xl text-[#263238]/85 leading-relaxed max-w-2xl mx-auto">
              Oak timber salons, barrier-free Modbar counters, lush tropical rain tree verandahs, and the gentle table-side ritual of the Araku Moka Pot.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Virtual Vibe Selector */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 border border-white/80 shadow-[0_15px_35px_rgba(38,50,56,0.04)] mb-10">
            <div className="flex items-center justify-between pb-4 border-b border-[#263238]/10 mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8FB4AC]" />
                <span className="font-headline text-xs font-bold uppercase tracking-wider text-[#263238]">
                  Bandra Spatial Atmosphere Filter
                </span>
              </div>
              <span className="text-[11px] font-tech text-[#263238]/60">
                Open Daily: 08:00 AM – 11:00 PM • 968, 12th Road, Bandra West
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {vibeCategories.map((vibe) => {
                const isSelected = selectedVibe === vibe.label;
                return (
                  <button
                    key={vibe.label}
                    onClick={() => setSelectedVibe(vibe.label)}
                    className={`btn-tactile p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#8FB4AC] text-[#263238] border-[#8FB4AC] shadow-md -translate-y-0.5'
                        : 'bg-[#D7CCC8]/60 hover:bg-[#D7CCC8] text-[#263238]/80 border-white/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-headline font-bold text-xs sm:text-sm tracking-tight">{vibe.label}</span>
                      <div className={`p-1.5 rounded-xl ${isSelected ? 'bg-white/80 text-[#263238]' : 'bg-white/50 text-[#263238]/60'}`}>
                        {vibe.icon}
                      </div>
                    </div>
                    <span className={`text-[10px] font-tech block ${isSelected ? 'text-[#263238]/90 font-medium' : 'text-[#263238]/60'}`}>
                      {vibe.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Masonry Photo Gallery Grid with 3D Hover Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setActivePhotoModal(item)}
                className="bg-[#D7CCC8] rounded-[2.25rem] p-6 sm:p-7 border border-white/90 shadow-[0_15px_35px_rgba(38,50,56,0.06)] hover:shadow-[0_25px_55px_rgba(38,50,56,0.12)] transition-all duration-300 ease-out will-change-transform flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out, box-shadow 0.25s ease',
                }}
              >
                <div className="relative w-full h-56 rounded-2xl bg-white/85 flex flex-col items-center justify-center border border-white mb-5 overflow-hidden shadow-xs group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#263238_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-3xl bg-[#E2E3E5] flex items-center justify-center text-4xl shadow-sm border border-white mb-2">
                      {item.emoji}
                    </div>
                    <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#263238]/60 bg-white/80 px-2.5 py-0.5 rounded-full border border-white">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-xl bg-white/90 text-[#263238] shadow-sm">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] font-tech text-[#263238]/60 uppercase tracking-wider mb-2">
                    <span>{item.category}</span>
                    <span className="text-[#8FB4AC] font-bold">• Bandra Verified</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-[#263238] mb-2 group-hover:text-[#263238] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#263238]/75 leading-relaxed mb-6">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#263238]/10 space-y-1.5 text-[11px] font-tech text-[#263238]/70">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[#8FB4AC]" />
                      <span>Lighting:</span>
                    </span>
                    <span className="font-bold text-[#263238]">{item.lighting}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-[#8FB4AC]" />
                      <span>Acoustics:</span>
                    </span>
                    <span className="font-bold text-[#263238]">{item.soundLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials & Reviews Carousel */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#D7CCC8] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#263238] font-tech">
                Patron Stories
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] mb-3">
              Impressions of Araku Bandra
            </h2>
            <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed">
              Perspectives from Mumbai creatives, visiting gourmands, and coffee aficionados.
            </p>
          </div>

          <div className="bg-[#D7CCC8] rounded-3xl p-8 sm:p-12 border border-white/90 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#263238]/15 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center text-3xl shadow-xs border border-white">
                  {currentTestimonial.avatarEmoji}
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#263238]">
                    {currentTestimonial.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#263238]/70 font-tech">
                    <span>{currentTestimonial.role}</span>
                    <span>•</span>
                    <span className="text-[#263238]/50">{currentTestimonial.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                {currentTestimonial.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    Verified Guest
                  </span>
                )}
              </div>
            </div>

            <blockquote className="font-serif-luxury text-xl sm:text-2xl text-[#263238] font-medium leading-relaxed mb-8 italic">
              "{currentTestimonial.comment}"
            </blockquote>

            <div className="pt-6 border-t border-[#263238]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-tech text-[#263238]/80">
                <Coffee className="w-4 h-4 text-[#8FB4AC]" />
                <span>Favorite Selection: <strong>{currentTestimonial.orderedItem}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs font-tech font-bold text-[#263238]/60 mr-2">
                  {currentTestimonialIndex + 1} / {testimonials.length}
                </div>
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-[#263238] transition-all shadow-2xs border border-white cursor-pointer active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2.5 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] transition-all shadow-2xs cursor-pointer active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action bar */}
      <section className="py-6 px-4 max-w-7xl mx-auto">
        <div className="bg-[#D7CCC8]/60 rounded-3xl p-8 sm:p-10 border border-white/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#263238]">
              Experience the Araku Bandra Flagship
            </h3>
            <p className="text-sm text-[#263238]/75 mt-1 max-w-lg">
              Reserve a table on the verandah or browse our complete roastery and retail catalog.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onExploreMenu}
              className="px-6 py-3 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] font-bold text-xs sm:text-sm shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              Explore Menu (Page 2)
            </button>
            <button
              onClick={onBookTable}
              className="px-6 py-3 rounded-xl bg-[#263238] hover:bg-[#34444c] text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer transition-all"
            >
              Reserve Table (Page 5)
            </button>
          </div>
        </div>
      </section>

      {/* Photo Lightbox / Zoom Modal */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#263238]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setActivePhotoModal(null)}
          />
          <div className="relative w-full max-w-xl bg-[#E2E3E5] rounded-3xl border border-white shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#263238]/10 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activePhotoModal.emoji}</span>
                <div>
                  <span className="text-[10px] font-tech uppercase text-[#263238]/60 font-bold block">
                    {activePhotoModal.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#263238]">
                    {activePhotoModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActivePhotoModal(null)}
                className="p-1.5 rounded-full bg-white/70 hover:bg-white text-[#263238]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#263238]/85 leading-relaxed mb-6">
              {activePhotoModal.caption}
            </p>

            <div className="bg-white/80 rounded-2xl p-4 border border-white space-y-2 text-xs font-tech mb-6">
              <div className="flex justify-between">
                <span className="text-[#263238]/60">Lighting Profile:</span>
                <span className="font-bold text-[#263238]">{activePhotoModal.lighting}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#263238]/60">Decibel Level:</span>
                <span className="font-bold text-[#263238]">{activePhotoModal.soundLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#263238]/60">Operating Hours:</span>
                <span className="font-bold text-[#8FB4AC]">08:00 AM – 11:00 PM Daily</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActivePhotoModal(null)}
                className="px-6 py-2.5 rounded-xl bg-[#8FB4AC] text-[#263238] text-xs font-bold"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
