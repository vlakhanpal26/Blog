'use client';

import { useMemo, useState } from 'react';
import { PostCard } from '@/components/post-card';
import type { Post } from '@/lib/post-types';

type CategoryFilterProps = {
  posts: Post[];
  categories: string[];
  initialCategory?: string;
};

export function CategoryFilter({ posts, categories, initialCategory }: CategoryFilterProps) {
  const [active, setActive] = useState(initialCategory ?? 'All');

  const filtered = useMemo(() => {
    if (active === 'All') {
      return posts;
    }

    return posts.filter((post) => post.category === active);
  }, [active, posts]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === category
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-black/10 text-neutral-600 hover:border-accent/60 hover:text-accent'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-9">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
