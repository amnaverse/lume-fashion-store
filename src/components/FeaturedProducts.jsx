import products from "../data/products"
import ProductCard from "./ProductCard"

function FeaturedProducts() {
  return (
    <section className="bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Our Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Featured Products
            </h2>
          </div>

          <button className="hidden border-b border-black pb-1 text-sm font-medium md:block">
            View All
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts