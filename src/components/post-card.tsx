import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/date';
import type { Post } from '@/lib/post-types';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="space-y-4 border-b border-black/10 pb-10">
      <Link href={`/blog/${post.slug}`} className="group block overflow-hidden">
        <div className="relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={980}
            height={640}
            className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
          <h2 className="absolute left-5 top-5 max-w-[90%] font-serif text-4xl leading-tight text-white">{post.title}</h2>
        </div>
      </Link>

      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.16em] text-accent">{post.category}</p>
        <p className="text-sm text-neutral-500">{formatDate(post.date)}</p>
        <p className="text-lg text-neutral-700">{post.excerpt}</p>
      </div>
    </article>
  );
}
