import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { cartCount } = useCart()
  const { wishlist } = useWishlist()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold tracking-widest"
          >
            LUMÉ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium hover:text-gray-500"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="text-sm font-medium hover:text-gray-500"
            >
              Shop
            </Link>

            <Link
              to="/collections"
              className="text-sm font-medium hover:text-gray-500"
            >
              Collections
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium hover:text-gray-500"
            >
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <Link
              to="/shop"
              className="text-xl"
              aria-label="Search"
            >
              ⌕
            </Link>


            {/* Wishlist */}
            <Link
              to="/wishlist"
              className={`relative text-xl transition ${wishlist.length > 0
                  ? "text-red-600"
                  : "text-black"
                }`}
              aria-label="Wishlist"
            >
              {wishlist.length > 0 ? "♥" : "♡"}

              {wishlist.length > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-xl"
              aria-label="Shopping cart"
            >
              🛒

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="text-2xl md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 py-5 md:hidden">
            <div className="flex flex-col gap-5">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Shop
              </Link>

              <Link
                to="/collections"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                Collections
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium"
              >
                About
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar