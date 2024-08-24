import "./Style/Style.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Page/Home";
import Error from "./Components/Page/Error";
import AllRightsReserved from "./Components/Page/AllRightsReserved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/AllRightsReserved",
    element: <AllRightsReserved />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
