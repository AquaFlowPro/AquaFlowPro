export function PricingTable() {
  const pricing = [
    {
      service: "Domestic Booster Pump Installation",
      desc: "Supply & fit pressure boosting system",
      from: "£250",
      range: "£250–£700",
    },
    {
      service: "Submersible Pump Replacement",
      desc: "Domestic or shallow well",
      from: "£650",
      range: "£650–£1,500",
    },
    {
      service: "Borehole / Deep Well Pump System",
      desc: "Complete installation inc. commissioning",
      from: "£2,500",
      range: "£2,500–£10,000+",
    },
    {
      service: "Sump Pump & Basement Waterproofing",
      desc: "Sump pump installation or chamber replacement",
      from: "£450",
      range: "£450–£1,200",
    },
    {
      service: "Commercial / Industrial Pump Installation",
      desc: "Multi-pump or packaged pump stations",
      from: "£1,200",
      range: "£1,200–£6,000+",
    },
    {
      service: "Pump Repairs (On-Site)",
      desc: "Call-out + first hour diagnostic, parts additional",
      from: "£100",
      range: "£100–£400",
    },
    {
      service: "Emergency 24/7 Call-Out",
      desc: "Fee waived if repair accepted",
      from: "£90",
      range: "£90–£200 + £60–£120/hr",
    },
    {
      service: "Water Filtration / Treatment System",
      desc: "Cartridge/UV systems, whole-house higher",
      from: "£180",
      range: "£180–£900",
    },
    {
      service: "Pump Servicing (Single Visit)",
      desc: "Routine maintenance, pressure testing, cleaning",
      from: "£80",
      range: "£80–£250",
    },
    {
      service: "Pump Station Design & Build",
      desc: "Turnkey for developments, housing sites",
      from: "£1,000",
      range: "£1,000–£8,000+",
    },
    {
      service: "Well Rehabilitation / Jetting / CCTV",
      desc: "Inspection and cleaning with report",
      from: "£350",
      range: "£350–£2,000",
    },
    {
      service: "Greywater / Rainwater Recovery System",
      desc: "Eco-efficient water reuse system",
      from: "£600",
      range: "£600–£2,500",
    },
    {
      service: "Variable Speed Drive (VSD) Upgrades",
      desc: "Energy-saving retrofit",
      from: "£400",
      range: "£400–£1,200",
    },
    {
      service: "Temporary Pump Hire / Emergency Pumping",
      desc: "Includes delivery/collection for dewatering",
      from: "£150/day",
      range: "£150–£500/day",
    },
    {
      service: "Irrigation / Farm Pump Installations",
      desc: "For small farms or large gardens",
      from: "£900",
      range: "£900–£3,000+",
    },
    {
      service: "Battery Backup / Smart Control System",
      desc: "Adds resilience and remote monitoring",
      from: "£300",
      range: "£300–£900",
    },
  ]

  return (
    <section id="pricing" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Complete Price List</h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Transparent pricing you can trust. All prices include VAT and are accurate as of 2025.
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
                <th className="text-left p-5 text-lg">Service</th>
                <th className="text-left p-5 text-lg">Starting From</th>
                <th className="text-left p-5 text-lg">Typical Range</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-5">
                    <strong className="text-gray-900">{item.service}</strong>
                    <br />
                    <small className="text-gray-600">{item.desc}</small>
                  </td>
                  <td className="p-5 font-bold text-blue-500 text-xl">{item.from}</td>
                  <td className="p-5 text-gray-700">{item.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-8 text-gray-600">
          <strong>All prices include VAT.</strong> Final price confirmed after free on-site survey. T&Cs apply. Prices
          subject to site conditions and material costs.
        </p>
      </div>
    </section>
  )
}
