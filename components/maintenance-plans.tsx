import { PlanCard } from "./plan-card"

export function MaintenancePlans() {
  const plans = [
    {
      name: "Home Protection",
      price: "£48",
      period: "/month",
      description: "Perfect for homeowners who want peace of mind",
      features: [
        "1 annual service visit",
        "Priority 24/7 call-out",
        "10% off all repairs",
        "10% off parts",
        "Free telephone support",
        "£0 emergency call-out fee",
      ],
      note: "Or £120/year (save £456)",
      featured: false,
    },
    {
      name: "Pro Care Contract",
      price: "£90",
      period: "/month",
      description: "Ideal for small businesses and landlords",
      badge: "⭐ MOST POPULAR",
      features: [
        "Quarterly maintenance visits",
        "24/7 priority response",
        "15% off all repairs",
        "15% off parts",
        "Compliance reporting",
        "£0 call-out fees",
        "Annual system health report",
        "Parts warranty extension",
      ],
      note: "Or £360/year (save £720)",
      featured: true,
    },
    {
      name: "Commercial Platinum",
      price: "£150",
      period: "/month",
      description: "Premium service for commercial operations",
      features: [
        "Monthly maintenance checks",
        "Guaranteed 4-hour response",
        "20% off all repairs",
        "Remote telemetry monitoring",
        "Dedicated account manager",
        "Unlimited call-outs",
        "Annual energy audit",
        "3-year parts warranty",
        "Emergency spare pump storage",
      ],
      note: "Custom SLA available",
      featured: false,
    },
  ]

  return (
    <section id="plans" className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Maintenance Plans</h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Keep your pumps running smoothly with our affordable maintenance contracts. Save money and avoid costly
          breakdowns.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Why Join a Maintenance Plan?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "Save Money",
                desc: "Prevent costly breakdowns with regular maintenance. Members save 15–20% on repairs.",
              },
              {
                icon: "⚡",
                title: "Priority Service",
                desc: "Jump the queue with priority response times and £0 call-out fees.",
              },
              {
                icon: "🛡️",
                title: "Peace of Mind",
                desc: "Sleep easy knowing your water systems are professionally maintained year-round.",
              },
              {
                icon: "📈",
                title: "Extend Lifespan",
                desc: "Regular servicing extends pump life by 3–5 years on average.",
              },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-blue-900 font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
