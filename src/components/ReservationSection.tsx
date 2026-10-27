import React, { useState } from 'react';
import { ReservationData } from '../types/cafe';
import {
  Calendar,
  Clock,
  Users,
  User,
  Phone,
  Sparkles,
  CheckCircle,
  MessageCircle,
  Coffee,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReservationSectionProps {
  onReservationConfirmed: (reservation: ReservationData) => void;
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

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationConfirmed,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `AK-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setConfirmedBooking({
        data: { ...formData },
        bookingCode: code,
      });

      confetti({
        particleCount: 50,
        spread: 60,
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
      }\nLooking forward to experiencing your 100% organic brews at the Bandra Flagship!`
    );
    window.open(`https://wa.me/919949211173?text=${text}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4AC]" />
            <span className="text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-[#263238]/70">
              Bandra Table Concierge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] tracking-tight mb-4">
            Reserve Your Experience at{' '}
            <span className="font-editorial italic font-normal text-[#263238]/85">
              Araku Bandra
            </span>
          </h2>
          <p className="text-[#263238]/75 text-sm sm:text-base leading-relaxed font-normal">
            Direct table reservations for solitary morning reading, business rendezvous, or weekend brunch on the verandah.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-[#D7CCC8]/40 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-10 border border-white/90 shadow-bespoke relative overflow-hidden">
          {/* Confirmed State View */}
          {confirmedBooking ? (
            <div className="text-center py-8 max-w-md mx-auto animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#8FB4AC]/20 text-[#263238] flex items-center justify-center mx-auto mb-5 border border-[#8FB4AC]">
                <CheckCircle className="w-8 h-8 text-[#263238]" />
              </div>

              <span className="text-xs font-tech font-bold uppercase tracking-widest text-[#8FB4AC] block mb-1">
                Reservation Logged
              </span>
              <h3 className="font-headline text-3xl font-bold text-[#263238] mb-2">
                We'll See You Soon, {confirmedBooking.data.name}!
              </h3>
              <p className="text-sm text-[#263238]/75 mb-6">
                Your table request at Araku Coffee Bandra is pre-formatted. Tap below to confirm directly with our concierge via WhatsApp.
              </p>

              {/* Booking Voucher Summary */}
              <div className="bg-white/80 rounded-2xl p-5 border border-white text-left space-y-3 mb-6 shadow-sm">
                <div className="flex justify-between items-center pb-3 border-b border-[#263238]/10">
                  <span className="text-xs font-tech text-[#263238]/60 uppercase">Reservation Reference</span>
                  <span className="font-tech font-bold text-base text-[#263238] bg-[#D7CCC8]/40 px-2.5 py-0.5 rounded-lg">
                    {confirmedBooking.bookingCode}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#263238]/60 block mb-0.5">Date & Time</span>
                    <span className="font-semibold text-[#263238]">
                      {confirmedBooking.data.date} at {confirmedBooking.data.time}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#263238]/60 block mb-0.5">Party Size</span>
                    <span className="font-semibold text-[#263238]">
                      {confirmedBooking.data.guests} Guest(s)
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#263238]/60 block mb-0.5">Seating Area</span>
                    <span className="font-semibold text-[#263238]">
                      {confirmedBooking.data.seatingPreference}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleShareWhatsApp}
                  className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send to Bandra WhatsApp</span>
                </button>
                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#8FB4AC] text-[#263238] text-xs sm:text-sm font-bold hover:bg-[#7ea69d] transition-colors cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          ) : (
            /* Modern Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#263238]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Apte"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#263238]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 12345"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#263238]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 border border-white text-sm text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#8FB4AC] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Guest Selector */}
                <div>
                  <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: num })}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          formData.guests === num
                            ? 'bg-[#8FB4AC] text-[#263238] shadow-sm'
                            : 'bg-white/70 text-[#263238]/80 hover:bg-white border border-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: 8 })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        formData.guests >= 8
                          ? 'bg-[#8FB4AC] text-[#263238] shadow-sm'
                          : 'bg-white/70 text-[#263238]/80 hover:bg-white border border-white'
                      }`}
                    >
                      7+
                    </button>
                  </div>
                </div>
              </div>

              {/* Time Slots Selector */}
              <div>
                <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                  Select Seating Time Slot (Open 08:00 AM – 11:00 PM)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 rounded-xl text-xs font-medium transition-all ${
                        formData.time === slot
                          ? 'bg-[#263238] text-white shadow-sm font-bold'
                          : 'bg-white/70 text-[#263238] hover:bg-white border border-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-tech font-bold text-[#263238] uppercase tracking-wider mb-2">
                  Preferred Bandra Flagship Zone
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      zone: 'Modbar Sensory Counter',
                      desc: 'Eye-level interaction with baristas pulling single-origins',
                    },
                    {
                      zone: 'Oak Timber Salon',
                      desc: 'Tactile oak tables, AC comfort & quiet focus ambiance',
                    },
                    {
                      zone: 'Bandra Verandah',
                      desc: 'Lush tropical open-air patio, pet friendly breeze',
                    },
                  ].map((item) => (
                    <button
                      key={item.zone}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          seatingPreference: item.zone as any,
                        })
                      }
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        formData.seatingPreference === item.zone
                          ? 'bg-[#8FB4AC]/25 border-[#8FB4AC] text-[#263238] shadow-xs'
                          : 'bg-white/60 border-white text-[#263238]/80 hover:bg-white'
                      }`}
                    >
                      <span className="text-xs font-bold block mb-0.5">{item.zone}</span>
                      <span className="text-[11px] text-[#263238]/65 block leading-snug">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-tech text-[#263238]/70">
                  Concierge Hotline: +91-99492-11173 / +91-73372-05222
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#263238] border-t-transparent rounded-full animate-spin" />
                      <span>Confirming Table...</span>
                    </>
                  ) : (
                    <>
                      <Coffee className="w-4 h-4" />
                      <span>Confirm Table Reservation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
