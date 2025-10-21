export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="text-blue-400 text-xl font-bold mb-6">About Us</h4>
          <p className="text-gray-400 leading-relaxed mb-4">
            Greater Manchester's trusted pump specialists with over 50 years combined experience. Family-run business
            committed to transparent pricing and exceptional service.
          </p>
        </div>

        <div>
          <h4 className="text-blue-400 text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Services", "Pricing", "Maintenance Plans", "Emergency Service", "Contact Us", "About"].map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-blue-400 text-xl font-bold mb-6">Services</h4>
          <ul className="space-y-3">
            {[
              "Pump Repairs",
              "Installations",
              "Borehole Systems",
              "Water Filtration",
              "Emergency Call-Outs",
              "Commercial Services",
            ].map((service, i) => (
              <li key={i} className="text-gray-400">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-blue-400 text-xl font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              📞{" "}
              <a href="tel:01610000000" className="hover:text-blue-400">
                0161 000 0000
              </a>
            </li>
            <li>
              ✉️{" "}
              <a href="mailto:info@aquaflowpro.co.uk" className="hover:text-blue-400">
                info@aquaflowpro.co.uk
              </a>
            </li>
            <li>📍 Bolton, Greater Manchester</li>
            <li>🕐 Mon–Fri: 8am–6pm</li>
            <li>🚨 24/7 Emergency Service</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; 2025 Aqua Flow Pro. All rights reserved. | Transparent pricing, exceptional service.</p>
      </div>
    </footer>
  )
}
