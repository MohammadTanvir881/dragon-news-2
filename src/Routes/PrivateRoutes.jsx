import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <div className="min-h-screen flex items-center justify-center">
             <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoutes;