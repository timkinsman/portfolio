import { ExtractFnReturnType, QueryConfig, useQueryWithToast } from '@/lib/react-query';
import { PlexAPI } from '@lukehagar/plexjs';

export const getActiveSessions = () => {
  const plexAPI = new PlexAPI({
    accessToken: import.meta.env.VITE_PLEX_TOKEN,
    ip: import.meta.env.VITE_PLEX_IP,
    port: import.meta.env.VITE_PLEX_PORT,
    protocol: 'http',
  });

  const result = plexAPI.sessions.getSessions();
  return result;
};

type QueryFnType = typeof getActiveSessions;

type useActiveSessionsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useActiveSessions = ({ config }: useActiveSessionsOptions) => {
  return useQueryWithToast<ExtractFnReturnType<QueryFnType>>(
    ['activeSessions'],
    () => getActiveSessions(),
    config
  );
};
