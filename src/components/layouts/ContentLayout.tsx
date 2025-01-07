import { Container, Flex } from "@nayhoo/ui";
import * as React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <Flex align="center" className="h-screen">
      <Container size="2" style={{ width: "100%", padding: "1rem" }}>
        {children}
      </Container>
    </Flex>
  );
};
