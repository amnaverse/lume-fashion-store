import { useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email) return

    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-widest"
            >
              LUMÉ
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Timeless fashion designed for your everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <Link
                to="/shop"
                className="block hover:text-black"
              >
                New Arrivals
              </Link>

              <Link
                to="/collections"
                className="block hover:text-black"
              >
                Dresses
              </Link>

              <Link
                to="/collections"
                className="block hover:text-black"
              >
                Tops
              </Link>

              <Link
                to="/collections"
                className="block hover:text-black"
              >
                Accessories
              </Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Help
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <a
                href="mailto:hello@lume-fashion.com"
                className="block hover:text-black"
              >
                Contact Us
              </a>

              <p className="cursor-pointer hover:text-black">
                Shipping
              </p>

              <p className="cursor-pointer hover:text-black">
                Returns
              </p>

              <p className="cursor-pointer hover:text-black">
                FAQs
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Stay Connected
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Subscribe for new collections, offers and fashion updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex border-b border-black pb-2"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="text-sm font-medium transition hover:translate-x-1"
              >
                →
              </button>
            </form>

            {subscribed && (
              <p className="mt-3 text-sm text-gray-500">
                Thank you for subscribing!
              </p>
            )}
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>© 2026 LUMÉ. All rights reserved.</p>

          <div className="flex gap-5">
  <a
    href="https://www.linkedin.com/in/amna-malik-818827337/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 transition hover:text-black"
  >
    LinkedIn
  </a>
</div>

        </div>

      </div>
    </footer>
  )
}

export default Footer