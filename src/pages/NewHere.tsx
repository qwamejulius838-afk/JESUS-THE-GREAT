import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Coffee, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function NewHere() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-church-bg pt-20">
      {/* Header */}
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1920&q=80" alt="Church Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-church-blue/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Welcome to church </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            We know visiting a new church can be overwhelming. We want to make your first experience at Jesus the Great a great one.
          </p>
        </div>
      </section>

      {/* Plan Your Visit Form Split */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-church-blue mb-8">What to Expect</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Clock className="w-8 h-8 text-church-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Services at 8:00 AM & 12:00 PM</h3>
                  <p className="text-gray-600 mt-2">Services last about 75 minutes. We start with engaging, modern worship followed by a Jesus-centered message from our pastor.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Coffee className="w-8 h-8 text-church-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Come as You Are</h3>
                  <p className="text-gray-600 mt-2">There's no dress code here. Whether you prefer jeans and a t-shirt or your Sunday best, you'll fit right in. Grab a free coffee in the lobby!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Users className="w-8 h-8 text-church-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Grace Kids</h3>
                  <p className="text-gray-600 mt-2">Kids (infant through 5th grade) experience safe, age-appropriate environments where they learn about Jesus in a creative and relevant way.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                   <ShieldCheck className="w-8 h-8 text-church-gold" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-gray-900">Secure & Safe</h3>
                   <p className="text-gray-600 mt-2">All our kids workers are background-checked. We use a secure check-in system to ensure your child's safety is our top priority.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-church-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900">Location & Parking</h4>
                <p className="text-gray-600 mt-1 text-sm">Sofoline Alignment, Kumasi. Turn on your hazards when you enter the lot, and our parking team will direct you to VIP guest parking!</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-50 relative">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We can't wait to meet you!</h3>
                <p className="text-gray-600 mb-8 max-w-sm">
                  We've received your information. A member of our team will reach out shortly to help plan your visit.
                </p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="text-church-blue font-semibold hover:text-church-gold transition-colors"
                >
                  Plan another visit
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-church-blue mb-2">Plan Your Visit</h2>
                <p className="text-gray-600 mb-8 text-sm">Fill out the brief form below and we'll have a host waiting to show you around, help you register kids, and save you a seat.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input required type="text" id="firstName" className="w-full rounded-lg border-gray-300 bg-gray-50 border px-4 py-2.5 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input required type="text" id="lastName" className="w-full rounded-lg border-gray-300 bg-gray-50 border px-4 py-2.5 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input required type="email" id="email" className="w-full rounded-lg border-gray-300 bg-gray-50 border px-4 py-2.5 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                    <input type="tel" id="phone" className="w-full rounded-lg border-gray-300 bg-gray-50 border px-4 py-2.5 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Which service will you attend?</label>
                    <select required id="service" className="w-full rounded-lg border-gray-300 bg-gray-50 border px-4 py-2.5 focus:border-church-blue focus:ring-church-blue outline-none transition-all">
                      <option value="">Select a service</option>
                      <option value="8am">Sunday at 8:00 AM</option>
                      <option value="12pm">Sunday at 12:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 mt-4">
                      <input type="checkbox" className="mt-1 rounded border-gray-300 text-church-blue focus:ring-church-blue" />
                      <span className="text-sm text-gray-600">I will be bringing children to Grace Kids.</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full mt-4 bg-church-gold text-white font-bold py-3.5 px-4 rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-70 flex justify-center"
                  >
                    {formStatus === "submitting" ? (
                       <span className="animate-pulse">Sending...</span>
                    ) : "Schedule My Visit"}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">Your information is secure and will never be shared.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
