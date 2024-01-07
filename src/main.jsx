import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import ErrorPage from "./ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
