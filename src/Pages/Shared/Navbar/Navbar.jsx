import { Link } from "react-router-dom";
// import dummyImg from "../../../assets/dummy-profile.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navItems = <>

        <li className="uppercase font-semibold"><Link>HOME</Link></li>
        <li className="uppercase font-semibold"><Link> Instructors</Link></li>
        <li className="uppercase font-semibold"><Link to = '/classes'> Classes</Link></li>
        {
        user &&
         <li className="uppercase font-semibold"><Link to = '/dashboard/'> Dashboard</Link></li>
        
        }
   
       

    </>

    const handleLogOut = () => {
        logOut()
        
            // .then(() => {

            // })
            // .catch(error => {
            //     console.log(error);
            // })
    }

    return (
        <>
            <div className="navbar bg-base-100 max-w-screen-xl  bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-400 rounded-box w-52">
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

                    {
                        user ? <>
                            <img className="rounded-full w-12 " src = {user?.photoURL} alt="" />
                            <Link onClick={handleLogOut} className="btn">Log Out</Link>
                        </> : <>
                            <Link to='/login' className="btn">Login</Link>
                        </>
                    }


                </div>
            </div>
        </>
    );
};

export default Navbar;