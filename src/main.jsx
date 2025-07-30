import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { loader as rootLoader } from "./routes/rootLoader";
import { action as rootAction } from "./routes/rootAction";
import { loader as contactLoader } from "./routes/contactLoader";
import EditContact from "./routes/edit";
import { action as editAction } from "./routes/editAction";
import { action as destroyAction } from "./routes/destroy"; // Import the destroy action

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
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader, // fetch contact data for editing
        action: editAction, // handle form submission for editing
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction, // handle form submission for destroying
        errorElement: <div>Oops! There was an error.</div>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
