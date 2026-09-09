import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Master Stylists', href: '#stylists' },
    { name: 'Location & Hours', href: '#location' }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-bar for Dubai practical details */}
      <div className="bg-[#191714] text-[#D8CFBC] text-xs border-b border-[#2C2720] px-4 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#CBAE66]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Boulevard Point, Downtown Dubai (Opposite Dubai Mall)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A59D8F]" />
              <span>Daily 10:00 AM – 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="text-[#A59D8F]">Complimentary Valet at Entrance P1</span>
            <a 
              href="tel:+97143982200" 
              className="flex items-center space-x-1.5 hover:text-[#CBAE66] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#CBAE66]" />
              <span>+971 4 398 2200</span>
            </a>
            <a
              href="https://wa.me/971501234567?text=Hello%20Eclat%20Hair%20Lounge%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#25D366] hover:underline font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        id="main-nav"
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFC5]/60 py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#EBE4D5] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col text-left group">
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.2em] font-medium text-[#1C1A17] uppercase group-hover:text-[#B7953E] transition-colors">
                ÉCLAT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7953E]"></span>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#8C7A5E] font-sans -mt-0.5">
              HAIR LOUNGE • DUBAI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide uppercase text-[#3C3730]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#B7953E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B7953E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href="https://wa.me/971501234567?text=Hello%20Eclat%20Hair%20Lounge%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20hair%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-full border border-[#D5C9B3] text-[#3A332A] hover:bg-[#F2ECE1] text-xs uppercase tracking-wider font-semibold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-button"
              onClick={onBookClick}
              className="inline-flex items-center space-x-2 bg-[#1C1A17] hover:bg-[#B7953E] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DECA95]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden bg-[#1C1A17] text-white text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1A17] hover:text-[#B7953E] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#E6DFC5] pb-3 space-y-3 bg-[#FAF8F5]">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-2 text-sm font-medium uppercase tracking-wider text-[#2A2621] hover:text-[#B7953E] hover:bg-[#F3EDE3] rounded"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E6DFC5]/70 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center bg-[#1C1A17] text-white py-3 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#DECA95]" />
                <span>Reserve Appointment</span>
              </button>

              <a
                href="https://wa.me/971501234567?text=Hello%20Eclat%20Dubai%2C%20I%20would%20like%20to%20book."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-[#D5C9B3] text-[#332D24] py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp (+971 50 123 4567)</span>
              </a>

              <div className="text-center pt-2 text-[11px] text-[#7A6E5D] flex items-center justify-center space-x-1">
                <Sparkles className="w-3 h-3 text-[#B7953E]" />
                <span>Boulevard Point, Downtown Dubai • Valet P1</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
