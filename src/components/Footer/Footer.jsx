import { NavLink } from "react-router-dom";
import footer_bg from "../../assets/images/bgImages/footer_bg_image.jpg";
import logo from "/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footer_bg})` }} className="h-96 bg-no-repeat bg-cover">
            <div className="bg-black h-full bg-opacity-70">
                <div className="w-11/12 mx-auto pt-20 pb-10 grid grid-cols-4 gap-5 border-b border-gray-400 ">
                    <div className=" pt-0 mt-0">
                        <img src={logo} className="h-20 rounded" />
                        <h2 className="text-3xl font-thin text-gray-200">Shaping Future</h2>
                    </div>
                    <div className="flex flex-col items-center pt-0 mt-0 ">
                        <ul className="flex gap-3 flex-col text-gray-200">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className=" pt-0 mt-0">
                        <h2 className="text-white font-bold text-2xl">Our Address</h2>
                        <p className="my-5 w-11/12 text-gray-200 font-semibold">House No: 29, Road No. 32, <br /> Dhanmondi, Dhaka, Bangladesh</p>
                        <ul className="text-gray-200 text-nowrap">
                            <li><span className="font-semibold">Phone:</span> +8801912151546</li>
                            <li><span className="font-semibold">Phone:</span> +8801726270116</li>
                            <li><span className="font-semibold">Email:</span> sdaicl2030@gmail.com</li>
                        </ul>
                    </div>
                    <div className=" pt-0 mt-0">
                        <h2 className="text-white font-bold text-2xl">Social Links</h2>
                        <div className="flex gap-3 mt-10">
                            <a href="#" className="bg-gray-500 bg-opacity-30 border border-gray-500 border-opacity-20 rounded p-2 hover:bg-yellow-600 "> <FaFacebook className="text-2xl text-white" /> </a>
                            <a href="#" className="bg-gray-500 bg-opacity-30 border border-gray-500 border-opacity-20 rounded p-2 hover:bg-yellow-600 "> <FaTwitter className="text-2xl text-white" /> </a>
                            <a href="#" className="bg-gray-500 bg-opacity-30 border border-gray-500 border-opacity-20 rounded p-2 hover:bg-yellow-600 "> <FaInstagram className="text-2xl text-white" /> </a>
                            <a href="#" className="bg-gray-500 bg-opacity-30 border border-gray-500 border-opacity-20 rounded p-2 hover:bg-yellow-600 "> <FaLinkedin className="text-2xl text-white" /> </a>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="text-center text-gray-200">© Copyright <a href="https://geosmartplanning.com.bd/" className="font-semibold">Geo Smart Planning</a>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;