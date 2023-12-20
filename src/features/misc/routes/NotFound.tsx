import { Heading, Button, Flex } from '@nayhoo/components';
import { ContentLayout } from '@/components/Layout';

export const NotFound = () => {
  return (
    <ContentLayout title="404" description="React front-end developer based in Adelaide">
      <Flex align="center" direction="column" gap="4">
        <Heading size="3">404 Not found</Heading>

        <Button onClick={() => window.location.assign(window.location.origin)}>Home</Button>
      </Flex>
    </ContentLayout>
  );
};
