import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import FeaturedProducts from "./components/FeaturedProducts"
import PromoSection from "./components/PromoSection"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import { WishlistProvider } from "./context/WishlistContext"
import Wishlist from "./pages/Wishlist"
import Collections from "./pages/Collections"
import About from "./pages/About"

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoSection />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen bg-white text-black">
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/product/:id"
                  element={<ProductDetails />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App




