interface ServiceCardProps {
  title: string
  image: string
  description: string
  priceFrom: string
  priceRange: string
  priceNote: string
  features: string[]
  ctaText: string
  ctaLink: string
}

const getBackgroundImage = (image: string) => {
  return image || "/water-pump-equipment.jpg"
}

export function ServiceCard({
  title,
  image,
  description,
  priceFrom,
  priceRange,
  priceNote,
  features,
  ctaText,
  ctaLink,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-transparent hover:border-blue-500 relative overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundImage: `url('${getBackgroundImage(image)}')` }}
      />

      <div className="relative z-10">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform" />

        <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
          <div className="text-3xl font-bold text-blue-900 mb-2">{priceFrom}</div>
          <div className="text-gray-600 text-sm mb-2">{priceRange}</div>
          <div className="text-gray-500 text-xs italic">{priceNote}</div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="text-gray-600 pl-6 relative">
              <span className="absolute left-0 text-green-600 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={ctaLink}
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:-translate-y-1 transition-all"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}
