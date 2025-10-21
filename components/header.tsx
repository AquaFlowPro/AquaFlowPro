"use client"

export function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-4 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <span>💧</span>
          <span>AQUA FLOW PRO</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a href="#home" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#plans" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Maintenance Plans
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:bg-white/10 px-4 py-2 rounded transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
