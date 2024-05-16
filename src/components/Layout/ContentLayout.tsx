import * as React from 'react';

import { Head } from '../Head';
import { Container, Flex } from '@nayhoo/components';

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const ContentLayout = ({ children, title, description }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <Flex align="center" className="h-screen">
        <Container className="px-4 py-12 sm:px-6 lg:py-16 lg:px-8" size="2" css={{ width: '100%' }}>
          {children}
        </Container>
      </Flex>
    </>
  );
};
