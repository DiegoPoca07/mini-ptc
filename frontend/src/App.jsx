import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Review from './pages/review';
import Navbar from './components/navbar';
//import './App.css';
import TermsPage from './pages/termsPages';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPages';
import ContactPage from './pages/contactPage';
import SignupPage from './pages/signupPage';
import CategoryPage from './pages/categoryPage';
import ShoppingCart from './pages/shoppingCartPage';
import NewsPage from './pages/newsPages';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={
              <div className="centered-page-container">
                <ContactPage />
              </div>
            } />
            <Route path="/login" element={
              <div className="centered-page-container">
                <LoginPage />
              </div>
            } />
            <Route path="/signup" element={
              <div className="centered-page-container">
                <SignupPage />
              </div>
            } />
            <Route path="/category" element={
              <div className="store-page-container">
                <CategoryPage />
              </div>
            } />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/review" element={<Review />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
