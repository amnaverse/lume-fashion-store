import { Link } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist()

  const saved = isInWishlist(product.id)

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()

    toggleWishlist(product)
  }

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Wishlist */}
          <button
            type="button"
            onClick={handleWishlist}
            className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm transition ${
              saved
                ? "text-black"
                : "text-black hover:bg-black hover:text-white"
            }`}
            aria-label={
              saved
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            {saved ? "♥" : "♡"}
          </button>

        </div>

        {/* Product Information */}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {product.category}
          </p>

          <h3 className="mt-1 font-medium">
            {product.name}
          </h3>

          <p className="mt-2 font-medium">
            ${product.price}
          </p>
        </div>

      </Link>
    </div>
  )
}

export default ProductCard