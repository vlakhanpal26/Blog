import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { AuthorCard } from '@/components/author-card';
import { mdxComponents } from '@/components/mdx-components';
import { PopularPosts } from '@/components/popular-posts';
import { formatDate, getAdjacentPosts, getAllPosts, getPostBySlug } from '@/lib/posts';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentPosts(slug);
  const popular = getAllPosts().slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-8">
      <Link
        href={`/blog?category=${encodeURIComponent(post.category)}`}
        className="inline-flex rounded-full bg-accent/15 px-4 py-1 text-xs uppercase tracking-[0.14em] text-accent"
      >
        {post.category}
      </Link>

      <header className="mx-auto mt-7 max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-6xl">{post.title}</h1>
        <p className="mt-6 text-sm text-neutral-500">
          {formatDate(post.date)} · Written by {post.author}
        </p>
      </header>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,680px)_1fr]">
        <div>
          <div className="mx-auto max-w-[680px]">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <nav className="mx-auto mt-16 flex max-w-[680px] justify-between gap-6 border-y border-black/10 py-6 text-sm">
            <div>
              {previous ? (
                <Link href={`/blog/${previous.slug}`} className="text-neutral-600 hover:text-accent">
                  ← {previous.title}
                </Link>
              ) : (
                <span className="text-neutral-300">No older post</span>
              )}
            </div>
            <div>
              {next ? (
                <Link href={`/blog/${next.slug}`} className="text-neutral-600 hover:text-accent">
                  {next.title} →
                </Link>
              ) : (
                <span className="text-neutral-300">No newer post</span>
              )}
            </div>
          </nav>

          <div className="mx-auto mt-12 max-w-[680px] lg:hidden">
            <AuthorCard name={post.author} website={post.authorWebsite} />
          </div>

          <div className="mx-auto max-w-[680px]">
            <PopularPosts posts={popular} />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <AuthorCard name={post.author} website={post.authorWebsite} />
          </div>
        </div>
      </div>
    </article>
  );
}
