import { ContentLayout } from "@/components/layouts/content-layout";
import { Box, Button, Heading, Paragraph, theme } from "@nayhoo/ui";
import NextLink from "next/link";

const NotFoundPage = () => {
  return (
    <ContentLayout>
      <Box style={{ textAlign: "center" }}>
        <Heading level="1" style={{ marginBottom: theme.space[6] }}>
          404 - Not Found
        </Heading>

        <Paragraph style={{ marginBottom: theme.space[4] }}>
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
