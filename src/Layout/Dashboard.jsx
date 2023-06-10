import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart,FaWallet,FaHome,FaBook } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link><FaShoppingCart></FaShoppingCart> My Selected Classes</Link></li>
                        <li><Link><FaBook></FaBook>My Enrolled Classes</Link></li>
                        <li><Link><FaWallet></FaWallet>Payment History</Link></li>
                        <div className="divider"></div>
                        <li><Link to = '/'><FaHome></FaHome>HOME</Link></li>
                        <li><Link to = '/classes'><FaBook></FaBook>CLASSES</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;