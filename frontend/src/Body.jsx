import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Body;