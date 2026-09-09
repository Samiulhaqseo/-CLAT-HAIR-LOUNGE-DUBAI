import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/971501234567?text=Hello%20Eclat%20Hair%20Lounge%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Éclat Dubai Concierge on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wider uppercase pl-0 group-hover:pl-2">
          Chat with Concierge
        </span>
      </a>
    </div>
  );
}
