import { useState, FormEvent } from 'react';
import { SALON_SERVICES, STYLISTS } from '../data/salonData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Check, 
  ArrowRight
} from 'lucide-react';

interface BookingSectionProps {
  selectedServiceId: string;
  selectedStylistId: string;
  onServiceChange: (serviceId: string) => void;
  onStylistChange: (stylistId: string) => void;
}

export function BookingSection({
  selectedServiceId,
  selectedStylistId,
  onServiceChange,
  onStylistChange
}: BookingSectionProps) {
  // Available dates: next 7 days
  const today = new Date();
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return {
      iso: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      isToday: i === 0
    };
  });

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:00 PM'
  ];

  const [date, setDate] = useState(availableDates[0].iso);
  const [timeSlot, setTimeSlot] = useState(timeSlots[2]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('+971 5');
  const [clientEmail, setClientEmail] = useState('');
  const [vipSuite, setVipSuite] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const currentService = SALON_SERVICES.find(s => s.id === selectedServiceId) || SALON_SERVICES[1];
  const currentStylist = STYLISTS.find(s => s.id === selectedStylistId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const refCode = `ECL-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const getWhatsAppBookingMessage = () => {
    const dateFormatted = availableDates.find(d => d.iso === date)?.dayName + ', ' + availableDates.find(d => d.iso === date)?.dayNum + ' ' + availableDates.find(d => d.iso === date)?.month;
    const stylistName = currentStylist ? currentStylist.name : 'First Available Master Stylist';
    const text = `Hello Éclat Hair Lounge Dubai! I'd like to confirm my appointment:
• Reference: ${bookingRef || 'NEW-BOOKING'}
• Service: ${currentService.name} (AED ${currentService.priceAED})
• Stylist: ${stylistName}
• Date & Time: ${dateFormatted} at ${timeSlot}
• Client: ${clientName || 'Guest'} (${clientPhone})
${vipSuite ? '• VIP Private Suite: Requested' : ''}
${notes ? `• Notes: ${notes}` : ''}`;

    return encodeURIComponent(text);
  };

  return (
    <section id="booking" className="py-20 bg-[#171512] text-[#EFEBE1] border-b border-[#2C2720]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CBAE66] font-bold block">
            Reserve Your Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white">
            Schedule an Appointment
          </h2>
          <p className="text-sm text-[#A89D8B]">
            Select your service, choose your preferred master artist, and secure your chair in Downtown Dubai with zero booking deposit required.
          </p>
        </div>

        {isSubmitted ? (
          /* Booking Confirmation State */
          <div className="max-w-2xl mx-auto bg-[#221E19] border border-[#433A2D] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 bg-[#B7953E]/20 text-[#DECA95] rounded-full flex items-center justify-center mx-auto border border-[#DECA95]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#CBAE66] font-semibold">
                Appointment Requested Successfully
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs sm:text-sm text-[#BDB2A0]">
                Reference ID: <span className="font-mono text-[#DECA95] font-bold text-base">{bookingRef}</span>
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#191714] rounded-2xl p-6 text-left border border-[#362E23] space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#2A241C]">
                <span className="text-[#8E8373]">Service:</span>
                <span className="text-white font-medium">{currentService.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A241C]">
                <span className="text-[#8E8373]">Artist:</span>
                <span className="text-white font-medium">{currentStylist ? currentStylist.name : 'First Available Master Stylist'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A241C]">
                <span className="text-[#8E8373]">Date & Time:</span>
                <span className="text-white font-medium">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A241C]">
                <span className="text-[#8E8373]">Client:</span>
                <span className="text-white font-medium">{clientName} ({clientPhone})</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8E8373]">Total Rate:</span>
                <span className="text-[#DECA95] font-bold text-base font-serif">AED {currentService.priceAED.toLocaleString()}</span>
              </div>
            </div>

            {/* WhatsApp Direct Confirmation Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/971501234567?text=${getWhatsAppBookingMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-bold transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-semibold border border-[#483F31] hover:border-[#DECA95] text-[#D8CFBC] transition-all cursor-pointer"
              >
                Book Another Service
              </button>
            </div>

            <p className="text-[11px] text-[#8C806F]">
              A salon concierge will verify and send your valet pass via SMS / WhatsApp within 15 minutes.
            </p>
          </div>
        ) : (
          /* Active Booking Flow */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Steps Panel */}
            <div className="lg:col-span-8 bg-[#201C18] border border-[#352F25] rounded-3xl p-6 sm:p-8 space-y-8">
              
              {/* Step 1: Select Service */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#CBAE66] font-bold">
                  <span className="w-5 h-5 rounded-full bg-[#383126] text-[#DECA95] flex items-center justify-center text-[10px]">1</span>
                  <span>Choose Service</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SALON_SERVICES.map(s => (
                    <div
                      key={s.id}
                      onClick={() => onServiceChange(s.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedServiceId === s.id
                          ? 'bg-[#2E2820] border-[#DECA95] shadow-sm'
                          : 'bg-[#191714] border-[#312B22] hover:border-[#4B4234]'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-medium text-white">{s.name}</h4>
                          <span className="text-xs font-semibold text-[#DECA95] font-serif">
                            AED {s.priceAED}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9A8F7E] line-clamp-2">{s.description}</p>
                      </div>
                      <div className="mt-3 flex items-center text-[11px] text-[#786E5F] space-x-1">
                        <Clock className="w-3 h-3 text-[#CBAE66]" />
                        <span>{s.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Stylist */}
              <div className="space-y-4 pt-4 border-t border-[#312B22]">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#CBAE66] font-bold">
                  <span className="w-5 h-5 rounded-full bg-[#383126] text-[#DECA95] flex items-center justify-center text-[10px]">2</span>
                  <span>Select Master Stylist</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {/* Any Stylist Option */}
                  <div
                    onClick={() => onStylistChange('')}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                      selectedStylistId === ''
                        ? 'bg-[#2E2820] border-[#DECA95]'
                        : 'bg-[#191714] border-[#312B22] hover:border-[#4B4234]'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#312B22] flex items-center justify-center text-[#DECA95] mb-2">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-white block">Any Master Artist</span>
                    <span className="text-[10px] text-[#8C806F]">Earliest Available</span>
                  </div>

                  {/* Individual Stylists */}
                  {STYLISTS.map(stylist => (
                    <div
                      key={stylist.id}
                      onClick={() => onStylistChange(stylist.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                        selectedStylistId === stylist.id
                          ? 'bg-[#2E2820] border-[#DECA95]'
                          : 'bg-[#191714] border-[#312B22] hover:border-[#4B4234]'
                      }`}
                    >
                      <img
                        src={stylist.avatar}
                        alt={stylist.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover mb-2 border border-[#483E30]"
                      />
                      <span className="text-xs font-medium text-white block">{stylist.name}</span>
                      <span className="text-[10px] text-[#CBAE66]">{stylist.origin.split('/')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Time Slot */}
              <div className="space-y-4 pt-4 border-t border-[#312B22]">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#CBAE66] font-bold">
                  <span className="w-5 h-5 rounded-full bg-[#383126] text-[#DECA95] flex items-center justify-center text-[10px]">3</span>
                  <span>Date & Preferred Time</span>
                </div>

                {/* Day selector */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {availableDates.map(d => (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => setDate(d.iso)}
                      className={`flex-1 min-w-[70px] py-3 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                        date === d.iso
                          ? 'bg-[#DECA95] text-[#191714] border-[#DECA95] font-bold'
                          : 'bg-[#191714] text-[#D8CFBC] border-[#312B22] hover:border-[#4B4234]'
                      }`}
                    >
                      <span className="text-[10px] uppercase block tracking-wider">{d.dayName}</span>
                      <span className="text-lg font-serif block">{d.dayNum}</span>
                      <span className="text-[9px] block opacity-80">{d.month}</span>
                    </button>
                  ))}
                </div>

                {/* Time slot pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setTimeSlot(time)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        timeSlot === time
                          ? 'bg-[#2E2820] text-[#DECA95] border-[#DECA95]'
                          : 'bg-[#191714] text-[#B5AAA0] border-[#312B22] hover:border-[#4B4234]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Details & Special Preferences */}
              <div className="space-y-4 pt-4 border-t border-[#312B22]">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#CBAE66] font-bold">
                  <span className="w-5 h-5 rounded-full bg-[#383126] text-[#DECA95] flex items-center justify-center text-[10px]">4</span>
                  <span>Your Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#A89D8B] block mb-1.5 font-medium">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#786E5F] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        placeholder="e.g. Sara Al Maktoum"
                        className="w-full bg-[#191714] border border-[#352F25] focus:border-[#DECA95] text-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#A89D8B] block mb-1.5 font-medium">UAE WhatsApp Mobile *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#786E5F] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={e => setClientPhone(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#191714] border border-[#352F25] focus:border-[#DECA95] text-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#A89D8B] block mb-1.5 font-medium">Email Address (for calendar invite)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#786E5F] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={e => setClientEmail(e.target.value)}
                      placeholder="client@dubai.ae"
                      className="w-full bg-[#191714] border border-[#352F25] focus:border-[#DECA95] text-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* VIP Suite Checkbox */}
                <div className="bg-[#191714] border border-[#352F25] rounded-xl p-4 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="vip-suite-toggle"
                    checked={vipSuite}
                    onChange={e => setVipSuite(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#B7953E] focus:ring-0 bg-[#25201A] border-[#483F31]"
                  />
                  <label htmlFor="vip-suite-toggle" className="text-xs cursor-pointer">
                    <span className="font-semibold text-white block">Request Private Ladies VIP Suite</span>
                    <span className="text-[#8E8373] text-[11px]">
                      Secluded private suite with separate entrance for veiled ladies or confidential styling.
                    </span>
                  </label>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-xs text-[#A89D8B] block mb-1.5 font-medium">Hair Notes or Special Requests (Optional)</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="e.g. Previous color history, thick texture, specific beverage preference..."
                    className="w-full bg-[#191714] border border-[#352F25] focus:border-[#DECA95] text-white p-3 rounded-xl text-xs sm:text-sm outline-none transition-all resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Right Summary & Instant Submit Sticky Panel */}
            <div className="lg:col-span-4 bg-[#201C18] border border-[#3E3528] rounded-3xl p-6 space-y-6 lg:sticky lg:top-28">
              <h3 className="text-lg font-serif font-medium text-white pb-3 border-b border-[#312B22]">
                Booking Summary
              </h3>

              <div className="space-y-4 text-xs">
                {/* Service */}
                <div>
                  <span className="text-[#8E8373] block text-[10px] uppercase tracking-wider">Service</span>
                  <span className="font-semibold text-white text-sm block mt-0.5">{currentService.name}</span>
                  <span className="text-[#DECA95] font-serif font-bold text-lg block mt-0.5">
                    AED {currentService.priceAED.toLocaleString()}
                  </span>
                </div>

                {/* Stylist */}
                <div>
                  <span className="text-[#8E8373] block text-[10px] uppercase tracking-wider">Master Stylist</span>
                  <span className="font-medium text-[#D8CFBC] block mt-0.5">
                    {currentStylist ? currentStylist.name : 'First Available Master Artist'}
                  </span>
                </div>

                {/* Date & Time */}
                <div>
                  <span className="text-[#8E8373] block text-[10px] uppercase tracking-wider">Date & Time</span>
                  <span className="font-medium text-[#D8CFBC] block mt-0.5">
                    {date} at {timeSlot}
                  </span>
                </div>

                {/* Inclusions Recap */}
                <div className="pt-3 border-t border-[#312B22] space-y-1.5 text-[#A89D8B] text-[11px]">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#DECA95] shrink-0" />
                    <span>Complimentary Valet Parking P1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#DECA95] shrink-0" />
                    <span>Reverse-Osmosis Soft Water Wash</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#DECA95] shrink-0" />
                    <span>Ceremonial Matcha & Dates Lounge</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                id="submit-booking-button"
                className="w-full bg-[#DECA95] hover:bg-[#EBDDB7] text-[#191714] font-bold text-xs uppercase tracking-[0.18em] py-4 rounded-full transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center space-y-1">
                <span className="text-[11px] text-[#7A6F5E] block">
                  No payment required now. Pay securely at the salon.
                </span>
                <span className="text-[10px] text-[#7A6F5E] block">
                  Cancellations accepted with 4 hours advance notice.
                </span>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
