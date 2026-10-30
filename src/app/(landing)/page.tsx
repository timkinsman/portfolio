import { ContentLayout } from "@/components/layouts/content-layout";
import { RecentTrack } from "@/features/recent-track/components/recent-track";
import { Box } from "@nayhoo/ui/box";
import { Link } from "@nayhoo/ui/link";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";

export default function Page() {
  return (
    <ContentLayout title="Tim Kinsman">
      <Box>
        <Text>Hi! I&apos;m a software engineer based in Adelaide.</Text>

        <Text style={{ marginTop: theme.space[3] }}>
          I work at{" "}
          <Link
            color="primary"
            href="https://www.axcelerate.com/"
            target="_blank"
          >
            aXcelerate
          </Link>{" "}
          and on a number of{" "}
          <Link color="primary" href="/projects">
            projects
          </Link>
          .
        </Text>

        <Text style={{ marginTop: theme.space[3] }}>
          You can contact me through{" "}
          <Link
            color="primary"
            href="https://www.linkedin.com/in/timkinsman"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          or at{" "}
          <Link
            color="primary"
            href="mailto:timkinsman@proton.me"
            target="_blank"
          >
            timkinsman@proton.me
          </Link>
          .
        </Text>
      </Box>

      <Box>
        <RecentTrack />
      </Box>
    </ContentLayout>
  );
}
