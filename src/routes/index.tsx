import { useRoutes } from 'react-router-dom';

import { Landing, NotFound } from '@/features/misc';

import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <NotFound /> },
  ];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
