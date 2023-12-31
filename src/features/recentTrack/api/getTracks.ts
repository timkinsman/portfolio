import { axios } from '@/lib/axios';
import { Results } from '../types';
import { ExtractFnReturnType, QueryConfig, useQueryWithToast } from '@/lib/react-query';

export const getTracks = ({
  access_token,
  artist,
  track,
}: {
  artist: string;
  track: string;
  access_token: string;
}): Promise<{ tracks: Results }> => {
  return axios.get(`https://api.spotify.com/v1/search`, {
    params: {
      limit: '1',
      q: `${artist} ${track}`,
      type: 'track',
    },
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });
};

type QueryFnType = typeof getTracks;

type UseTracksOptions = {
  access_token: string;
  artist: string;
  config?: QueryConfig<QueryFnType>;
  track: string;
};

export const useTracks = ({ access_token, artist, config, track }: UseTracksOptions) => {
  return useQueryWithToast<ExtractFnReturnType<QueryFnType>>(
    ['tracks'],
    () => getTracks({ access_token, artist, track }),
    config
  );
};
