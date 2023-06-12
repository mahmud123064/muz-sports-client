import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useSelectedClass from "../hooks/useSelectedClass";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [selectedClass] = useSelectedClass()

    // load data from server based on dynamic admin 
    const isAdmin = true;
    const isInstructor = false;
    return (
        <div>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-amber-800">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  bg-amber-800 text-base-content">
                        {/* Sidebar content here */}
                        <h3 className="text-center font-semibold text-2xl text-white mb-3">MUZ SPORTS</h3>

                        <div className="text-center mb-5 text-green-500">
                            <img className="mx-auto rounded-full w-16" src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                            <p>{user?.email}</p>

                        </div>
                        {/* ///////////// */}
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/'><FaBook></FaBook> Manage Classes
                                        {/* <span className="badge badge-secondary">+{selectedClass?.length || 0 }</span> */}
                                    </NavLink>
                                </li>
                                <li className="font-semibold"><NavLink to='/dashboard/manageusers'><FaUsers></FaUsers>Manage Users</NavLink></li>

                            </> : isInstructor ? <>
                                <li>
                                    <NavLink to='/dashboard/'><FaBook></FaBook> Add a Class</NavLink>
                                </li>
                                <li className="font-semibold"><NavLink to='/dashboard/'>My Classes</NavLink></li>

                            </> : <>
                                <li>
                                    <NavLink to='/dashboard/myselectedclasses'><FaShoppingCart></FaShoppingCart> My Selected Classes
                                        <span className="badge badge-secondary">+{selectedClass?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li className="font-semibold"><NavLink to='/dashboard/enrolledclasses'><FaBook></FaBook>My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                            </>
                        }
                        {/* ///////////// */}



                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>HOME</NavLink></li>
                        <li><NavLink to='/classes'><FaBook></FaBook>CLASSES</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;