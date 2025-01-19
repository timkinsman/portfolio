"use client";

import { Flex, Link, Paragraph, Skeleton } from "@nayhoo/ui";
import { useCurrentlyListening } from "../api/getCurrentlyListening";

const Icon = () => (
  <svg
    fill="currentColor"
    id="cd"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-15.44 4.912c-.572-.401-1.07-.899-1.471-1.471l-3.691 1.641c.859 1.45 2.071 2.662 3.521 3.521l1.641-3.691zm7.44-4.912c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm4.603-5.08c-.859-1.451-2.071-2.663-3.522-3.522l-1.641 3.691c.572.401 1.07.899 1.472 1.471l3.691-1.64z" />
  </svg>
);

export const RecentTrack = () => {
  const currentlyListening = useCurrentlyListening({});

  if (currentlyListening.isLoading) {
    return (
      <Flex align="center" gap="2" role="status">
        <Skeleton variant="avatar2" />
        <Skeleton style={{ width: "12rem" }} />
      </Flex>
    );
  }

  if (currentlyListening.isSuccess) {
    if (currentlyListening.data.data?.isCurrentlyListening) {
      const { artist, track } = currentlyListening.data.data.currentlyListening;

      return (
        <Flex align="center" gap="2">
          <Flex>
            <Icon />
          </Flex>

          <Paragraph>
            Currently listening to {track} by {artist}.
          </Paragraph>
        </Flex>
      );
    }
  }

  return (
    <Flex align="center" gap="2">
      <Flex>
        <Icon />
      </Flex>

      <Paragraph>
        Probably listening to{" "}
        <Link
          color="secondary"
          href="https://www.youtube.com/watch?v=nJGUdo5PiTA"
          target="_blank"
        >
          Baths
        </Link>
        .
      </Paragraph>
    </Flex>
  );
};
