import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Post, PostFrontmatter } from '@/lib/post-types';
export type { Post, PostFrontmatter } from '@/lib/post-types';
export { formatDate } from '@/lib/date';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(POSTS_DIR);
  const posts = filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(POSTS_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      return {
        ...(data as PostFrontmatter),
        slug,
        content
      };
    });

  return sortPosts(posts);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    ...(data as PostFrontmatter),
    slug,
    content
  };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null
  };
}

export function getCategories() {
  return Array.from(new Set(getAllPosts().map((post) => post.category)));
}
