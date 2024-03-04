import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import Error from "./routes/Error.jsx";
import EasyLevel from "./routes/EasyLevel.jsx";
import MediumLevel from "./routes/MediumLevel.jsx";
import HardLevel from "./routes/HardLevel.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
  },
  {
    path: "/easy",
    element: <EasyLevel />,
  },
  {
    path: "/intermediate",
    element: <MediumLevel />,
  },
  {
    path: "/hard",
    element: <HardLevel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
