import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Zoo } from "./pages/Zoo";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/zoo",
        element: <Zoo />,
      },
      {
        path: "/animal/:animalId",
        element: <Animal />,
      },
    ],
  },
]);
