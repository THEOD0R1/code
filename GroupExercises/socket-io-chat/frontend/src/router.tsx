import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SelectPage from "./pages/SelectPage";
import ChatPage from "./pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
        index: true,
      },
      {
        path: "/rooms",
        element: <SelectPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/chat/:room",
        element: <ChatPage />,
      },
    ],
  },
]);
