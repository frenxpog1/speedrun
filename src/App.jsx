import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import StretchingExercises from './components/StretchingExercises'
import StrengtheningExercises from './components/StrengtheningExercises'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setPage={setPage} />
      <main className="flex-grow">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'stretching' && <StretchingExercises />}
        {page === 'strengthening' && <StrengtheningExercises />}
        {page === 'about' && <AboutUs />}
      </main>
      <Footer />
    </div>
  )
}

export default App 