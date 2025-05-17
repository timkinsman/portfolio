import { ContentLayout } from "@/components/layouts/content-layout";
import { BlogPosts } from "@/features/blog/components/posts";

export const metadata = {
  title: "Blog | Tim Kinsman",
};

export default function Page() {
  return (
    <ContentLayout>
      <BlogPosts />
    </ContentLayout>
  );
}
