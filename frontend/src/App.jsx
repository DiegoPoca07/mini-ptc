import { useState } from 'react'
import Footer from './components/footer'
import Review from './pages/review'
import Navbar from './components/navbar'
import './App.css'
import TermsPage from './pages/termsPages'
import AboutPage from './pages/aboutPage'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPages'
import ContactPage from './pages/contactPage'
import SignupPage from './pages/signupPage'
import CategoryPage from './pages/categoryPage'
import ShoppingCart from './pages/shoppingCartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage />
     <ContactPage />
      <SignupPage />
      <CategoryPage />
      <ShoppingCart />
    </>
  )
}

export default App
