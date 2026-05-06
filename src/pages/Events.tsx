import { CalendarDays, MapPin, Clock } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Fall Festival & Trunk-or-Treat",
      date: "Oct 31, 2023",
      time: "5:00 PM - 8:00 PM",
      location: "East Parking Lot",
      description: "Join us for a safe, fun, family-friendly evening! We'll have food trucks, games, bounce houses, and plenty of candy. Admission is free.",
      category: "Family",
    },
    {
      id: 2,
      title: "Women's Coffee & Connect",
      date: "Nov 4, 2023",
      time: "9:30 AM - 11:00 AM",
      location: "Main Lobby",
      description: "Take a break and connect with other women at Grace City. We'll have fresh pastries, local coffee, and an encouraging short devotion.",
      category: "Women",
    },
    {
      id: 3,
      title: "Night of Worship",
      date: "Nov 10, 2023",
      time: "7:00 PM - 8:30 PM",
      location: "Main Auditorium",
      description: "An extended time of unhurried worship and prayer. Childcare provided for ages 0-5.",
      category: "All Church",
    },
    {
      id: 4,
      title: "Men's Breakfast",
      date: "Nov 18, 2023",
      time: "8:00 AM - 9:30 AM",
      location: "Fellowship Hall",
      description: "A hearty breakfast, great community, and a challenge from Pastor John. Suggested donation is $5.",
      category: "Men",
    }
  ];

  return (
    <div className="bg-church-bg pt-20">
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1920&q=80" alt="Church Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-church-blue/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Events</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            See what's happening at Grace City and find a place to connect.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
               
               {/* Date Block */}
               <div className="md:w-32 shrink-0 bg-church-bg rounded-xl p-4 flex flex-col items-center justify-center text-center border border-gray-50">
                  <span className="text-church-gold font-bold uppercase tracking-wider text-xs">{event.date.split(' ')[0]}</span>
                  <span className="text-4xl font-serif font-bold text-church-blue my-1">{event.date.split(' ')[1].replace(',', '')}</span>
               </div>

               {/* Event Details */}
               <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-50 text-church-blue px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-church-gold" />
                       {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                       <MapPin className="w-4 h-4 text-church-gold" />
                       {event.location}
                    </div>
                  </div>
               </div>

               {/* Action */}
               <div className="md:w-32 shrink-0 flex items-center justify-center md:justify-end md:border-l border-gray-100 md:pl-6">
                 <button className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-church-blue font-semibold py-3 px-6 rounded-lg transition-colors">
                   Details
                 </button>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
