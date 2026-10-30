import { ContentLayout } from "@/components/layouts/content-layout";
import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";
import NextLink from "next/link";

const NotFoundPage = () => {
  return (
    <ContentLayout>
      <Box style={{ textAlign: "center" }}>
        <Heading level="1" style={{ marginBottom: theme.space[6] }}>
          404 - Not Found
        </Heading>

        <Text style={{ marginBottom: theme.space[4] }}>
          Sorry, the page you are looking for does not exist.
        </Text>

        <NextLink href="/" replace passHref>
          <Button>Go to Home</Button>
        </NextLink>
      </Box>
    </ContentLayout>
  );
};

export default NotFoundPage;
