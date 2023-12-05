import spotifyMark from '@/assets/icons/spotify-mark.svg';
import { Link } from '@/components/Elements';
import { useToken } from '../api/getToken';
import { useTracks } from '../api/getTracks';
import { useRecentTracks } from '../api/getRecentTracks';
import { formatTrack } from '../utils';

const fallbackTrack = {
  artists: [{ name: 'Baths' }],
  name: 'Sunspell',
  uri: 'https://open.spotify.com/track/1nM9Jgm0oInPG0yKtcEQD0?si=a901014dfe37479a',
};

export const RecentTrack = () => {
  const token = useToken({});
  const recentTracks = useRecentTracks({});

  const access_token = token.data?.access_token;
  const recentTrack = recentTracks.data?.recenttracks.track[0];

  const tracks = useTracks({
    access_token: access_token ?? '',
    artist: recentTrack?.artist['#text'] ?? '',
    config: {
      enabled: !!access_token && !!recentTrack?.artist['#text'] && !!recentTrack?.name,
    },
    track: recentTrack?.name ?? '',
  });

  const track = tracks.data?.tracks.items[0];

  if (token.isLoading || recentTracks.isLoading || tracks.isLoading) {
    return (
      <div role="status" className="inline-flex gap-2 items-center mt-6 max-w-sm animate-pulse">
        <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
      </div>
    );
  }

  if (!token.data || !recentTracks.data || !tracks.data) return null;

  return (
    <div className="inline-flex gap-2 mt-6 items-center">
      <a
        href="https://open.spotify.com/user/31rr7rfdy3rqb5wfsf3ypy6dloby?si=8a2e37caa7c34156"
        target="_blank"
        className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm  h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center"
      >
        <img src={spotifyMark} alt="Spotify logo" className="h-6 w-6 dark:invert" />
      </a>
      <Link href={(track ?? fallbackTrack).uri} target="_blank">
        {formatTrack(track ?? fallbackTrack)}
      </Link>
    </div>
  );
};
