"use client";

import { useCurrentlyListening } from "@/features/recent-track/api/get-currently-listening";
import { Box } from "@nayhoo/ui/box";
import { Link } from "@nayhoo/ui/link";
import { Skeleton } from "@nayhoo/ui/skeleton";
import { Text } from "@nayhoo/ui/text";
import { spin, theme } from "@nayhoo/ui/theme";

const Icon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{
      animation: `${spin} 1.5s linear infinite`,
    }}
  >
    <path d="M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-15.44 4.912c-.572-.401-1.07-.899-1.471-1.471l-3.691 1.641c.859 1.45 2.071 2.662 3.521 3.521l1.641-3.691zm7.44-4.912c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm4.603-5.08c-.859-1.451-2.071-2.663-3.522-3.522l-1.641 3.691c.572.401 1.07.899 1.472 1.471l3.691-1.64z" />
  </svg>
);

// TODO: could probs make the skeleton better DX for icons and text

export const RecentTrack = () => {
  const { isLoading, isSuccess, data } = useCurrentlyListening({});

  return (
    <Box display="flex" align="center" gap="2">
      <Skeleton loaded={!isLoading}>
        <div style={{ height: "24px", borderRadius: theme.radii[2] }}>
          <Icon />
        </div>
      </Skeleton>

      <Skeleton loaded={!isLoading}>
        <div
          style={{
            height: isLoading ? "12px" : "",
            borderRadius: theme.radii[2],
          }}
        >
          {isSuccess && data.data?.isCurrentlyListening ? (
            <Text color="subtle" size="3">
              Currently listening to {data.data.currentlyListening.track} by{" "}
              {data.data.currentlyListening.artist}.
            </Text>
          ) : (
            <Text>
              Probably listening to{" "}
              <Link
                href="https://www.youtube.com/watch?v=nJGUdo5PiTA"
                target="_blank"
              >
                Baths
              </Link>
              .
            </Text>
          )}
        </div>
      </Skeleton>
    </Box>
  );
};
