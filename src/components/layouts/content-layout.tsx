import { Container, Flex } from "@nayhoo/ui";

import { Header } from "@/components/ui/header";
import { Nav } from "@/components/ui/nav";
import * as React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <main className="h-screen">
      <Nav />

      <Container
        className="h-screen"
        size="2"
        style={{
          display: "flex",
          paddingTop: "9rem",
          paddingBottom: "9rem",
        }}
      >
        <Flex gap="6" direction="column" style={{ margin: "auto" }}>
          {title && <Header title={title} />}
          {children}
        </Flex>
      </Container>
    </main>
  );
};
