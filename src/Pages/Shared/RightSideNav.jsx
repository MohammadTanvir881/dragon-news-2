import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone from "../../assets/qZone1.png";
import qzone1 from "../../assets/qZone2.png";
import qzone2 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const RightSideNav = () => {
  const {googleProvider}= useContext(AuthContext);
  const provider = new GoogleAuthProvider()
  const handleLogin=()=>{
    
      googleProvider(provider)
      .then()
      .catch()
  }
  return (
    <div className="p-4">
      <div className="space-y-3 mb-6">
        <h1 className="text-2xl font-semibold">Login With :</h1>
        <button onClick={handleLogin} className="btn btn-outline w-full flex items-center">
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-full flex items-center">
          {" "}
          <FaGithub /> Login with GitHub
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <h1 className="text-2xl font-semibold mb-4">Find On Us:</h1>
        <a
          href="https://www.facebook.com/" target="_blank"
          className="text-xl font-medium border w-full flex rounded items-center gap-2 p-4 "
        >
          {" "}
          <FaFacebook className="text-2xl text-blue-500"></FaFacebook> Facebook
        </a>
        <a
          href="https://twitter.com/i/flow/login" target="_blank"
          className="text-xl rounded font-medium border w-full flex items-center gap-2 p-4 "
        >
          {" "}
          <FaTwitter className="text-2xl text-blue-500"></FaTwitter> Twitter
        </a>
        <a
          href="https://www.instagram.com/accounts/login/?source=auth_switcher" target="_blank"
          className="text-xl rounded font-medium border w-full flex items-center gap-2 p-4 "
        >
          {" "}
          <FaInstagram className="text-2xl text-pink-600"></FaInstagram>{" "}
          Instagram
        </a>
      </div>

      <div className="space-y-3 mb-6 p-4 bg-gray-100">
        <h1 className="text-2xl font-semibold">Q Zone</h1>
        <div className="flex flex-col  justify-center">
        <img className="border-2 p-2 mb-2 rounded border-dashed" src={qzone} alt="" />
        <img className="border-2 p-2 mb-2 rounded border-dashed" src={qzone1} alt="" />
        <img className="border-2 p-2 mb-2 rounded border-dashed" src={qzone2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
