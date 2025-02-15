import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup.jsx"

const App = () => {
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  return (
    <> 
      {showLoginSignup && <LoginPopup setShowLoginSignup={setShowLoginSignup} />}
      <div className="w-[80%] m-auto">
        <Navbar setShowLoginSignup={setShowLoginSignup} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App