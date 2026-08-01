import { Link } from "react-router-dom"

function PromoSection() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Limited Offer
          </p>

          <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight md:text-5xl">
            Elevate your everyday style.
          </h2>

          <p className="mt-5 max-w-md leading-7 text-gray-400">
            Discover selected pieces from our latest collection and enjoy
            effortless style made for every occasion.
          </p>

          <Link
            to="/collections"
            className="mt-8 inline-block bg-white px-8 py-4 text-sm font-medium uppercase tracking-wider text-black transition hover:bg-gray-200"
          >
            Explore Collection
          </Link>
        </div>

        {/* Offer */}
        <div className="flex justify-center md:justify-end">
          <div className="flex h-64 w-64 items-center justify-center rounded-full border border-gray-700 text-center md:h-80 md:w-80">
            <div>
              <p className="text-5xl font-semibold">
                20%
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Off Selected Items
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PromoSection