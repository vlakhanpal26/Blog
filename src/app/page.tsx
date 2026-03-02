import Link from 'next/link';

const categories = ['Fashion', 'Dating', 'Wellness', 'Travel', 'Career'];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-24">
      <section className="text-center">
        <p className="font-serif text-5xl tracking-wide sm:text-6xl">Morning Pages</p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-neutral-600">
          Personal essays on style, love, and growing into the life that feels like yours.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-xs uppercase tracking-[0.24em] text-neutral-500">Browse by Category</h2>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="rounded-2xl border border-black/10 px-6 py-10 text-center font-serif text-2xl hover:border-accent hover:text-accent"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
