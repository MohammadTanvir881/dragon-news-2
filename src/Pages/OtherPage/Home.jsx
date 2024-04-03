import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import Latest from "./Latest";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 gap-5">
                 <div className="md:col-span-1 border">
                     <LeftSideNav></LeftSideNav>
                 </div>
                 <div className="md:col-span-2 border">
                     <h1 className="text-3xl font-bold">News are shown here</h1>
                 </div>
                 <div className="md:col-span-1 border">
                    <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Home;