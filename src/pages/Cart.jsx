import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  if (cart.length === 0) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Your Cart
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Your cart is empty
          </h1>

          <p className="mt-4 text-gray-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white"
          >
            Continue Shopping
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
            Shopping Bag
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            Your Cart
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-8 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border-b border-gray-200 pb-8"
              >

                {/* Image */}
                <div className="h-32 w-28 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-medium">
                      {item.name}
                    </h2>

                    <p className="mt-2">
                      ${item.price}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="px-4 py-2"
                      >
                        −
                      </button>

                      <span className="px-4">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="px-4 py-2"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-gray-500 underline hover:text-black"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between text-sm">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span>
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">
                Shipping
              </span>

              <span>
                Free
              </span>
            </div>

            <div className="my-6 border-t border-gray-200" />

            <div className="flex justify-between text-lg font-semibold">
              <span>
                Total
              </span>

              <span>
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <button className="mt-8 w-full bg-black py-4 text-sm font-medium uppercase tracking-wider text-white">
              Checkout
            </button>

            <Link
              to="/shop"
              className="mt-4 block text-center text-sm underline"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cart