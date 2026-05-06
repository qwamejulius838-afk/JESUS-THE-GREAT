import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Heart, Users, MapPin, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-church-bg">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[900px] items-center pt-32 pb-16 px-6 lg:px-16 max-w-[1600px] mx-auto overflow-hidden">
        <div className="w-full lg:w-1/2 z-10 pt-16 lg:pt-0">
          <span className="inline-block px-4 py-1.5 bg-church-gold/10 text-church-gold text-xs font-bold tracking-widest uppercase rounded flex-shrink-0 w-fit mb-6 animate-fade-in-up">
            Welcome to our Family
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-serif font-bold leading-[1.1] text-church-blue mb-8">
            You belong <span className="text-church-gold">here.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Experience a modern community rooted in faith, hope, and love. Join us for worship this weekend, either in person or online.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/sermons"
              className="bg-church-blue text-white px-8 py-4 rounded-full font-bold flex flex-row items-center justify-center w-full sm:w-auto gap-3 hover:scale-105 transition-transform"
            >
              WATCH ONLINE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </Link>
            <Link
              to="/new-here"
              className="border-2 border-church-blue text-church-blue px-8 py-4 rounded-full font-bold text-center w-full sm:w-auto hover:bg-church-blue/5 transition-colors"
            >
              PLAN YOUR VISIT
            </Link>
          </div>
        </div>

        {/* Decorative Hero Image */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end relative mt-16 lg:mt-0">
          <div className="w-full max-w-md lg:w-[420px] aspect-[4/5] bg-gray-200 rounded-[40px] shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-church-blue/80 via-church-blue/20 to-transparent flex items-end p-8 text-white z-10">
               <div>
                 <p className="font-serif italic text-2xl">"Finding a home here changed my life."</p>
                 <p className="text-sm uppercase tracking-widest mt-3 font-semibold">— The Miller Family</p>
               </div>
             </div>
             <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Worship" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          {/* Floating Card */}
          <div className="absolute bottom-10 lg:bottom-20 left-4 lg:-ml-12 lg:left-0 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Next Service In</p>
              <p className="text-lg font-bold text-church-blue">02 : 14 : 45</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / What to Expect */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-church-gold/10 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Diverse people talking and smiling"
              className="relative rounded-2xl shadow-2xl object-cover aspect-[4/5] object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="text-church-gold h-6 w-6" />
                <span className="font-serif font-bold text-xl text-church-blue">Loved.</span>
              </div>
              <p className="text-sm text-gray-600 leading-tight">No matter your background, you are loved here.</p>
            </div>
          </div>
          
          <div>
            <p className="text-church-gold font-bold tracking-wider uppercase mb-3 text-sm">New Here?</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-church-blue mb-6 leading-tight">
              We've been saving a seat for you.
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Visiting a new church can be intimidating. At Grace City, we want you to feel at home the moment you walk through the doors. Expect casual dress, modern worship, and a message that applies to your everyday life.
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-full h-fit">
                  <MapPin className="text-church-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Central Location</h3>
                  <p className="text-gray-600 mt-1">123 Faith Ave. Plentiful free parking with a dedicated team to guide you.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-amber-50 p-3 rounded-full h-fit">
                  <Heart className="text-church-gold h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Kids Ministry</h3>
                  <p className="text-gray-600 mt-1">Safe, fun, and engaging environments for children from birth to 5th grade.</p>
                </div>
              </li>
            </ul>

            <Link
              to="/new-here"
              className="inline-flex items-center gap-2 text-church-blue font-bold hover:text-church-gold transition-colors text-lg"
            >
              See what to expect <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Sermon Promo */}
      <section className="bg-church-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest Message</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Catch up on Sunday's message or share it with a friend.</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl max-w-4xl mx-auto group">
            <img 
               src="https://images.unsplash.com/photo-1548625361-ecde0584400e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
               alt="Pastor speaking on stage"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
               <button className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-church-gold transition-all duration-300 transform group-hover:scale-110">
                 <PlayCircle className="h-12 w-12 text-white" />
               </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <span className="bg-church-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">Sermon Series</span>
              <h3 className="text-2xl font-bold font-serif">Finding Peace in the Chaos</h3>
              <p className="text-gray-300 mt-2">Pastor John Smith • October 15, 2023</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <Link to="/sermons" className="inline-flex items-center gap-2 bg-white text-church-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
               Browse full archive
             </Link>
          </div>
        </div>
      </section>

      {/* Next Steps / Quick Links */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Join a Group",
                desc: "Life is better connected. Find a community group.",
                icon: Users,
                link: "/about",
                cta: "Find a Group"
              },
              {
                title: "Upcoming Events",
                desc: "See what's happening at Grace City this month.",
                icon: Calendar,
                link: "/events",
                cta: "View Calendar"
              },
              {
                title: "Give Online",
                desc: "Partner with us in making a difference.",
                icon: Heart,
                link: "/give",
                cta: "Give Now"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-church-bg border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full group">
                <div className="w-14 h-14 bg-church-blue text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-church-gold transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow">{item.desc}</p>
                <Link to={item.link} className="flex items-center gap-2 text-church-blue font-semibold group-hover:text-church-gold transition-colors mt-auto w-fit">
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
