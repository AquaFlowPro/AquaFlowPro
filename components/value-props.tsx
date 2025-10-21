export function ValueProps() {
  const values = [
    { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees ever" },
    { icon: "📋", title: "Free Site Survey", desc: "Written fixed quotes" },
    { icon: "⚡", title: "Fast Response", desc: "Same-day available" },
    { icon: "✓", title: "Quality Guaranteed", desc: "12-month warranty" },
    { icon: "🏠", title: "Local & Trusted", desc: "Family-run business" },
  ]

  return (
    <section className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {values.map((value, i) => (
          <div key={i} className="p-6">
            <div className="text-5xl mb-4">{value.icon}</div>
            <h4 className="text-blue-900 font-bold mb-2">{value.title}</h4>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
