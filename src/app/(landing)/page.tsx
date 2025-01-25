import { ContentLayout } from "@/components/layouts";
import { env } from "@/env.mjs";
import { RecentTrack } from "@/features/recentTrack";
import { Box, Link, Paragraph, theme } from "@nayhoo/ui";

export default function Page() {
  return (
    <ContentLayout title="Tim Kinsman">
      <Box>
        <Paragraph>
          Hi! I&apos;m a React front-end developer based in Adelaide.
        </Paragraph>

        <Paragraph style={{ marginTop: theme.space[3] }}>
          I work at{" "}
          <Link
            color="secondary"
            href="https://www.eatclub.com.au/"
            target="_blank"
          >
            EatClub
          </Link>{" "}
          and on a number of projects, including{" "}
          <Link
            color="secondary"
            href="https://www.github.com/nayhoo/ui"
            target="_blank"
          >
            Nayhoo
          </Link>
          , a collection of{" "}
          <Link color="secondary" href="https://react.dev/" target="_blank">
            React
          </Link>{" "}
          hooks, utils and components built with{" "}
          <Link
            color="secondary"
            href="https://www.radix-ui.com/"
            target="_blank"
          >
            Radix UI
          </Link>{" "}
          and{" "}
          <Link
            color="secondary"
            href="https://vanilla-extract.style"
            target="_blank"
          >
            Vanilla Extract
          </Link>{" "}
          intended for personal use.{" "}
          <Link
            color="secondary"
            href={env.NEXT_PUBLIC_CV_GOOGLE_DRIVE_LINK}
            target="_blank"
          >
            CV
          </Link>
          .
        </Paragraph>

        <Paragraph style={{ marginTop: theme.space[3] }}>
          You can contact me through{" "}
          <Link
            color="secondary"
            href="https://www.linkedin.com/in/timkinsman"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          or at{" "}
          <Link
            color="secondary"
            href="mailto:tkinsm@gmail.com"
            target="_blank"
          >
            tkinsm@gmail.com
          </Link>
          .
        </Paragraph>
      </Box>

      <Box>
        <RecentTrack />
      </Box>
    </ContentLayout>
  );
}
