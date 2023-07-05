import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GettingStartedPage from "./pages/GettingStartedPage";
import ApplicationPage from "./pages/ApplicationPage";
import ReviewPage from "./pages/ReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GettingStartedPage />,
  },
  {
    path: "/application",
    element: <ApplicationPage />,
  },
  {
    path: "/review",
    element: <ReviewPage />,
    action: async ({ request }) => {
      const formData = await request.formData();

      return Object.fromEntries(formData);
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
