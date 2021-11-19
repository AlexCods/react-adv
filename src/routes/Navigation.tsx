import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";

import logo from "../logo.svg";

import { LazyPage1 } from "../01-lazyload/pages";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {/* <Route path="*" element={<LazyPage1 />} /> */}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
