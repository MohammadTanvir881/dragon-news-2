import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import Latest from "./Latest";
import News from "./News";


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-5">
                 <div className="md:col-span-1 ">
                     <LeftSideNav></LeftSideNav>
                 </div>
                 <div className="md:col-span-2 ">
                     <h1 className="text-3xl font-bold">Dragon news home</h1>
                     {
                        data.map(news => <News key={news._id} news={news}></News>)
                     }
                 </div>
                 <div className="md:col-span-1 ">
                    <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Home;