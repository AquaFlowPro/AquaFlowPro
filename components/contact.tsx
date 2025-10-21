"use client"

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Get Your Free Quote Today</h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          No obligation, no pressure—just honest advice and transparent pricing
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {[
              {
                icon: "📞",
                title: "Phone",
                content: "07379 590901",
                link: "tel:07379590901",
                note: "Call now for immediate quotes",
              },
              {
                icon: "✉️",
                title: "Email",
                content: "info@aquaflowpro.co.uk",
                link: "mailto:info@aquaflowpro.co.uk",
                note: "Response within 24 hours",
              },
              {
                icon: "📍",
                title: "Location",
                content: "Bolton, Greater Manchester",
                link: null,
                note: "Serving all GM areas",
              },
              {
                icon: "🕐",
                title: "Hours",
                content: "Mon–Fri: 8am–6pm",
                link: null,
                note: "Sat: 9am–4pm | 24/7 Emergency",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:translate-x-2 transition-all"
              >
                <span className="text-4xl text-blue-500">{item.icon}</span>
                <div>
                  <h4 className="text-blue-900 font-bold text-lg mb-2">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-blue-500 font-semibold text-lg hover:underline">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold">{item.content}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Service Required</label>
                <select className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Select a service...</option>
                  <option>Pump Repair</option>
                  <option>New Installation</option>
                  <option>Borehole System</option>
                  <option>Emergency Call-Out</option>
                  <option>Maintenance Plan</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-4 rounded-lg text-lg font-bold hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
