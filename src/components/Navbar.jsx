export default function Navbar({ setPage }) {
  return (
    <nav style={{ backgroundColor: 'var(--rose-gold)' }} className="text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SHARTHEA CLINICS</h1>
        <ul className="flex space-x-6">
          <li><button onClick={() => setPage('home')} className="hover:underline">Home</button></li>
          <li><button onClick={() => setPage('stretching')} className="hover:underline">Stretching</button></li>
          <li><button onClick={() => setPage('strengthening')} className="hover:underline">Strengthening</button></li>
          <li><button onClick={() => setPage('about')} className="hover:underline">About Us</button></li>
        </ul>
      </div>
    </nav>
  )
} 