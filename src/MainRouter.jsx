import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainOutlet from "./MainOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    errorElement: <h3>There is no page </h3>,
    children:[
      {
        
      }
    ]
  },
]);

export default router ; 