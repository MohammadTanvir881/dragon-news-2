import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
        <div className="container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;