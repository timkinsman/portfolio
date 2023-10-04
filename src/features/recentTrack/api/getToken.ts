import { axios } from '@/lib/axios';
import { SPOTIFY_AUTH } from '@/config';
import { useQuery } from 'react-query';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getToken = (): Promise<{
  access_token: string;
  expires_in: number;
  token_type: string;
}> => {
  return axios.post(`https://accounts.spotify.com/api/token`, 'grant_type=client_credentials', {
    headers: {
      Authorization: 'Basic ' + SPOTIFY_AUTH,
    },
  });
};

type QueryFnType = typeof getToken;

type useTokenOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useToken = ({ config }: useTokenOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['token'],
    queryFn: () => getToken(),
    ...config,
  });
};
