import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import ErrorPage from "./ErrorPage/ErrorPage";
import Products from "./Products/Products";
import Gallery from "./Gallery/Gallery";
import Help from "./Help/Help";
import About from "./About/About";
import ProductDetails from "./ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products/:code",
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.code}`),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
