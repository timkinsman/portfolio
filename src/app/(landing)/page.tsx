import { ContentLayout } from "@/components/layouts/content-layout";
import { env } from "@/env.mjs";
import { RecentTrack } from "@/features/recent-track/components/recent-track";
import { Box } from "@nayhoo/ui/box";
import { Link } from "@nayhoo/ui/link";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { theme } from "@nayhoo/ui/theme";

export default function Page() {
  return (
    <ContentLayout title="Tim Kinsman">
      <Box>
        <Paragraph>
          Hi! I&apos;m a software engineer based in Adelaide.
        </Paragraph>

        <Paragraph style={{ marginTop: theme.space[3] }}>
          I work at{" "}
          <Link
            color="secondary"
            href="https://www.axcelerate.com/"
            target="_blank"
          >
            aXcelerate
          </Link>{" "}
          and on a number of{" "}
          <Link color="secondary" href="/projects">
            projects
          </Link>.
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
            href="mailto:timkinsman@proton.me"
            target="_blank"
          >
            timkinsman@proton.me
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
