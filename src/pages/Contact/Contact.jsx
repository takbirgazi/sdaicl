import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";

import { FaRegMap } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto">
                    <div className="py-10">
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="md:w-2/3 w-full flex flex-col gap-3 items-center justify-center shadow-sm py-4 px-8 bg-gray-100">
                                <p className="border-2 border-yellow-500 border-dashed rounded-full p-4"><FaRegMap className="text-3xl text-yellow-500" /></p>
                                <h2 className="text-2xl font-bold text-gray-800 text-opacity-80">Our Address</h2>
                                <p className="text-gray-800 text-opacity-80 text-center">House No: 29, Road No. 32, Dhanmondi, Dhaka, Bangladesh</p>
                            </div>
                            <div className="md:w-1/3 w-full flex flex-col gap-3 items-center justify-center shadow-sm py-4 px-8 bg-gray-100">
                                <p className="border-2 border-yellow-500 border-dashed rounded-full p-4"><MdOutlineMailOutline className="text-3xl text-yellow-500" /></p>
                                <h2 className="text-2xl font-bold text-gray-800 text-opacity-80">Email Us</h2>
                                <p className="text-gray-800 text-opacity-80">sdaicl2030@gmail.com</p>
                            </div>
                            <div className="md:w-1/3 w-full flex flex-col gap-3 items-center justify-center shadow-sm py-4 px-8 bg-gray-100">
                                <p className="border-2 border-yellow-500 border-dashed rounded-full p-4"><IoCallOutline className="text-3xl text-yellow-500" /></p>
                                <h2 className="text-2xl font-bold text-gray-800 text-opacity-80">Call Us</h2>
                                <div>
                                    <p className="text-gray-800 text-opacity-80">+8801912151546</p>
                                    <p className="text-gray-800 text-opacity-80">+8801726270116</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 md:flex-row flex-col">
                        <div className="md:w-1/2 w-full border border-gray-400">
                            Content...
                        </div>
                        <div className="md:w-1/2 w-full bg-gray-100 border-gray-300 shadow-sm p-4">
                            Content...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;