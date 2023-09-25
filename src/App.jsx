import HomePage, {GamePage } from './pages'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShearedLayOut } from './components';
import LoginPage from './pages/LoginPage';
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ShearedLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/game/:param1/",
        element: <GamePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
