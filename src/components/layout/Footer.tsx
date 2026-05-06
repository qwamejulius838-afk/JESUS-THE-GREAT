import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-church-blue text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="font-serif text-3xl font-bold tracking-tight text-white">
              Grace City
            </span>
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              A place to belong, grow, and serve. Join us this Sunday and experience the love of Christ.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-church-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-church-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-church-gold transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold tracking-wider text-white uppercase text-sm">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/sermons" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Latest Sermons
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/give" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Give Online
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-bold tracking-wider text-white uppercase text-sm">Next Steps</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/new-here" className="text-sm leading-6 text-church-gold hover:text-amber-400 transition-colors font-medium">
                      Plan Your Visit
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Join a Small Group
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Baptism
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Serve with Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="font-bold tracking-wider text-white uppercase text-sm">Visit Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-300">
                      123 Faith Avenue<br />
                      Graceville, CA 90210
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-church-gold shrink-0" />
                    <span className="text-sm leading-6 text-gray-300">
                      (555) 123-4567
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-church-gold shrink-0" />
                    <span className="text-sm leading-6 text-gray-300">
                      hello@gracecity.church
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                   <p className="text-sm font-semibold text-white">Service Times:</p>
                   <p className="text-sm text-gray-300 mt-1">Sundays at 9:00 AM & 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-center pb-8 border-b border-white/10">
           <h3 className="text-lg font-serif italic text-church-gold mb-2">"For where two or three gather in my name, there am I with them."</h3>
           <p className="text-sm text-gray-400 uppercase tracking-widest">— Matthew 18:20</p>
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Grace City Church. All rights reserved.
          </p>
           <p className="text-xs leading-5 text-gray-500 mt-2 md:mt-0">
            Designed for connection and community.
          </p>
        </div>
      </div>
    </footer>
  );
}
