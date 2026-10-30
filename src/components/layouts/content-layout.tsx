import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/nav";
import { Box } from "@nayhoo/ui/box";
import { Container } from "@nayhoo/ui/container";
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
          gap="6"
          direction="column"
          style={{ margin: "auto", width: "100%" }}
        >
          {title && <Header title={title} />}
          {children}
        </Box>
      </Container>
    </main>
  );
};
