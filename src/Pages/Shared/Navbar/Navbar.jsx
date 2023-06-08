import { Link } from "react-router-dom";
import dummyImg from "../../../assets/dummy-profile.png"


const Navbar = () => {

    const navItems = <>

        <li className="uppercase font-semibold"><Link>HOME</Link></li>
        <li className="uppercase font-semibold"><Link> Instructors</Link></li>
        <li className="uppercase font-semibold"><Link> Classes</Link></li>
        <li className="uppercase font-semibold"><Link> Dashboard</Link></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 max-w-screen-xl fixed z-10 bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className=" text-xl uppercase font-semibold text-orange-600">muz sports</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <img className="rounded-full w-12 " src = {dummyImg} alt="" />
                    <Link className="btn">Log Out</Link>
                    <Link to = '/login' className="btn">SignIn</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;