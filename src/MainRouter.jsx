import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainOutlet from "./MainOutlet";
import Home from "./Homepage/Home";
import Login from "./AuthenticationElements/Login";
import Signup from "./AuthenticationElements/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    errorElement: <h3>There is no page </h3>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
    ]
  },
]);

export default router ; 