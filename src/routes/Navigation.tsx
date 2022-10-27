import { Suspense } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Appbar from '../components/Appbar/Appbar';

import { routes } from './routes';

export const Navigation = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <Appbar routes={routes} />
      <Routes>
        {
          routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))
        }
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
