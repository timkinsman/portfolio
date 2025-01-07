import { ContentLayout } from "@/components/layouts/ContentLayout";
import { Box, Button, Heading, Paragraph, sprinkles, theme } from "@nayhoo/ui";
import NextLink from "next/link";

const NotFoundPage = () => {
  return (
    <ContentLayout>
      <Box
        className={sprinkles({
          paddingTop: {
            initial: 5,
            xs: 7,
          },
        })}
        style={{ textAlign: "center" }}
      >
        <Heading
          level="1"
          style={{ marginTop: theme.space[6], marginBottom: theme.space[6] }}
        >
          404 - Not Found
        </Heading>

        <Paragraph
          style={{ marginTop: theme.space[4], marginBottom: theme.space[4] }}
        >
          Sorry, the page you are looking for does not exist.
        </Paragraph>

        <NextLink href="/" replace passHref>
          <Button>Go to Home</Button>
        </NextLink>
      </Box>
    </ContentLayout>
  );
};

export default NotFoundPage;
