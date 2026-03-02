export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  authorWebsite: string;
  coverImage: string;
  tagline: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};
