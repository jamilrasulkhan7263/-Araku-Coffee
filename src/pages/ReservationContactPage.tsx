import React, { useState, useEffect } from 'react';
import { ReservationData } from '../types/cafe';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Users,
  MapPin,
  ExternalLink,
  Navigation,
  CheckCircle2,
  Coffee,
  MessageCircle,
  Mail,
  Sparkles,
  Wifi,
  Car,
  Dog,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReservationContactPageProps {
  onReservationConfirmed: (res: ReservationData) => void;
  onExploreMenu: () => void;
}

const TIME_SLOTS = [
  '08:00 AM',
  '09:30 AM',
  '11:00 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM',
  '08:00 PM',
  '09:30 PM',
];

export const ReservationContactPage: React.FC<ReservationContactPageProps> = ({
  onReservationConfirmed,
  onExploreMenu,
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: today,
    time: '11:00 AM',
    guests: 2,
    seatingPreference: 'Modbar Sensory Counter',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    data: ReservationData;
    bookingCode: string;
  } | null>(null);

  // Dynamic Open/Closed Status for Bandra Flagship (08:00 AM - 11:00 PM Monday-Sunday)
  const [storeStatus, setStoreStatus] = useState<{
    isOpen: boolean;
    statusText: string;
    subText: string;
    currentTimeStr: string;
  }>({
    isOpen: false,
    statusText: 'Checking...',
    subText: '',
    currentTimeStr: '',
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 8 * 60; // 08:00 AM (480 mins)
      const closeMinutes = 23 * 60; // 11:00 PM (1380 mins)

      const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

      const timeFormatter = new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });

      const currentTimeStr = timeFormatter.format(now);

      if (isOpen) {
        setStoreStatus({
          isOpen: true,
          statusText: 'Open Now',
          subText: 'Closes at 11:00 PM tonight',
          currentTimeStr,
        });
      } else {
        const opensNext =
          currentMinutes < openMinutes
            ? 'Opens today at 08:00 AM'
            : 'Opens tomorrow at 08:00 AM';
        setStoreStatus({
          isOpen: false,
          statusText: 'Closed Now',
          subText: opensNext,
          currentTimeStr,
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `AK-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setConfirmedBooking({
        data: { ...formData },
        bookingCode: code,
      });

      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#8FB4AC', '#D7CCC8', '#263238'],
      });

      onReservationConfirmed(formData);
    }, 850);
  };

  const handleShareWhatsApp = () => {
    if (!confirmedBooking) return;
    const { data, bookingCode } = confirmedBooking;
    const text = encodeURIComponent(
      `Hello Araku Coffee Bandra! I have a table reservation request:\n\n*Booking Code:* ${bookingCode}\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Guests:* ${data.guests} person(s)\n*Date:* ${data.date}\n*Time:* ${data.time}\n*Preferred Seating:* ${data.seatingPreference}\n${
        data.specialRequests ? `*Special Request:* ${data.specialRequests}\n` : ''
      }\nLooking forward to enjoying your single-origin harvests at the Bandra Flagship!`
    );
    // WhatsApp direct booking line
    window.open(`https://wa.me/919949211173?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#E2E3E5] text-[#263238] pb-24 animate-in fade-in duration-300">
      {/* 1. Page Header & Introduction */}
      <section className="pt-12 pb-14 lg:pt-16 lg:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Zero-Pill Discipline Header Kicker */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC] animate-pulse" />
              <span className="text-[11px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/70">
                Reservation &amp; Concierge · Page 5 · Bandra World Flagship
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight mb-5 leading-[1.08] text-balance">
              Reserve a Table &amp; Contact Us
            </h1>

            <p className="font-editorial italic text-base sm:text-xl text-[#263238]/85 leading-relaxed max-w-2xl mx-auto">
              Whether you are planning a focused morning session at our oak tables, an afternoon cupping flight, or an evening gathering over small plates on the verandah, we hold a warm table for you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Container: Booking Form */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D7CCC8] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-white/90 shadow-[0_25px_60px_rgba(38,50,56,0.08)] relative overflow-hidden">
            {confirmedBooking ? (
              /* Success Voucher View */
              <div className="text-center py-6 max-w-md mx-auto animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#8FB4AC] text-[#263238] flex items-center justify-center mx-auto mb-5 shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <span className="text-[10px] font-tech font-bold uppercase tracking-[0.25em] text-[#263238]/70 block mb-1">
                  Table Secured Successfully
                </span>
                <h3 className="font-headline text-3xl font-black text-[#263238] mb-2 tracking-tight">
                  Welcome to Araku Bandra, {confirmedBooking.data.name}!
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#263238]/80 mb-6">
                  Your reservation request has been registered. You can route this directly to our Bandra Flagship WhatsApp concierge for immediate confirmation.
                </p>

                {/* Booking Voucher Summary */}
                <div className="bg-white/90 rounded-2xl p-6 border border-white text-left space-y-3 mb-6 shadow-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-[#263238]/10">
                    <span className="text-[11px] font-tech text-[#263238]/60 uppercase tracking-wider font-bold">
                      Reservation Voucher
                    </span>
                    <span className="font-tech font-bold text-base text-[#263238] bg-[#8FB4AC]/30 px-3 py-1 rounded-xl">
                      {confirmedBooking.bookingCode}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#263238]/60 block mb-0.5">Date &amp; Time</span>
                      <span className="font-headline font-bold text-[#263238]">
                        {confirmedBooking.data.date} at {confirmedBooking.data.time}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#263238]/60 block mb-0.5">Party Size</span>
                      <span className="font-bold text-[#263238]">
                        {confirmedBooking.data.guests} Guest(s)
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[#263238]/60 block mb-0.5">Seating Zone</span>
                      <span className="font-bold text-[#263238]">
                        {confirmedBooking.data.seatingPreference}
                      </span>
                    </div>
                    {confirmedBooking.data.specialRequests && (
                      <div className="col-span-2">
                        <span className="text-[#263238]/60 block mb-0.5">Special Note</span>
                        <span className="text-[#263238]/85 italic">
                          "{confirmedBooking.data.specialRequests}"
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleShareWhatsApp}
                    className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Send to Bandra WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    Reserve Another Table
                  </button>
                </div>
              </div>
            ) : (
              /* Modern Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#263238]/10 pb-4 mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#263238]">
                      Table Reservation Booking
                    </h3>
                    <p className="text-xs text-[#263238]/70 mt-0.5">
                      Complimentary table reservation with 15-minute grace period
                    </p>
                  </div>
                  <span className="text-[11px] font-tech font-bold uppercase tracking-wider text-[#8FB4AC] bg-white/70 px-3 py-1 rounded-full">
                    Direct Concierge Link
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#263238]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Apte"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-[#8FB4AC] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#263238]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 12345"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-[#8FB4AC] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                      Date of Visit *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#263238]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-[#8FB4AC] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Guest Count Dropdown */}
                  <div>
                    <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                      Party Size
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#263238]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-[#8FB4AC] transition-all shadow-2xs appearance-none cursor-pointer"
                      >
                        <option value={1}>1 Guest (Solitary Reading / Work)</option>
                        <option value={2}>2 Guests (Table for Two)</option>
                        <option value={3}>3 Guests (Small Group)</option>
                        <option value={4}>4 Guests (Standard Table)</option>
                        <option value={5}>5 Guests (Brunch Table)</option>
                        <option value={6}>6 Guests (Family Table)</option>
                        <option value={8}>8+ Guests (Executive Dining / Gathering)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Time Slot Selector */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Select Time Slot (Open 08:00 AM – 11:00 PM) *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          formData.time === slot
                            ? 'bg-[#263238] text-white shadow-xs font-bold'
                            : 'bg-white/80 text-[#263238] hover:bg-white border border-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating Preference Selector */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Preferred Seating Zone
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Modbar Sensory Counter',
                        desc: 'Front-row view of single-origin extractions & barista dialogue',
                      },
                      {
                        title: 'Oak Timber Salon',
                        desc: 'Acoustically quiet oak tables, AC comfort & dedicated power',
                      },
                      {
                        title: 'Bandra Verandah',
                        desc: 'Open-air tropical greenery, pet friendly sea breeze',
                      },
                    ].map((zone) => (
                      <button
                        key={zone.title}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            seatingPreference: zone.title as any,
                          })
                        }
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          formData.seatingPreference === zone.title
                            ? 'bg-[#8FB4AC] border-[#8FB4AC] text-[#263238] shadow-xs'
                            : 'bg-white/70 border-white text-[#263238]/80 hover:bg-white'
                        }`}
                      >
                        <span className="text-xs font-bold block mb-1">{zone.title}</span>
                        <span className="text-[11px] text-[#263238]/70 block leading-tight">
                          {zone.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests Text Area */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Special Requests &amp; Dietary Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Celebrating an anniversary, need quiet corner for laptop work, request oat milk, baby high chair..."
                    className="w-full p-4 rounded-2xl bg-white/80 border border-white text-xs sm:text-sm text-[#263238] placeholder:text-[#263238]/40 focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-[#8FB4AC] transition-all shadow-2xs"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#263238]/70 font-tech">
                    <p>Direct Helpline: +91-99492-11173 / +91-73372-05222</p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#263238] border-t-transparent rounded-full animate-spin" />
                        <span>Confirming Your Table...</span>
                      </>
                    ) : (
                      <>
                        <Coffee className="w-4 h-4" />
                        <span>Reserve Table at Bandra</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Location, Map & Operating Hours Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#D7CCC8] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8FB4AC]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#263238] font-tech">
                Bandra West Coordinates
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] mb-3">
              Location, Contact &amp; Hours
            </h2>
            <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed">
              Situated in Bandra West on 12th Road, off Linking Road. Free valet parking available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Embedded Google Maps Visualizer */}
            <div className="lg:col-span-7">
              <div className="bg-[#D7CCC8] rounded-3xl p-5 sm:p-6 border border-white/90 shadow-lg h-full flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between pb-3 px-1 border-b border-[#263238]/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8FB4AC]" />
                    <span className="text-xs font-tech font-bold uppercase tracking-wider text-[#263238]">
                      Bandra Coordinates: 19.0607° N, 72.8362° E
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Araku+Coffee+Bandra+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#263238] hover:text-[#8FB4AC] transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#D8DBDD] border border-white flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 opacity-45 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="arakuContactMapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#263238" strokeWidth="0.8" opacity="0.16" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#arakuContactMapGrid)" />
                      <line x1="0" y1="35%" x2="100%" y2="45%" stroke="#ffffff" strokeWidth="12" />
                      <line x1="28%" y1="0" x2="38%" y2="100%" stroke="#ffffff" strokeWidth="9" />
                      <line x1="62%" y1="0" x2="72%" y2="100%" stroke="#ffffff" strokeWidth="14" />
                      <line x1="0" y1="78%" x2="100%" y2="68%" stroke="#ffffff" strokeWidth="8" />

                      <rect x="40%" y="16%" width="24%" height="24%" rx="16" fill="#8FB4AC" opacity="0.35" />
                      <text x="43%" y="29%" fill="#263238" fontSize="10" opacity="0.7" fontWeight="bold">
                        12TH ROAD, BANDRA
                      </text>
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-[#8FB4AC] text-[#263238] flex items-center justify-center shadow-xl border-3 border-white transform hover:scale-110 transition-transform cursor-pointer">
                        <MapPin className="w-7 h-7 text-[#263238]" />
                      </div>
                      <div className="absolute -inset-2.5 rounded-full border-2 border-[#8FB4AC] animate-ping pointer-events-none" />
                    </div>

                    <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl text-center shadow-xl border border-white max-w-[250px]">
                      <span className="font-headline font-bold text-sm text-[#263238] block leading-tight">
                        ARAKU COFFEE — BANDRA
                      </span>
                      <span className="text-[10px] text-[#263238]/70 block font-tech mt-0.5">
                        968, 12th Road, off Linking Road
                      </span>
                      <span className="text-[10px] font-bold text-[#8FB4AC] block mt-1 uppercase">
                        ★ 4.9 Rating (1,200+ Reviews)
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href="https://maps.google.com/?q=Araku+Coffee+Bandra+West+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#263238] hover:bg-[#34444c] text-white text-xs font-bold flex items-center gap-2 shadow-lg transition-all duration-200"
                    >
                      <Navigation className="w-4 h-4 text-[#8FB4AC]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Physical Address, Contact Phone, Opening Hours Table & Live Badge */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-[#D7CCC8] rounded-3xl p-6 sm:p-8 border border-white/90 shadow-md">
                {/* Dynamic 'Open Now / Closed' Status Indicator Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-[#263238]/10 mb-6">
                  <div>
                    <span className="text-[10px] font-tech text-[#263238]/60 uppercase tracking-widest block mb-1">
                      Bandra Store Status (Real-Time)
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          storeStatus.isOpen
                            ? 'bg-emerald-500/20 text-emerald-900 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-900 border border-amber-500/30'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            storeStatus.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
                          }`}
                        />
                        {storeStatus.statusText}
                      </span>
                      <span className="text-xs text-[#263238]/80 font-medium">
                        {storeStatus.subText}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-tech text-[#263238]/50 uppercase tracking-wider block">
                      IST Time
                    </span>
                    <span className="text-xs font-tech font-bold text-[#263238]">
                      {storeStatus.currentTimeStr}
                    </span>
                  </div>
                </div>

                {/* Full Official Physical Address & Exact Phone Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/80 text-[#263238] shrink-0 border border-white mt-0.5">
                      <MapPin className="w-4 h-4 text-[#8FB4AC]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech mb-0.5">
                        Flagship Address
                      </h4>
                      <p className="text-sm text-[#263238]/85 leading-snug">
                        Araku World Flagship, 968, 12th Road, off Linking Road, Bandra West, Mumbai, Maharashtra 400050
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/80 text-[#263238] shrink-0 border border-white mt-0.5">
                      <Phone className="w-4 h-4 text-[#8FB4AC]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech mb-0.5">
                        Direct Booking &amp; Reservation Numbers
                      </h4>
                      <p className="text-sm font-tech text-[#263238]/85">
                        <a href="tel:+919949211173" className="hover:text-[#8FB4AC] font-bold">+91-99492-11173</a>
                        <span className="mx-2 text-[#263238]/40">/</span>
                        <a href="tel:+917337205222" className="hover:text-[#8FB4AC] font-bold">+91-73372-05222</a>
                      </p>
                      <p className="text-xs text-[#263238]/70 font-tech mt-1">
                        General Support Helpline: <a href="tel:+919000394000" className="font-bold hover:text-[#8FB4AC]">+91-90003-94000</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/80 text-[#263238] shrink-0 border border-white">
                      <Mail className="w-4 h-4 text-[#8FB4AC]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech mb-0.5">
                        Official Support Email
                      </h4>
                      <p className="text-sm font-tech text-[#263238]/85">
                        <a href="mailto:restaurant@arakuoriginals.com" className="hover:text-[#8FB4AC] underline">
                          restaurant@arakuoriginals.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Table (Monday to Sunday) */}
                <div className="pt-4 border-t border-[#263238]/10">
                  <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wider font-tech mb-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#8FB4AC]" />
                    <span>Operating Hours (Monday – Sunday)</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-[#263238]/5">
                      <span className="text-[#263238]/75">Monday to Sunday</span>
                      <span className="font-bold text-[#263238]">08:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#263238]/75">Modbar &amp; Culinary Kitchen</span>
                      <span className="font-bold text-[#8FB4AC]">Continuous Service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities Bar */}
              <div className="bg-white/70 p-4 rounded-2xl border border-white flex items-center justify-around text-xs text-[#263238]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Wifi className="w-4 h-4 text-[#8FB4AC]" />
                  <span>Gigabit Wi-Fi</span>
                </div>
                <div className="w-px h-4 bg-[#263238]/10" />
                <div className="flex items-center gap-1.5 font-medium">
                  <Dog className="w-4 h-4 text-[#8FB4AC]" />
                  <span>Pet Verandah</span>
                </div>
                <div className="w-px h-4 bg-[#263238]/10" />
                <div className="flex items-center gap-1.5 font-medium">
                  <Car className="w-4 h-4 text-[#8FB4AC]" />
                  <span>Free Valet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
