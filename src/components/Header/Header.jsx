import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";
import "./Header.css"


const Header = () => {
    const links = <>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/">HOME</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/about">ABOUT US</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/ourTeam">OUR TEAM</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/sectors">SECTORS</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/projects">PROJECTS</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/globalReach">GLOBAL REACH</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/careers">CAREERS</NavLink></li>
        <li className="headerList font-semibold text-gray-200"><NavLink to="/contact">CONTACT</NavLink></li>
    </>

    return (
        <div className="bg-base-100 border-b py-4">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div className="navbar-start w-full lg:w-4/12 flex py-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[4] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <img src={logo} className="h-12" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex w-full lg:w-8/12">
                    <ul className="menu menu-horizontal flex gap-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;