import { baseUrl } from "@/app/sitemap";
import { BlogLayout } from "@/components/layouts/blog-layout";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/features/blog/utils";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const blogPosts = getBlogPosts();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blogPost = getBlogPosts().find((post) => post.slug === slug);

  if (!blogPost) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = blogPost.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${blogPost.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blogPost = getBlogPosts().find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogPost.metadata.title,
            datePublished: blogPost.metadata.publishedAt,
            dateModified: blogPost.metadata.publishedAt,
            description: blogPost.metadata.summary,
            url: `${baseUrl}/blog/${blogPost.slug}`,
            author: {
              "@type": "Person",
              name: "Tim Kinsman",
            },
          }),
        }}
      />
      <BlogLayout blogPost={blogPost}>
        <article className="prose">
          <CustomMDX source={blogPost.content} />
        </article>
      </BlogLayout>
    </section>
  );
}
