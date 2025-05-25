type Post = {
  slug: string;
  metadata: {
    updatedAt: string | Date;
  };
};

export function getAllPosts(): Post[] {
  // Implement your post fetching logic here
  // For now, return an empty array to make the sitemap work
  return [];
}