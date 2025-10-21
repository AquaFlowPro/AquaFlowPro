const getBackgroundImage = (title: string) => {
  const imageMap: Record<string, string> = {
    "Extended Warranty": "/warranty-protection-shield-pump-equipment.jpg",
    "Energy Audit & Report": "/energy-efficiency-meter-gauge-industrial.jpg",
    "Smart WiFi Monitoring": "/smart-monitoring-dashboard-technology-iot.jpg",
    "System Health Check": "/diagnostic-inspection-pump-system-tools.jpg",
    "Tank Clean & Disinfection": "/water-tank-cleaning-disinfection-service.jpg",
    "Battery Backup System": "/battery-backup-power-system-industrial.jpg",
    "Water Quality Test": "/placeholder.svg?height=300&width=400",
    "Emergency Spare Storage": "/placeholder.svg?height=300&width=400",
  }
  return imageMap[title] || "/placeholder.svg?height=300&width=400"
}

export function AddOns() {
  const addons = [
    {
      icon: "🛡️",
      title: "Extended Warranty",
      desc: "Extend your parts and labour warranty for complete peace of mind.",
      price: "£60–£150",
      note: "1–3 year coverage available",
    },
    {
      icon: "📊",
      title: "Energy Audit & Report",
      desc: "Identify savings opportunities with our comprehensive energy assessment.",
      price: "£120",
      note: "Includes VSD upgrade recommendations",
    },
    {
      icon: "📱",
      title: "Smart WiFi Monitoring",
      desc: "Get real-time alerts and remote monitoring via smartphone app.",
      price: "£90",
      note: "Quick installation, instant setup",
    },
    {
      icon: "🔍",
      title: "System Health Check",
      desc: "Comprehensive diagnostic assessment of your entire pump system.",
      price: "£60",
      note: "Fee waived if repairs booked",
    },
    {
      icon: "🧼",
      title: "Tank Clean & Disinfection",
      desc: "Professional cleaning and disinfection of water storage tanks.",
      price: "£100–£300",
      note: "Essential for water quality",
    },
    {
      icon: "🔋",
      title: "Battery Backup System",
      desc: "Keep pumping during power cuts with automatic battery backup.",
      price: "£300–£900",
      note: "Critical system protection",
    },
    {
      icon: "💧",
      title: "Water Quality Test",
      desc: "Laboratory testing for bacteria, minerals, and contaminants.",
      price: "£20",
      note: "Includes test kit and analysis",
    },
    {
      icon: "📦",
      title: "Emergency Spare Storage",
      desc: "We store a backup pump ready for instant deployment if yours fails.",
      price: "£30/month",
      note: "For commercial clients",
    },
  ]

  return (
    <section id="addons" className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">Add-On Services & Upgrades</h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Enhance your system with our specialist services and smart upgrades
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {addons.map((addon, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundImage: `url('${getBackgroundImage(addon.title)}')` }}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{addon.icon}</div>
                <h4 className="text-blue-900 font-bold text-xl mb-3">{addon.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{addon.desc}</p>
                <div className="text-2xl font-bold text-blue-500 mb-2">{addon.price}</div>
                <p className="text-gray-500 text-xs">{addon.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
