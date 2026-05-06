import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "New Here", href: "/new-here" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
      {/* Announcement Bar */}
      <div className="bg-church-blue text-white py-2 px-6 flex-col sm:flex-row justify-center sm:justify-between items-center text-[10px] sm:text-xs tracking-widest uppercase font-semibold hidden md:flex">
        <span>Join us this Sunday at 8:00 AM & 12:00 PM</span>
        <span>Sofoline Alignment, Kumasi • Live Online</span>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-2">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="w-10 h-10 bg-church-gold rounded-full flex items-center justify-center text-white shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 9h18l-9-7z"/><path d="M5 22h14v-11H5v11z"/><path d="M12 11v4"/><path d="M10 13h4"/></svg>
            </div>
            <span className="font-sans text-sm md:text-base lg:text-lg font-bold tracking-tight text-church-blue truncate">
              JESUS THE GREAT POWERFUL WAY MINISTRY
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 text-sm font-medium opacity-80">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "transition-colors duration-200 text-church-blue hover:text-church-gold",
                location.pathname === item.href && "text-church-gold font-semibold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/new-here"
            className="bg-church-gold text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-church-gold/20 hover:scale-105 transition-transform uppercase"
          >
            PLAN YOUR VISIT
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50",
                location.pathname === item.href && "text-church-gold bg-gray-50"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
             <Link
              to="/new-here"
              className="w-full text-center rounded-full bg-church-gold px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-church-gold/20 hover:scale-105 transition-transform uppercase"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
