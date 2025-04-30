import { useState } from 'react'
import Footer from './components/footer'
import Review from './pages/review'
import Navbar from './components/navbar'
import './App.css'
import TermsPage from './pages/termsPages'
import AboutPage from './pages/aboutPage'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <TermsPage />
      <Review />
      <Footer />
    </>
  )
}

export default App
