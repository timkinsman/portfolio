import Timy from '@/assets/images/timy.svg?react';
import { FadeInSection } from '@/components/FadeInSection';
import { ContentLayout } from '@/components/Layout';
import { CV_GOOGLE_DRIVE_LINK } from '@/config';
import { RecentTrack } from '@/features/recentTrack';
import { ThemeToggle } from '@/features/theme';
import { Storage, storagePrefix } from '@/utils/storage';
import { Box, Flex, Heading, IconButton, Link, Paragraph } from '@nayhoo/components';
import { useLocalStorage } from 'usehooks-ts';

export const Landing = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    `${storagePrefix}${Storage.theme}`,
    'dark'
  );

  return (
    <ContentLayout description="React front-end developer based in Adelaide">
      <Flex align="center" gap="6">
        <FadeInSection
          css={{
            display: 'none',
            '@bp2': {
              display: 'block',
            },
            fill: '$secondary',
            flexShrink: 0,
            height: '277px',
          }}
        >
          <Timy style={{ height: '100%' }} />
        </FadeInSection>

        <FadeInSection>
          <Flex gap="6" direction="column">
            <Flex align="center" gap="2" justify="between" wrap="wrap">
              <Heading size="3">Tim Kinsman</Heading>

              <Flex gap="2">
                <IconButton
                  onClick={() => window.open('https://github.com/timkinsman', '_blank')}
                  size="2"
                >
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

                <ThemeToggle theme={theme} setTheme={setTheme} />
              </Flex>
            </Flex>

            <Box>
              <Paragraph>Hi! I'm a React front-end developer based in Adelaide.</Paragraph>

              <Paragraph css={{ mt: '$sizes$3' }}>
                I work at{' '}
                <Link color="secondary" href="https://www.eatclub.com.au/" target="_blank">
                  EatClub
                </Link>{' '}
                and on a number of projects, including{' '}
                <Link color="secondary" href="https://www.github.com/nayhoo/ui" target="_blank">
                  Nayhoo
                </Link>
                , a collection of{' '}
                <Link color="secondary" href="https://react.dev/" target="_blank">
                  React
                </Link>{' '}
                hooks, utils and components built with{' '}
                <Link color="secondary" href="https://www.radix-ui.com/" target="_blank">
                  Radix UI
                </Link>{' '}
                and{' '}
                <Link color="secondary" href="https://stitches.dev/" target="_blank">
                  Stitches
                </Link>{' '}
                intended for personal use.{' '}
                <Link color="secondary" href={CV_GOOGLE_DRIVE_LINK} target="_blank">
                  CV
                </Link>
                .
              </Paragraph>

              <Paragraph css={{ mt: '$sizes$3' }}>
                You can contact me through{' '}
                {/* <Link
              color="secondary"
              href="https://discordapp.com/users/355321462032171009/"
              target="_blank"
            >
              Discord
            </Link>
            ,{' '} */}
                <Link
                  color="secondary"
                  href="https://www.linkedin.com/in/timkinsman"
                  target="_blank"
                >
                  LinkedIn
                </Link>{' '}
                or at{' '}
                <Link color="secondary" href="mailto:tkinsm@gmail.com" target="_blank">
                  tkinsm@gmail.com
                </Link>
                .
              </Paragraph>
            </Box>

            <Box>
              <RecentTrack />
            </Box>
          </Flex>
        </FadeInSection>
      </Flex>
    </ContentLayout>
  );
};
