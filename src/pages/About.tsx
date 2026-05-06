export default function About() {
  return (
    <div className="bg-church-bg pt-20">
      {/* Hero */}
      <section className="bg-church-blue text-white py-20 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1548625361-ecde0584400e?auto=format&fit=crop&w=1920&q=80" alt="Church Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-church-blue/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            We exist to bring people into a life-changing relationship with Jesus.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-church-blue mb-6">Mission & Vision</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>Our Mission:</strong> To love God, love people, and make disciples of all nations. 
                We believe that the church is not a building, but a community of people completely devoted to Jesus.
              </p>
              <p>
                <strong>Our Vision:</strong> To see our city transformed by the radical grace of God. We envision a church that is a beacon of hope, where the lost are found, the broken are healed, and believers are equipped to change the world.
              </p>
              <p>
                Jesus the Great planted its roots in 2010 with just a handful of families meeting in a living room. Today, we are humbled to see how God has grown our community into a vibrant, diverse family.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-church-gold/10 rounded-3xl transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80" 
              alt="Church Community" 
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-church-blue mb-16">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Biblical Truth", desc: "We build our lives on the unchanging word of God." },
              { title: "Authentic Community", desc: "We were created to do life together, not alone." },
              { title: "Radical Generosity", desc: "We lead the way with irrational generosity." },
              { title: "Intentional Mission", desc: "Found people find people. We are called to share the good news." }
            ].map((value, i) => (
              <div key={i} className="p-6 bg-church-bg rounded-2xl">
                <div className="w-12 h-12 bg-church-gold/10 text-church-gold rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl font-serif">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-church-blue">Our Leadership</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          <img 
            src="https://images.unsplash.com/photo-1548625361-ecde0584400e?auto=format&fit=crop&w=600&q=80" 
            alt="Pastor John and Sarah Smith" 
            className="rounded-2xl shadow-lg w-full aspect-square object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">PROPHET T.K FRIMPONG(OVERSEER) & REV. GEORGE ODDEI(Might Man)</h3>
            <p className="text-church-gold font-medium uppercase tracking-wider text-sm mb-6">Lead Pastors</p>
            <div className="space-y-4 text-gray-600">
              <p>
                John and Sarah founded Grace City in 2010 with a passion for seeing people far from God experience new life in Christ. John is known for his practical, engaging, and biblical teaching style.
              </p>
              <p>
                They have been married for 15 years and have three energetic children. When they aren't at church, you can usually find them exploring local coffee shops or cheering at their kids' soccer games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
