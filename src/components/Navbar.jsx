import { useState } from 'react';

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Stretching', page: 'stretching' },
    { name: 'Strengthening', page: 'strengthening' },
    { name: 'About Us', page: 'about' }
  ];

  return (
    <nav className="bg-[var(--background-glass)] backdrop-blur-md shadow border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent tracking-tight select-none">
          SHARTHEA CLINICS
        </h1>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => setPage(item.page)}
                className="text-[var(--text)] hover:text-[var(--primary)] font-semibold px-3 py-1 rounded transition-colors duration-200 focus:outline-none focus:text-[var(--accent)]"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none hover:bg-[var(--accent2)]/20"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-[var(--primary)] mb-1 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--primary)] mb-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--primary)] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile nav */}
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-[var(--background-glass)] backdrop-blur-md shadow-lg flex flex-col items-center space-y-2 py-4 md:hidden animate-fade-in z-50">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => { setPage(item.page); setOpen(false); }}
                  className="text-[var(--text)] hover:text-[var(--primary)] font-semibold px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:text-[var(--accent)] w-full"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
} 