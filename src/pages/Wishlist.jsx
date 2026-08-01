import { Link } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Your Wishlist
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Your wishlist is empty
          </h1>

          <p className="mt-4 text-gray-500">
            Save your favorite pieces here.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white"
          >
            Explore Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Saved Items
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            My Wishlist
          </h1>
        </div>

        {/* Wishlist Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div key={product.id} className="group">

              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {product.category}
                </p>

                <h2 className="mt-1 font-medium">
                  {product.name}
                </h2>

                <p className="mt-2">
                  ${product.price}
                </p>

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  className="mt-4 text-sm underline hover:no-underline"
                >
                  Remove from Wishlist
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Wishlist