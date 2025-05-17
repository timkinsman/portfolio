import { BlogPost } from "@/features/blog/utils";
import { Heading } from "@nayhoo/ui/heading";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { Separator } from "@nayhoo/ui/separator";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";
import React from "react";
import { ContentLayout } from "./content-layout";

type BlogLayoutProps = {
  children: React.ReactNode;
  blogPost: BlogPost;
};

export const BlogLayout = ({ children, blogPost }: BlogLayoutProps) => {
  // const blogPosts = getBlogPosts();

  return (
    <ContentLayout>
      <section>
        <Heading>{blogPost.metadata.title}</Heading>

        <Paragraph style={{ marginTop: theme.space[4] }}>
          {blogPost.metadata.summary}
        </Paragraph>

        <Text size="1" color="subtle" style={{ marginTop: theme.space[5] }}>
          {blogPost.metadata.publishedAt} • {blogPost.readingTime}
        </Text>
      </section>

      <Separator />

      <section>{children}</section>

      <Separator />

      <section>{/* other blogs */}</section>
    </ContentLayout>
  );
};
