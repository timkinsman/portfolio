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
        <Container size="2" css={{ width: '100%', padding: '1rem' }}>
          {children}
        </Container>
      </Flex>
    </>
  );
};
