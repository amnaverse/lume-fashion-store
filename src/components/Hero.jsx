import { Link } from "react-router-dom"
function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            New Collection 2026
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Style that
            <br />
            speaks for you.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
            Discover timeless fashion pieces designed to bring effortless
            elegance to your everyday style.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-gray-800"
          >
            Shop Collection
          </Link>
        </div>

        {/* Right Image */}
        <div className="h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
            alt="LUMÉ fashion collection"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero