import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/OtherPage/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>
            }
        ]
    }
])
export default router;