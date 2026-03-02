import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/date';
import type { Post } from '@/lib/post-types';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="grid gap-5 border-b border-black/5 pb-8 sm:grid-cols-[180px_1fr]">
      <Link href={`/blog/${post.slug}`} className="overflow-hidden rounded-xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={360}
          height={240}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </Link>
      <div className="space-y-3">
        <Link
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-accent"
        >
          {post.category}
        </Link>
        <h2 className="font-serif text-3xl leading-tight text-neutral-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-neutral-500">{formatDate(post.date)}</p>
        <p className="max-w-2xl text-neutral-700">{post.excerpt}</p>
      </div>
    </article>
  );
}
