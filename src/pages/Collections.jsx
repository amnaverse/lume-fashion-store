import { Link } from "react-router-dom"
import products from "../data/products"

function Collections() {
    const collections = [
        {
            name: "New Arrivals",
            category: "new",
            description: "Discover the latest pieces from our collection.",
        },
        {
            name: "Dresses",
            category: "Dresses",
            description: "Elegant silhouettes made for every occasion.",
        },
        {
            name: "Tops",
            category: "Tops",
            description: "Effortless everyday pieces with timeless style.",
        },
        {
            name: "Accessories",
            category: "Accessories",
            description: "Elegant finishing touches to complete your look.",
        },
    ]

    return (
        <section className="bg-white px-6 py-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14 max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                        LUMÉ Collections
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
                        Curated for your style.
                    </h1>

                    <p className="mt-5 leading-7 text-gray-600">
                        Explore our carefully selected collections, designed
                        to bring effortless elegance to your everyday wardrobe.
                    </p>
                </div>

                {/* Collections */}
                <div className="grid gap-8 sm:grid-cols-2">

                    {collections.map((collection) => {
                        const collectionProducts =
                            collection.category === "new"
                                ? products
                                : products.filter(
                                    (product) =>
                                        product.category.toLowerCase() ===
                                        collection.category.toLowerCase()
                                )

                        const featuredProduct = collectionProducts[0]

                        return (
                            <Link
                                key={collection.name}
                                to={`/shop?category=${collection.category}`}
                                className="group relative overflow-hidden bg-gray-100"
                            >
                                {featuredProduct ? (
                                    <div className="h-96">
                                        <img
                                            src={featuredProduct.image}
                                            alt={collection.name}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-96 items-center justify-center">
                                        <p className="text-gray-400">
                                            Collection
                                        </p>
                                    </div>
                                )}

                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-8 pt-20 text-white">
                                    <p className="text-xs uppercase tracking-[0.25em]">
                                        Collection
                                    </p>

                                    <h2 className="mt-2 text-2xl font-semibold">
                                        {collection.name}
                                    </h2>

                                    <p className="mt-2 max-w-md text-sm text-gray-200">
                                        {collection.description}
                                    </p>

                                    <span className="mt-5 inline-block text-sm font-medium uppercase tracking-wider underline">
                                        Explore Collection →
                                    </span>
                                </div>
                            </Link>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default Collections