import { Link } from "react-router-dom"

function Categories() {
  const categories = [
    {
      name: "Dresses",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tops",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Shop by Category
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative h-96 overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-medium text-white">
                  {category.name}
                </h3>

                <Link
                  to={`/shop?category=${category.name}`}
                  className="mt-2 inline-block border-b border-white pb-1 text-sm text-white transition hover:opacity-70"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories