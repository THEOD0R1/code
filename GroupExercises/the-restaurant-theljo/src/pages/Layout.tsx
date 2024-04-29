import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export const Layout = () => {
  return (
    <>
      <main>
        <header>
          <Navigation />
        </header>
        <Outlet />
      </main>
    </>
  );
};
