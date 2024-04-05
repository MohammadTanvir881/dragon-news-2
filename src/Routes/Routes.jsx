import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/OtherPage/Home";
import Login from "../Pages/OtherPage/Login";
import Register from "../Pages/OtherPage/Register";
import NewsDetails from "../Pages/OtherPage/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/OtherPage/About";
import Career from "../Pages/OtherPage/Career";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=>fetch('/news.json')
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/about",
                element: <PrivateRoutes><About></About></PrivateRoutes>
            }
            ,
            {
                path:"/career",
                element: <PrivateRoutes><Career></Career></PrivateRoutes>
            }
            ,
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path : "/news/:id",
                element : <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader : ()=>fetch('/news.json')
                
            }
        ]
    }
])
export default router;