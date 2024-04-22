import { RouterProvider } from "react-router-dom";
import "./styles/App.scss";
import { Router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
