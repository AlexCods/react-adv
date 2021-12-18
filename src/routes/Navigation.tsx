
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";

import { 
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstractation 
} from '../03-forms/pages';

import logo from '../logo.svg'
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" end>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" end>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" end>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" end>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" end>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" end>Dynamic Form</NavLink>
            </li>
            <li>
              <NavLink to="/users" end>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/register-formik" element={ <RegisterFormikPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-components" element={ <FormikComponents /> } />
          <Route path="/formik-abstractation" element={ <FormikAbstractation /> } />
          <Route path="/dynamic-form" element={ <DynamicForm /> } />
          <Route path="/" element={ <h1>Home</h1> } />
        </Routes>
      </div>
    </Router>
  );
}