
import { lazy, React } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(() => import("./pages/LoginPage/Login"));


export const ROUTES = {
  LOGIN: "/login",
  SIGNUP: '/signup'

};

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <Login />,
  },
  

]);
