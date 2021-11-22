
import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  Navigate,
} from "react-router-dom";



import logo from '../logo.svg'
import { routes } from './routes';

export const NavigationNew = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(route => (
                  <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ Component, path }) => (
                <Route key={path} path={path} element={<Component />} />
              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  );
}