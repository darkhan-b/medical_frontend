// router.tsx
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout"; 
import Profile from "./pages/ProfilePage/Profile";
import Results from "./pages/ResultsPage/Results";
import Users from './pages/Admin/Users'

const Login = lazy(() => import("./pages/LoginPage/Login"));
const SignUp = lazy(() => import("./pages/SignUpPage/SignUp"));

export const ROUTES = {
  MAIN: '/',
  LOGIN: "/login",
  SIGNUP: '/signup',
  PROFILE: '/profile',
  RESULTS: '/results',
  USERS: '/admin/users'
};

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignUp />,
  },
  {
    path: ROUTES.MAIN,
    element: <MainLayout />, 
    children: [
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.RESULTS,
        element: <Results />,
      },
      {
        path: ROUTES.MAIN,
        element: <div>Welcome! Select a page from the menu.</div>, 
      },
      {path: ROUTES.USERS,
        element: <Users/>
      }
    ],
  },
]);
