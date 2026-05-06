import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-church-bg pt-20">
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Have a question, need prayer, or looking to connect? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative -mt-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Details side */}
          <div className="bg-church-blue p-10 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-church-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Main Campus</h3>
                    <p className="text-gray-300 mt-1">Sofoline Alignment<br />Kumasi, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-church-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-300 mt-1">(+233) 542297717</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Thu, 9am - 4pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-church-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-300 mt-1">qwamejulius838@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-church-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp</h3>
                    <p className="text-gray-300 mt-1">Need a quicker response? Chat with us.</p>
                     <a href="https://wa.me/233542297717" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm">
                       Chat on WhatsApp
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-serif font-bold text-church-blue mb-8">Send a Message</h2>
            
            {formStatus === "success" ? (
               <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 aspect-sm">
                    Thank you for reaching out. A member of our team will get back to you securely.
                  </p>
                   <button 
                    onClick={() => setFormStatus("idle")}
                    className="text-church-blue font-semibold hover:text-church-gold transition-colors"
                  >
                    Send another message
                  </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" id="name" className="w-full border-gray-300 rounded-lg bg-gray-50 border px-4 py-3 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required type="email" id="email" className="w-full border-gray-300 rounded-lg bg-gray-50 border px-4 py-3 focus:border-church-blue focus:ring-church-blue outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select required id="subject" className="w-full border-gray-300 rounded-lg bg-gray-50 border px-4 py-3 focus:border-church-blue focus:ring-church-blue outline-none transition-all">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="next-steps">Next Steps / Baptism</option>
                    <option value="care">Pastoral Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea required id="message" rows={5} className="w-full border-gray-300 rounded-lg bg-gray-50 border px-4 py-3 focus:border-church-blue focus:ring-church-blue outline-none transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full bg-church-gold text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-70 text-lg shadow-md"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        {/* Placeholder for iframe map */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100">
          <MapPin className="w-12 h-12 mb-4 text-gray-400" />
          <p className="font-medium text-lg">Interactive Map Integration</p>
          <p className="text-sm">Sofoline Alignment, Kumasi, Ghana</p>
        </div>
      </section>
    </div>
  );
}
