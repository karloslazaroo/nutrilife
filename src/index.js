import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import AdminPage from "./components/AdminPage/AdminPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "adminpage",
    element: <ProtectedRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="karloslazaroo.us.auth0.com"
      clientId="s18h0o0NR7VPIjInXChbzW3jI6q8fqic"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/adminpage",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
