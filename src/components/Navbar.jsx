export default function Navbar({ setPage }) {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            SHARTHEA CLINICS
          </h1>
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
                  className="text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300
                           relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                           after:bg-gradient-to-r after:from-[var(--gradient-start)] after:to-[var(--gradient-end)]
                           hover:after:w-full after:transition-all after:duration-300"
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