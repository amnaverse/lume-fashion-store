function About() {
  return (
    <section className="bg-white">

      {/* Hero */}
      <div className="border-b border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About LUMÉ
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Timeless style.
            <br />
            Effortless confidence.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">

        <div className="h-96 overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
            alt="LUMÉ fashion"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Fashion made simple.
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            LUMÉ was created with a simple idea — fashion should feel
            effortless, confident, and timeless.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            We curate modern pieces that fit naturally into everyday life,
            combining clean design with a sense of understated elegance.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            From carefully selected essentials to statement pieces, every
            collection is designed to help you express your personal style.
          </p>
        </div>

      </div>

      {/* Philosophy */}
      <div className="border-y border-gray-200 bg-stone-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Our Philosophy
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl">
            Less noise. More style.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
            We believe great style does not need to be complicated.
            Thoughtful details, quality pieces, and confidence are all
            you need.
          </p>

        </div>
      </div>

      {/* Values */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">

        <div className="border-t border-black pt-5">
          <h3 className="text-xl font-semibold">
            Timeless
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Pieces designed to stay relevant beyond a single season.
          </p>
        </div>

        <div className="border-t border-black pt-5">
          <h3 className="text-xl font-semibold">
            Effortless
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Simple silhouettes that make everyday styling easy.
          </p>
        </div>

        <div className="border-t border-black pt-5">
          <h3 className="text-xl font-semibold">
            Confident
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Fashion that helps you feel comfortable being yourself.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About