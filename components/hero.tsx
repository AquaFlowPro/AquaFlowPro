export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900/95 to-blue-500/90 text-white py-32 px-8 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("/industrial-commercial-pump-facility-equipment.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block bg-white/20 backdrop-blur-md px-7 py-3 rounded-full mb-8 border-2 border-white/30 font-semibold">
          ✓ Over 50 Years Combined Experience | WRAS Approved
        </div>

        <h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
        >
          Greater Manchester's
          <br />
          Trusted Pump Specialists
        </h1>

        <p
          className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-pretty"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}
        >
          Professional pump installation, repair & maintenance from £100 | Free quotes | Transparent pricing | 24/7
          emergency service
        </p>

        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <a
            href="#contact"
            className="bg-white text-blue-900 px-12 py-4 text-lg font-bold rounded-lg hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </a>
          <a
            href="tel:07379590901"
            className="bg-transparent border-2 border-white text-white px-12 py-4 text-lg font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all shadow-lg"
          >
            Call: 07379 590901
          </a>
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { icon: "💰", text: "From £100" },
            { icon: "✓", text: "Free Quotes" },
            { icon: "⚡", text: "Same Day" },
            { icon: "🛡️", text: "Guaranteed" },
          ].map((badge, i) => (
            <div key={i} className="text-center bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl min-w-[150px]">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-semibold">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
