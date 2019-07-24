import { lazy } from 'react';

const Home = lazy(() => import('./components/Home'));
const Notes = lazy(() => import('./components/Notes'));

export const NoMatch = lazy(() => import('./components/NoMatch'));

interface RouteObj {
  name: string;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const routes: RouteObj[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Notes',
    path: '/notes',
    component: Notes,
  }
]
