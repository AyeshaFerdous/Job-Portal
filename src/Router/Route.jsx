import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Auth/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path : '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;