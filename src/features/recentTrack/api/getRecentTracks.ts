import { axios } from '@/lib/axios';
import { RecentTracks } from '../types';
import { LAST_FM_API_KEY, LAST_FM_USER } from '@/config';
import { ExtractFnReturnType, QueryConfig, useQueryWithToast } from '@/lib/react-query';

export const getRecentTracks = (): Promise<RecentTracks> => {
  return axios.get(`https://ws.audioscrobbler.com/2.0`, {
    params: {
      api_key: LAST_FM_API_KEY,
      format: 'json',
      limit: '1',
      method: 'user.getRecentTracks',
      nowplaying: 'true',
      user: LAST_FM_USER,
    },
  });
};

type QueryFnType = typeof getRecentTracks;

type UseRecentTracksOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useRecentTracks = ({ config }: UseRecentTracksOptions) => {
  return useQueryWithToast<ExtractFnReturnType<QueryFnType>>(
    ['recentTracks'],
    () => getRecentTracks(),
    config
  );
};
