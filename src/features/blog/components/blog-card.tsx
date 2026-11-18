import { Badge } from "@nayhoo/ui/badge";
import { Box } from "@nayhoo/ui/box";
import { Card } from "@nayhoo/ui/card";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";
import Link from "next/link";
import { BlogPost } from "../utils";

export type BlogCardProps = {
  blogPost: BlogPost;
};

export const BlogCard = ({ blogPost }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blogPost.slug}`} passHref>
      <Card>
        <Heading as="h4">{blogPost.metadata.title}</Heading>
        <Box
          display="flex"
          gap="2"
          style={{ marginTop: theme.space[2] }}
          wrap="wrap"
        >
          {blogPost.metadata.tags?.split(",").map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </Box>

        <Text style={{ marginTop: theme.space[4] }}>
          {blogPost.metadata.summary}
        </Text>

        <Box style={{ marginTop: theme.space[4] }}>
          <Text size="1" color="subtle">
            {blogPost.metadata.publishedAt} • {blogPost.readingTime}
          </Text>
        </Box>
      </Card>
    </Link>
  );
};
