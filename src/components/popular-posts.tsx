import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/lib/post-types';

type PopularPostsProps = {
  posts: Post[];
};

export function PopularPosts({ posts }: PopularPostsProps) {
  return (
    <section className="mt-16 border-t border-black/10 pt-12">
      <h3 className="font-serif text-3xl">Popular Posts</h3>
      <div className="mt-7 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-3">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={380}
                height={240}
                className="h-44 w-full object-cover"
              />
            </Link>
            <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.12em] text-accent">
              {post.category}
            </span>
            <h4 className="font-serif text-2xl leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h4>
            <p className="text-sm text-neutral-600">{post.tagline}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
