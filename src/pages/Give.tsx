import { Heart, CreditCard, Landmark, Smartphone } from "lucide-react";

export default function Give() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Main Giving Form Panel (Visual Mock) */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
             <div className="flex justify-center mb-8">
               <div className="bg-red-50 p-4 rounded-full">
                 <Heart className="w-10 h-10 text-red-500 fill-red-500/20" />
               </div>
             </div>
             <h2 className="text-3xl font-serif font-bold text-center text-church-blue mb-8">Give Online</h2>
             
             <div className="grid grid-cols-3 gap-4 mb-6">
               {['$50', '$100', '$250'].map(amount => (
                 <button key={amount} className="py-3 rounded-xl border-2 border-gray-100 text-lg font-bold text-gray-700 hover:border-church-gold hover:text-church-gold transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-church-gold">
                   {amount}
                 </button>
               ))}
             </div>
             
             <div className="relative mb-8">
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <span className="text-gray-500 sm:text-xl font-bold">$</span>
               </div>
               <input 
                 type="number" 
                 placeholder="Custom Amount"
                 className="block w-full pl-10 pr-12 py-4 border-2 border-gray-200 rounded-xl text-xl font-bold text-gray-900 focus:border-church-gold focus:ring-0 outline-none transition-colors"
               />
               <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                 <span className="text-gray-400 font-medium">USD</span>
               </div>
             </div>

             <div className="flex gap-4 mb-8 bg-gray-50 p-2 rounded-xl">
               <button className="flex-1 py-2 bg-white rounded-lg shadow-sm font-semibold text-gray-900 border border-gray-200">Give Once</button>
               <button className="flex-1 py-2 text-gray-600 font-semibold hover:text-gray-900">Setup Recurring</button>
             </div>

             <button className="w-full bg-church-gold text-white font-bold py-4 rounded-xl text-lg hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/30">
               Continue to Secure Payment
             </button>
             
             <p className="text-center text-sm text-gray-400 mt-6 flex items-center justify-center gap-2">
               <ShieldCheckIcon className="w-4 h-4" /> Secure, 256-bit encrypted transaction
             </p>
          </div>

          {/* Info Side */}
          <div className="lg:pt-8 space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-church-blue mb-4">Other Ways to Give</h2>
              <p className="text-gray-600 text-lg">We offer several secure options for you to partner with us financially.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl h-fit">
                  <Smartphone className="w-8 h-8 text-church-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Text to Give</h3>
                  <p className="text-gray-600 mt-2">Simply text the amount you wish to give (e.g., "$50") to <strong className="text-gray-900 font-mono">84321</strong>. It's fast, secure, and easy to set up.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-amber-50 p-4 rounded-2xl h-fit">
                  <Landmark className="w-8 h-8 text-church-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">By Mail or In Person</h3>
                  <p className="text-gray-600 mt-2">You can drop your giving in the secure boxes located at the back of the auditorium, or mail a check made payable to Grace City Church to our secure PO Box.</p>
                </div>
              </div>

            </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-church-gold"></div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Financial Transparency</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are committed to financial integrity. Our finances are audited annually by an independent accounting firm, and financial statements are available to members upon request. Your generosity fuels our local outreach programs, global missions, and church operations. Thank you for your faithful support.
                </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
