import avatar from '@/assets/images/avatar.jpg';
import { Link } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { RecentTrack } from '@/features/recentTrack';
import { ThemeToggle } from '@/features/theme';

export const Landing = () => {
  return (
    <ContentLayout description="React front-end developer based in Adelaide">
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="flex gap-4 items-center">
          <img src={avatar} alt="GitHub avatar" className="h-9 w-9 rounded-full sm:h-10 sm:w-10" />
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Tim Kinsman</span>
          </h2>
        </div>

        <div className="flex gap-2 ">
          <a
            href="https://github.com/timkinsman"
            target="_blank"
            className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm  h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>

      <p className="mt-6">Hi! I'm a React front-end developer based in Adelaide.</p>

      <p className="mt-4">
        I work at{' '}
        <Link href="https://www.eatclub.com.au/" target="_blank">
          EatClub
        </Link>{' '}
        and on a number of projects, including{' '}
        <Link href="https://www.github.com/nayhoo/ui" target="_blank">
          Nayhoo
        </Link>
        , a collection of React components, hooks and utils built with Tailwindcss intended for
        personal use.{' '}
        <Link
          href="https://drive.google.com/file/d/1ZREsWjWJna2h76BrZoMFCW5ADpcxIpfd/view?usp=sharing"
          target="_blank"
        >
          CV
        </Link>
        .
      </p>

      <p className="mt-4">
        You can contact me through{' '}
        <Link href="https://discordapp.com/users/355321462032171009/" target="_blank">
          Discord
        </Link>
        ,{' '}
        <Link href="https://www.linkedin.com/in/timkinsman" target="_blank">
          LinkedIn
        </Link>{' '}
        or at{' '}
        <Link href="mailto:tkinsm@gmail.com" target="_blank">
          tkinsm@gmail.com
        </Link>
        .
      </p>

      <RecentTrack />
    </ContentLayout>
  );
};
