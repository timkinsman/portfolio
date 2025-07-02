import { getBlogPosts } from "@/features/blog/utils";
import { Grid } from "@nayhoo/ui/grid";
import { BlogCard } from "./blog-card";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <Grid gap="4">
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
    </Grid>
  );
}
