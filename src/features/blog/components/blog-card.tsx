import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { Text } from "@nayhoo/ui/text";
import { sprinkles, theme } from "@nayhoo/ui/theme";
import Link from "next/link";
import { BlogPost } from "../utils";

export type BlogCardProps = {
  blogPost: BlogPost;
};

export const BlogCard = ({ blogPost }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blogPost.slug}`} passHref>
      <Card>
        <Flex>
          <div>
            <Heading level="4">{blogPost.metadata.title}</Heading>

            {/* TODO: blog tags / categories */}
            {/* <Flex
            gap="2"
            className={sprinkles({
              marginTop: {
                initial: 2,
              },
            })}
            wrap="wrap"
          >
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </Flex> */}

            <Paragraph
              className={sprinkles({
                marginTop: 4,
              })}
              style={{ fontSize: theme.fontSizes[2] }}
            >
              {blogPost.metadata.summary}
            </Paragraph>

            <div
              className={sprinkles({
                marginTop: 5,
              })}
            >
              <Text size="1" color="subtle">
                {blogPost.metadata.publishedAt} • {blogPost.readingTime}
              </Text>
            </div>
          </div>

          {/* TODO: images? */}
          {/* <div>
            <img src={blogPost.metadata.image} />
          </div> */}
        </Flex>
      </Card>
    </Link>
  );
};
