import * as React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}