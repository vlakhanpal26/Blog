import { CategoryFilter } from '@/components/category-filter';
import { getAllPosts, getCategories } from '@/lib/posts';

type BlogPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getAllPosts();
  const categories = getCategories();
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-14">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">The Journal</p>
        <h1 className="mt-3 font-serif text-5xl">Stories, Notes, and Rituals</h1>
      </header>
      <CategoryFilter posts={posts} categories={categories} initialCategory={params?.category} />
    </div>
  );
}
