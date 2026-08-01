import { useParams } from "react-router-dom"
import { useState } from "react"
import products from "../data/products"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function ProductDetails() {
  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const { addToCart } = useCart()

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist()

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, this product does not exist.
          </p>
        </div>
      </section>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  const handleWishlist = () => {
    toggleWishlist(product)
  }

  const wishlisted = isInWishlist(product.id)

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-medium">
            ${product.price}
          </p>

          <p className="mt-6 max-w-lg leading-7 text-gray-600">
            A timeless piece designed with comfort and effortless style
            in mind. Perfect for creating an elegant everyday look.
          </p>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium">
              Quantity
            </p>

            <div className="flex w-fit items-center border border-gray-300">
              <button
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="px-5 py-3 text-lg"
              >
                −
              </button>

              <span className="px-5">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                className="px-5 py-3 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-black py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-gray-800"
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className={`mt-3 w-full border py-4 text-sm font-medium uppercase tracking-wider transition ${
              wishlisted
                ? "border-black bg-black text-white"
                : "border-black hover:bg-black hover:text-white"
            }`}
          >
            {wishlisted
              ? "♥ Added to Wishlist"
              : "♡ Add to Wishlist"}
          </button>

        </div>
      </div>
    </section>
  )
}

export default ProductDetails