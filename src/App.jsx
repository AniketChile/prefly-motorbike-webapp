import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Specs from './components/Specs'
import Footer from './components/Footer'
import Pricing from './components/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white text-gray-900">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Gallery />
      <Specs />
      <Pricing />
    </main>
    <Footer />
  </div>
  )
}

export default App
