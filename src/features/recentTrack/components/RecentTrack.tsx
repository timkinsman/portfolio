import spotifyMark from '@/assets/icons/spotify-mark.svg';
import { Link } from '@/components/Elements';
import { useToken } from '../api/getToken';
import { useTracks } from '../api/getTracks';
import { useRecentTracks } from '../api/getRecentTracks';

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

  if (tracks.isLoading) {
    return null;
  }

  const track = tracks.data?.tracks.items[0];

  if (track === undefined) {
    return null;
  }

  return (
    <div className="inline-flex gap-2">
      <img src={spotifyMark} alt="Spotify logo" className="h-6 w-6" />
      <Link href={track.uri} target="_blank">
        {track.artists[0].name} - {track.name}
      </Link>
    </div>
  );
};
