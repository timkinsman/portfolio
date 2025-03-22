import { ContentLayout } from "@/components/layouts/content-layout";
import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Heading } from "@nayhoo/ui/heading";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { theme } from "@nayhoo/ui/theme";
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
