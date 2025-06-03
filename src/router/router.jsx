import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";
import AddFood from "../pages/addFood/AddFood";
import ManageMyFoods from "../pages/manageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/myFoodRequest/MyFoodRequest";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from "../routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index: true,
            Component:Home
        },
        {
            path: 'availableFoods',
            Component:AvailableFoods
        },
        {
            path: 'addFood',
            element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
        },
        {
            path: 'manageMyFoods',
            element:<PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>
        },
        {
            path: 'myFoodRequest',
            element:<PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>
        },
        {
            path: 'login',
            Component:Login
        },
        {
            path: 'register',
            Component:Register
        },
    ]
  },
]);

export default router;