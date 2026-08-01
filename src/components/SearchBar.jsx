import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import SearchBar from "./SearchBar"

function Navbar() {
  const { cartCount } = useCart()
  const { wishlist } = useWishlist()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest"
        >
          LUMÉ
        </Link>

        {/* Navigation */}
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
          <SearchBar />

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative text-xl"
            aria-label="Wishlist"
          >
            ♡

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

        </div>

      </div>
    </nav>
  )
}

export default Navbar