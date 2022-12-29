import Main from "../Layout/Main";
import Login from "../Login/Login";
import AddTask from "../pages/AddTask";
import CompletedTask from "../pages/CompletedTask";
import Home from "../pages/Home";
import MyTask from "../pages/MyTask";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addtask',
                element:<AddTask></AddTask>
            },
            {
                path:'/mytask',
                element:<MyTask></MyTask>
            },
            {
                path:'/completedtask',
                element:<CompletedTask></CompletedTask>
            }
        ]
    }
    
])

export default router;