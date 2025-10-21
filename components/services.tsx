import { ServiceCard } from "./service-card"

export function Services() {
  const services = [
    {
      title: "Pump Repairs",
      image: "/pump-repair-tools-and-equipment-maintenance.jpg",
      description: "Fast fault diagnostics and expert repairs for all major brands. Same-day service often available.",
      priceFrom: "£100",
      priceRange: "£100–£400",
      priceNote: "Includes call-out + first hour diagnostic. Parts additional.",
      features: [
        "All major brands serviced",
        "Same-day repairs available",
        "Comprehensive diagnostics",
        "12-month workmanship warranty",
        "No fix, reduced fee",
      ],
      ctaText: "Book Repair →",
      ctaLink: "#contact",
    },
    {
      title: "Domestic Pump Installation",
      image: "/residential-home-water-pump-system.jpg",
      description: "Professional installation of pressure boosters, well pumps, and water systems for homes.",
      priceFrom: "£250",
      priceRange: "£250–£700",
      priceNote: "Supply & fit, pressure testing, 12-month warranty included.",
      features: [
        "Pressure boosting systems",
        "Well & borehole pumps",
        "Submersible pumps",
        "Surface water pumps",
        "Full system commissioning",
      ],
      ctaText: "Get Free Quote →",
      ctaLink: "#contact",
    },
    {
      title: "Borehole & Well Systems",
      image: "/industrial-water-pump-installation-machinery.jpg",
      description: "Complete borehole pump installations for deep wells, farms, and rural properties.",
      priceFrom: "£2,500",
      priceRange: "£2,500–£10,000+",
      priceNote: "Price varies by depth, pump specification, and site access.",
      features: [
        "Deep well specialists",
        "High-capacity systems",
        "Pressure vessel installation",
        "Control systems & telemetry",
        "Site survey included",
      ],
      ctaText: "Request Survey →",
      ctaLink: "#contact",
    },
    {
      title: "Water Filtration Systems",
      image: "/water-tank-cleaning-disinfection-service.jpg",
      description: "Clean, safe water through professional filtration and purification installations.",
      priceFrom: "£180",
      priceRange: "£180–£900",
      priceNote: "Cartridge & UV systems. Whole-house systems from £600.",
      features: [
        "Sediment filtration",
        "UV sterilization",
        "Water softeners",
        "Reverse osmosis",
        "Water quality testing",
      ],
      ctaText: "Get Clean Water →",
      ctaLink: "#contact",
    },
    {
      title: "Emergency Call-Outs",
      image: "/sewage-drainage-pump-system-underground.jpg",
      description: "24/7 emergency response for pump failures, flooding, or water supply emergencies.",
      priceFrom: "£90",
      priceRange: "£90 call-out + £60–£120/hr labour",
      priceNote: "Call-out fee waived if repair accepted. Members pay £0 call-out.",
      features: [
        "24/7 availability",
        "Rapid response (2–4 hours)",
        "Emergency repairs",
        "Flooding assistance",
        "Priority for members",
      ],
      ctaText: "Call Emergency Line →",
      ctaLink: "tel:07379590901",
    },
    {
      title: "Commercial & Agricultural",
      image: "/commercial-building-water-pump-maintenance.jpg",
      description: "Large-scale solutions for farms, businesses, and industrial applications.",
      priceFrom: "£1,200",
      priceRange: "£1,200–£6,000+",
      priceNote: "Multi-pump stations, irrigation systems, custom installations.",
      features: [
        "Irrigation system design",
        "Livestock water systems",
        "Industrial pumps",
        "Packaged pump stations",
        "Turnkey project delivery",
      ],
      ctaText: "Discuss Project →",
      ctaLink: "#contact",
    },
  ]

  return (
    <section id="services" className="py-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Our Services & Pricing</h2>
      <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Clear, competitive pricing with no hidden costs. All prices include VAT.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl mt-12 text-center">
        <h3 className="text-3xl font-bold mb-4">🛡️ Our Price Promise</h3>
        <p className="text-lg mb-2">
          <strong>Free written quotes | No hidden fees | Fixed prices agreed before work starts</strong>
        </p>
        <p className="text-base">
          Final price confirmed after free on-site survey. If we can't fix it, you pay a reduced diagnostic fee only.
        </p>
      </div>
    </section>
  )
}
