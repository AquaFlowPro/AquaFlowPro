"use client"

interface PlanCardProps {
  name: string
  price: string
  period: string
  description: string
  badge?: string
  features: string[]
  note: string
  featured: boolean
}

const getBackgroundImage = (name: string) => {
  const imageMap: Record<string, string> = {
    "Home Protection": "/residential-home-water-pump-system.jpg",
    "Pro Care Contract": "/commercial-building-water-pump-maintenance.jpg",
    "Commercial Platinum": "/industrial-commercial-pump-facility-equipment.jpg",
  }
  return imageMap[name] || "/water-pump-maintenance.jpg"
}

export function PlanCard({ name, price, period, description, badge, features, note, featured }: PlanCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-10 shadow-lg transition-all relative overflow-hidden group ${featured ? "border-4 border-blue-500 scale-105" : "border-2 border-transparent"}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundImage: `url('${getBackgroundImage(name)}')` }}
      />

      <div className="relative z-10">
        {badge && (
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
            {badge}
          </div>
        )}

        <div className="text-3xl font-bold text-blue-900 mb-2">{name}</div>
        <div className="text-5xl font-bold text-blue-900 mb-2">
          {price}
          <span className="text-xl text-gray-600">{period}</span>
        </div>
        <div className="text-gray-600 mb-8 pb-8 border-b-2 border-gray-100">{description}</div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="text-gray-700 pl-8 relative">
              <span className="absolute left-0 text-green-600 font-bold text-xl">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={() => (window.location.href = "#contact")}
          className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-bold hover:bg-blue-900 hover:-translate-y-1 transition-all"
        >
          Join for {price}
          {period}
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">{note}</p>
      </div>
    </div>
  )
}
