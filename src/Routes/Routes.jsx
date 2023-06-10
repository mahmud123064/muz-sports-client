import {
    createBrowserRouter,
}
    from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/mySelectedClasses";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/classes',
                element:<Classes></Classes>
            
            }

        ]
    },
    {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: "myselectedclasses",
                element:<MySelectedClasses></MySelectedClasses>
            }
        ]
    }
]);

