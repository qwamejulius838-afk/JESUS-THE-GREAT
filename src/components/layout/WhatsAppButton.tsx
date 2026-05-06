import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-50">
      <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 text-sm font-semibold flex items-center gap-3">
        <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
        How can we pray for you?
      </div>
      <a
        href="https://wa.me/+233542297717"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
