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
          Hi! I&apos;m a front-end developer based in Adelaide.
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
            href="https://www.github.com/timkinsman/homemade-recipes"
            target="_blank"
          >
            Homemade Recipes
          </Link>
          , an extension of{" "}
          <Link
            color="secondary"
            href="https://vanilla-extract.style/documentation/packages/recipes/"
            target="_blank"
          >
            @vanilla-extract/recipes
          </Link>{" "}
          with responsive variants.{" "}
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
