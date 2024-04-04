import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const location = useLocation();
    console.log(location)

    const navigate = useNavigate();

    const {logIn}= useContext(AuthContext);
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            {
                location?.state ? navigate(location.state) : navigate('/')
            }
            
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
  return (
    <div className="mt-5 min-h-[calc(100vh-100px)] flex flex-col ">
      <Navbar></Navbar>
      <div className="flex flex-col md:w-1/2 rounded-xl md:mx-auto p-5 mt-10 bg-gray-100 ">
        <h1 className="text-3xl mt-14 font-semibold border-b-2 border-gray-500 w-full md:w-3/4 mx-auto text-center pb-10">Login </h1>

        <form  onSubmit={handleLogin} className="mt-10 mb-10 text-start w-full md:w-3/4 mx-auto">

            <div className="space-y-2 mb-5">
            <label htmlFor="email" className="text-xl  font-semibold"> Email Address</label> <br />
            <input className="w-full py-3 rounded pl-3 text-sm " required type="email" name="email" id="" placeholder="Enter your email address"/>
            </div>
            <div className="space-y-2 mb-6">
            <label htmlFor="password" className="text-xl  font-semibold">Password</label> <br />
            <input className="w-full py-3 rounded pl-3 text-sm " required type="password" name="password" id="" placeholder="Enter your password"/>
            </div>
            <button className="btn bg-gray-800 hover:bg-black text-white font-semibold w-full">Login</button>
              <div className="text-center my-3">
                 <p>Do not have a account? <Link to='/register' className=" text-blue-500">Register</Link></p>
              </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
