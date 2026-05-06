import { Landmark, Smartphone, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Give() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="bg-church-bg pt-20">
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80" alt="Church Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-church-blue/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Generosity Changes Lives</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Your giving helps us advance the mission of bringing people into a life-changing relationship with Jesus locally and globally.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-church-blue mb-16">Ways to Give</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Mobile Money Panel */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Smartphone className="w-48 h-48" />
             </div>
             <div className="flex items-center gap-4 mb-8">
               <div className="bg-green-50 p-4 rounded-2xl shrink-0 z-10 relative">
                 <Smartphone className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-2xl font-serif font-bold text-church-blue z-10 relative">Mobile Money</h3>
             </div>
             
             <p className="text-gray-600 mb-8 z-10 relative">
               You can send your tithes and offerings safely and instantly using Ghana Mobile Money.
             </p>

             <div className="space-y-6 z-10 relative">
               {/* MTN MoMo */}
               <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-bold text-gray-900">MTN Mobile Money</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 mb-3">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">MoMo Number</p>
                      <p className="font-mono text-xl text-church-blue font-bold tracking-tight">0542 297 717</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard("0542297717")}
                      className="p-3 text-gray-400 hover:text-church-gold transition-colors hover:bg-amber-50 rounded-lg"
                      title="Copy Number"
                    >
                      {copiedText === "0542297717" ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                    </button>
                  </div>
                  <div className="px-1 text-sm bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                    <span className="text-gray-500 mr-2">Account Name:</span>
                    <span className="font-bold text-gray-900">Jesus The Great Powerful Way Ministry</span>
                  </div>
               </div>
               
               {/* Telecel / AT */}
               <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-bold text-gray-900">Telecel Cash / AT Money</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 mb-3">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Mobile Number</p>
                      <p className="font-mono text-xl text-church-blue font-bold tracking-tight">0542 297 717</p>
                    </div>
                    <button 
                      onClick={() => copyToClipboard("0542297717")}
                      className="p-3 text-gray-400 hover:text-church-gold transition-colors hover:bg-amber-50 rounded-lg"
                      title="Copy Number"
                    >
                      {copiedText === "0542297717" ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                    </button>
                  </div>
                   <div className="px-1 text-sm bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                    <span className="text-gray-500 mr-2">Account Name:</span>
                    <span className="font-bold text-gray-900">Jesus The Great Powerful Way Ministry</span>
                  </div>
               </div>
             </div>
          </div>

          {/* Bank Transfer Panel */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Landmark className="w-48 h-48" />
             </div>
             <div className="flex items-center gap-4 mb-8">
               <div className="bg-amber-50 p-4 rounded-2xl shrink-0 z-10 relative">
                 <Landmark className="w-8 h-8 text-church-gold" />
               </div>
               <h3 className="text-2xl font-serif font-bold text-church-blue z-10 relative">Bank Transfer</h3>
             </div>
             
             <p className="text-gray-600 mb-8 z-10 relative">
               Make a direct deposit or transfer directly into the church's bank account.
             </p>

             <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-2xl z-10 relative">
                <ul className="space-y-6">
                  <li className="border-b border-gray-200 pb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Account Name</p>
                    <p className="text-lg font-bold text-gray-900">Jesus The Great Powerful Way Ministry</p>
                  </li>
                  <li className="border-b border-gray-200 pb-4 flex justify-between items-center group">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Account Number (GHS)</p>
                        <p className="text-xl font-mono font-bold text-church-blue">1100 1234 5678</p>
                    </div>
                     <button 
                      onClick={() => copyToClipboard("110012345678")}
                      className="p-3 text-gray-400 hover:text-church-gold transition-colors hover:bg-amber-50 rounded-lg"
                      title="Copy Account Number"
                    >
                      {copiedText === "110012345678" ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                    </button>
                  </li>
                  <li className="border-b border-gray-200 pb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Bank Name</p>
                    <p className="text-lg font-bold text-gray-900">GCB Bank PLC (Ghana)</p>
                  </li>
                  <li>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Branch</p>
                    <p className="text-lg font-bold text-gray-900">Sofoline, Kumasi</p>
                  </li>
                </ul>
             </div>

             <div className="bg-church-bg p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 relative overflow-hidden z-10">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-church-gold"></div>
                <h4 className="font-bold text-gray-900 mb-2">Financial Transparency</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your generosity fuels our local outreach programs, missions, and church operations. Thank you for your faithful support.
                </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
