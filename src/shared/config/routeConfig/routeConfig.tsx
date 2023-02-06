import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: RouteProps[] = [
  { path: routesPath.main, element: <MainPage /> },
  { path: routesPath.about, element: <AboutPage /> },
];
