"use client";

import { ThemeDropdown } from "@/features/theme/components/theme-dropdown";
import { ThemeToggle } from "@/features/theme/components/theme-toggle";
import { useScrollPosition } from "@nayhoo/hooks";
import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import { Container } from "@nayhoo/ui/container";
import { Flex } from "@nayhoo/ui/flex";
import { IconButton } from "@nayhoo/ui/icon-button";
import { Link as NayhooLink } from "@nayhoo/ui/link";
import { sprinkles, theme } from "@nayhoo/ui/theme";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV_HEIGHT = 48;

const navigation = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

export const Nav = () => {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 24;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const router = useRouter();

  const Navigation = () => (
    <Flex
      direction="column"
      justify="center"
      style={{ height: "100%", padding: theme.space[2] }}
    >
      <Box>
        {navigation.map((item) => {
          const isSelected = pathname === item.path;

          return (
            <Button
              fullWidth
              key={item.label}
              onClick={(e) => {
                e.stopPropagation();
                router.push(item.path);
              }}
              style={{
                justifyContent: "flex-start",
              }}
              variant={isSelected ? "primary" : "ghost"}
              size="3"
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </Flex>
  );

  return (
    <Box
      asChild
      className={sprinkles({
        paddingY: {
          initial: undefined,
          xs: isScrolled ? undefined : 2,
        },
      })}
      style={{
        backgroundColor: theme.semanticColors.background,
        borderBottom: "1px solid",
        borderColor: isScrolled ? theme.semanticColors.line : "transparent",
        position: "fixed",
        top: 0,
        transition: "border-color 0.4s, padding 0.4s",
        width: "100%",
        zIndex: theme.zIndices[1],
      }}
    >
      <nav>
        <Container
          size="2"
          style={{
            paddingBottom: theme.space[2],
            paddingTop: theme.space[2],
            width: "100%",
            height: NAV_HEIGHT,
          }}
        >
          <Flex align="center" gap="4" justify="between">
            <IconButton
              className={sprinkles({
                display: {
                  initial: "block",
                  xs: "none",
                },
              })}
              size="2"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              round
            >
              <div
                className={`${isDrawerOpen ? "open" : "closed"} burger-wrapper`}
              >
                <div className="hamburger" />
              </div>
            </IconButton>

            <Box
              className={sprinkles({
                display: {
                  initial: "none",
                  xs: "block",
                },
              })}
            >
              <Flex gap="4">
                {navigation.map((item) => {
                  const isSelected = item.path === pathname;

                  return (
                    <NayhooLink
                      key={item.label}
                      asChild
                      style={{ textDecoration: isSelected ? "underline" : "" }}
                    >
                      <Link href={item.path}>{item.label}</Link>
                    </NayhooLink>
                  );
                })}
              </Flex>
            </Box>

            <Flex gap="2">
              <Box
                className={sprinkles({
                  display: {
                    initial: "block",
                    xs: "none",
                  },
                })}
              >
                <ThemeDropdown />
              </Box>

              <Box
                className={sprinkles({
                  display: {
                    initial: "none",
                    xs: "block",
                  },
                })}
              >
                <ThemeToggle />
              </Box>

              <NayhooLink href="https://github.com/timkinsman" target="_blank">
                <IconButton round size="2">
                  <svg
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </IconButton>
              </NayhooLink>
            </Flex>
          </Flex>
        </Container>

        {isDrawerOpen && (
          <Box
            style={{
              backgroundColor: theme.semanticColors.background,
              borderTop: `1px ${theme.semanticColors.line} solid`,
              bottom: 0,
              left: 0,
              position: "fixed",
              right: 0,
              top: NAV_HEIGHT,
            }}
            className={sprinkles({
              display: {
                initial: "block",
                xs: "none",
              },
            })}
          >
            <Navigation />
          </Box>
        )}
      </nav>
    </Box>
  );
};
