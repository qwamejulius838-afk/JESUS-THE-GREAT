import { PlayCircle, Calendar, Clock } from "lucide-react";

export default function Sermons() {
  const sermons = [
    {
      id: 1,
      title: "Finding Peace in the Chaos",
      series: "Peace of Mind",
      date: "Oct 15, 2023",
      speaker: "Pastor John Smith",
      image: "https://images.unsplash.com/photo-1548625361-ecde0584400e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Overcoming Anxiety",
      series: "Peace of Mind",
      date: "Oct 8, 2023",
      speaker: "Pastor John Smith",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "The Power of Forgiveness",
      series: "Relationships",
      date: "Oct 1, 2023",
      speaker: "Sarah Smith",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Building Strong Foundations",
      series: "Relationships",
      date: "Sep 24, 2023",
      speaker: "Pastor John Smith",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80",
    },
    // Add more mock sermons as needed
  ];

  return (
    <div className="bg-church-bg pt-20">
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Sermons</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Listen, watch, and be encouraged by our weekly messages.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Latest Sermon Focus */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold font-serif text-church-blue">Latest Message</h2>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-3/5 relative aspect-video bg-gray-900 group cursor-pointer">
              <img 
                src={sermons[0].image} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                alt={sermons[0].title}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-church-gold/90 text-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <PlayCircle className="w-10 h-10" />
                 </button>
              </div>
            </div>
            <div className="md:w-2/5 p-8 flex flex-col justify-center">
              <span className="text-church-gold font-bold uppercase tracking-wider text-xs mb-2">Series: {sermons[0].series}</span>
              <h3 className="text-3xl font-bold font-serif text-gray-900 mb-4">{sermons[0].title}</h3>
              <div className="space-y-2 mb-8">
                <p className="flex items-center text-gray-600 text-sm">
                   <Clock className="w-4 h-4 mr-2" /> {sermons[0].date}
                </p>
                <p className="flex items-center text-gray-600 text-sm">
                   <Calendar className="w-4 h-4 mr-2" /> Speaker: {sermons[0].speaker}
                </p>
              </div>
              <button className="bg-gray-100 text-church-blue font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors w-fit">
                Download Audio
              </button>
            </div>
          </div>
        </div>

        {/* Archive */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-church-blue mb-8">Recent Messages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-gray-900">
                  <img src={sermon.image} alt={sermon.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-church-gold font-bold uppercase tracking-wider text-xs mb-2 block">{sermon.series}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sermon.title}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                     <span>{sermon.date}</span>
                     <span>{sermon.speaker}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
