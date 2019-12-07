// https://reactjs.org/docs/code-splitting.html
import { lazy } from 'react';

import Home from './components/Home';
import Projects from './components/Projects';
import Notes from './components/Notes';

const Async = lazy(() => import('./components/Async'));  // lazy load
const Search = lazy(() => import('./components/Search'));
const Recorder = lazy(() => import('./components/Recorder'));
export { default as NoMatch } from './components/NoMatch';  // 404 route

// names are used as stable keys
interface RouteObj {
  name: string;
  path: string;
  component: (() => JSX.Element) | React.LazyExoticComponent<() => JSX.Element>;
}

export const routes: RouteObj[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects,
  },
  {
    name: 'Notes',
    path: '/notes',
    component: Notes,
  },
  {
    name: 'Space',
    path: '/space',
    component: Async,
  },
  {
    name: 'Pokemon',
    path: '/pokedex',
    component: Search,
  },
  {
    name: 'Vocaroo',
    path: '/voice',
    component: Recorder,
  }
]
