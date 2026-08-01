import { useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Shop() {
  const [search, setSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInputRef = useRef(null)

  const urlCategory = searchParams.get("category")

  const categories = [
    "All",
    "Dresses",
    "Tops",
    "Shoes",
    "Accessories",
  ]

  const category =
    urlCategory && categories.includes(urlCategory)
      ? urlCategory
      : "All"

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" || product.category === category

    return matchesSearch && matchesCategory
  })

  const handleCategoryChange = (item) => {
    if (item === "All") {
      setSearchParams({})
    } else {
      setSearchParams({ category: item })
    }
  }

  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            LUMÉ Collection
          </p>

          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            {category === "All" ? "Shop All" : category}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Discover our latest collection of timeless fashion pieces.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-12 max-w-xl">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-b border-gray-300 bg-transparent px-2 py-4 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleCategoryChange(item)}
              className={`px-5 py-2 text-sm transition ${
                category === item
                  ? "bg-black text-white"
                  : "border border-gray-300 hover:border-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Products */}
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">
              No products found.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}

export default Shop