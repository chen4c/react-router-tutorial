import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";
import { loader as rootLoader } from "./routes/rootLoader";
import { action as rootAction } from "./routes/rootAction";
import { loader as contactLoader } from "./routes/contactLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader, // fetch data before rendering
    action: rootAction, // handle form submissions
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader, // fetch contact data
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
