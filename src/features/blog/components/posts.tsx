import { getBlogPosts } from "@/features/blog/utils";
import { BlogCard } from "./blog-card";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
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
    </div>
  );
}
