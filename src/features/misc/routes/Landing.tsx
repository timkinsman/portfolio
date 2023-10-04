import avatar from '@/assets/images/avatar.jpg';
import { Link } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { RecentTrack } from '@/features/recentTrack';

export const Landing = () => {
  return (
    <ContentLayout description="React front-end developer based in Adelaide">
      <div className="flex gap-4 sticky top-0 py-2 bg-white mb-2">
        <img src={avatar} alt="GitHub avatar" className="h-9 w-9 rounded-full sm:h-10 sm:w-10" />
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Tim Kinsman</span>
        </h2>
      </div>

      <p className="mb-4">Hi! I'm a React front-end developer based in Adelaide.</p>

      <p className="mb-4">
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

      <p className="mb-4">
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
