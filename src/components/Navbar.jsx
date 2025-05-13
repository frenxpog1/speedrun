export default function Navbar({ setPage }) {
  return (
    <nav className="bg-white/90 backdrop-blur shadow border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--primary)] tracking-tight">SHARTHEA CLINICS</h1>
          <ul className="flex space-x-8">
            {[
              { name: 'Home', page: 'home' },
              { name: 'Stretching', page: 'stretching' },
              { name: 'Strengthening', page: 'strengthening' },
              { name: 'About Us', page: 'about' }
            ].map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => setPage(item.page)}
                  className="text-[var(--text)] hover:text-[var(--primary)] font-medium px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus:text-[var(--accent)]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
} 