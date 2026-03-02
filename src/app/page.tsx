import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/date';
import { getAllPosts } from '@/lib/posts';

const categories = ['Fashion', 'Dating', 'Wellness', 'Travel', 'Career'];

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="pb-24">
      <section className="relative mt-4 overflow-hidden border-y border-black/10">
        <Image
          src="https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&w=2200&q=80"
          alt="City skyline background"
          width={2200}
          height={500}
          className="h-36 w-full object-cover sm:h-44"
        />
        <div className="absolute inset-0 bg-[#13254f]/45" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-center px-6">
          <div className="flex w-full flex-wrap justify-between gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="text-xl font-semibold uppercase tracking-wide text-white underline decoration-white/70 underline-offset-8 hover:text-[#f4dfdf]"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-10 px-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-5">
            <Link href={`/blog/${post.slug}`} className="group block overflow-hidden">
              <div className="relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={760}
                  height={520}
                  className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
                <h2 className="absolute left-5 top-5 max-w-[90%] font-serif text-4xl leading-tight text-white">
                  {post.title}
                </h2>
              </div>
            </Link>

            <p className="text-3xl font-serif leading-tight text-neutral-900">{post.tagline}</p>
            <p className="text-lg text-neutral-700">
              {post.category} • {formatDate(post.date)}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
