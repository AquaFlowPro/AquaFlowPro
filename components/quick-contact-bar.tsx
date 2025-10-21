export function QuickContactBar() {
  return (
    <div className="bg-blue-500 text-white py-4 flex justify-center gap-8 flex-wrap px-4">
      <div className="flex items-center gap-2">
        <span>📞</span>
        <a href="tel:07379590901" className="font-semibold hover:underline">
          07379 590901
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span>✉️</span>
        <a href="mailto:info@aquaflowpro.co.uk" className="font-semibold hover:underline">
          info@aquaflowpro.co.uk
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span>💰</span>
        <span className="font-semibold">Transparent Pricing | Free Quotes</span>
      </div>
    </div>
  )
}
