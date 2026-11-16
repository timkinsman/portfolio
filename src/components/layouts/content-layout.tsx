import { Navigation } from "@/components/ui/nav";
import { Box } from "@nayhoo/ui/box";
import { Container } from "@nayhoo/ui/container";
import { Heading } from "@nayhoo/ui/heading";
import * as React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <main className="h-screen">
      <Navigation />

      <Container
        className="h-screen"
        size="2"
        style={{
          display: "flex",
          paddingTop: "9rem",
          paddingBottom: "9rem",
        }}
      >
        <Box
          display="flex"
          gap="5"
          direction="column"
          style={{ margin: "auto", width: "100%" }}
        >
          {title && <Heading>{title}</Heading>}
          {children}
        </Box>
      </Container>
    </main>
  );
};
