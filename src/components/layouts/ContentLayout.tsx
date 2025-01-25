import { Container, Flex, theme } from "@nayhoo/ui";
import * as React from "react";
import { Header } from "../ui/header";
import { Nav } from "../ui/nav";

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <main className="h-screen">
      <Nav />

      <Container size="2" style={{ paddingTop: "9rem", paddingBottom: theme.space[6] }}>
        <Flex gap="6" direction="column">
          {title && <Header title={title} />}
          {children}
        </Flex>
      </Container>
    </main>
  );
};
