import {createBrowserRouter} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Shared/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
         element: <Menu></Menu>
          },
        {
          path: 'order/:category',
         element: <PrivateRoute><Order></Order></PrivateRoute>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path:'signup',
            element: <SignUp></SignUp>
          }
      ]
    },
  ]);

  