import { getBlogPosts } from "@/features/blog/utils";
import { Box } from "@nayhoo/ui/box";
import { BlogCard } from "./blog-card";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <Box display="grid" gap="4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }

          return 1;
        })
        .map((post) => (
          <BlogCard key={post.slug} blogPost={post} />
        ))}
    </Box>
  );
}
