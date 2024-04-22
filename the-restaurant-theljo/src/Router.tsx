import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { BookingDetails } from "./pages/BookingDetails";
import { Booking } from "./pages/Booking";
import { BookingCompleted } from "./pages/BookingCompleted";

export const Router = createBrowserRouter([
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
        path: "/booking",
        element: <Booking />,
      },

      {
        path: "/admin/:bookingId",
        element: <BookingDetails />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/booking/completed",
        element: <BookingCompleted />,
      },
    ],
  },
]);
