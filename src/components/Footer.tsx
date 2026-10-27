import React, { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Heart, Check, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { MaisonLogo } from './MaisonLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 bg-[#263238] text-white/90 relative z-10 border-t border-white/10 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column with Bespoke Logo Lockup */}
          <div className="lg:col-span-5 space-y-4">
            <MaisonLogo badgeSize={42} inverted />
            <p className="font-sans-body text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm pt-1">
              Araku Coffee is 100% certified organic, single-origin Arabica cultivated through #Arakunomics by tribal farmers across the Eastern Ghats. Poured with precision at our Bandra World Flagship in Mumbai.
            </p>

            {/* Official Contact Badges */}
            <div className="space-y-2 pt-2 text-xs font-tech text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8FB4AC] shrink-0" />
                <span>968, 12th Rd, Off Linking Rd, Bandra West, Mumbai 400050</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8FB4AC] shrink-0" />
                <span>Monday – Sunday: 08:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8FB4AC] shrink-0" />
                <span>Booking: +91-99492-11173 / +91-73372-05222</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8FB4AC] shrink-0" />
                <a href="mailto:restaurant@arakuoriginals.com" className="hover:text-white underline">
                  restaurant@arakuoriginals.com
                </a>
              </div>
            </div>

            {/* Social Media Links: Instagram & Facebook */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com/arakucoffeein"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#8FB4AC] hover:text-[#263238] text-white flex items-center justify-center border border-white/15 transition-all shadow-xs hover:scale-105 btn-tactile"
                aria-label="Follow Araku Coffee on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/arakucoffee"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#8FB4AC] hover:text-[#263238] text-white flex items-center justify-center border border-white/15 transition-all shadow-xs hover:scale-105 btn-tactile"
                aria-label="Follow Araku Coffee on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-tech font-bold text-[#8FB4AC]">
              Bandra Flagship
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans-body">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Signature &amp; Micro Climate Brews
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Garlic Thecha Ciabatta &amp; Plates
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Araku Moka Pot &amp; Retail Gear
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  #Arakunomics &amp; 3M Tribal Farmers
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-white transition-colors">
                  Table Reservations &amp; Modbar
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  12th Road Bandra West Location
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Box */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-tech font-bold text-[#8FB4AC]">
              The Araku Journal
            </h4>
            <p className="font-editorial italic text-xs text-white/70 leading-relaxed">
              Subscribe for harvest release dispatches, seasonal cupping labs in Bandra, and biodynamic agroforestry stories from the valley.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8FB4AC]"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-tactile px-5 py-2.5 rounded-2xl bg-[#8FB4AC] hover:bg-[#7fa79f] text-[#263238] text-xs font-headline font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-[#8FB4AC] font-semibold block animate-in fade-in">
                  ✓ Thank you for subscribing to Araku Coffee.
                </span>
              )}
            </form>

            <div className="pt-2 text-[11px] font-tech text-white/50 space-y-1">
              <p>Helpline: +91-90003-94000</p>
              <p>Email: restaurant@arakuoriginals.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-tech">
          <div>
            © {new Date().getFullYear()} ARAKU COFFEE. All rights reserved. 968, 12th Road, off Linking Road, Bandra West, Mumbai 400050.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/70">
              Cultivated with <Heart className="w-3.5 h-3.5 text-[#8FB4AC] fill-[#8FB4AC]" /> by 3M+ Tribal Farmers
            </span>
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#8FB4AC] hover:text-[#263238] text-white border border-white/15 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll to top of page"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
