import SubTittle from "../../../components/SubTittle/SubTittle";
import { FaMountainCity } from "react-icons/fa6";
import "./Services.css";

const Services = () => {
    const projects = [
        {
            id: 1,
            projTittle: "Project Preparation",
            projIcon: <FaMountainCity className="z-10 m-2 text-7xl text-[#52565e]" />
        },
        {
            id: 2,
            projTittle: "Project Management",
            projIcon: <FaMountainCity className="z-10 m-2 text-7xl text-[#52565e]" /> 
        }
    ]
    return (
        <div>
            <div className="py-5 bg-gray-200">
                <div className="w-11/12 mx-auto">
                    <SubTittle subTittleText="Services"></SubTittle>
                    <div className="py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            projects.map(proj => (<div key={proj.id} className="ChangeContainer shadow-md px-10 py-16 rounded cursor-pointer bg-gray-100">
                                <div className="relative rounded-full h-16 w-16 flex items-center justify-center">{proj.projIcon}<div className="bgChange h-10 w-10 bg-gray-300 rounded-full absolute right-0"></div></div>
                                <h2 className="text-xl font-bold text-[#52565e] text-opacity-80"><span className="borderChange border-b-4 border-gray-400 pb-2">{proj.projTittle}</span></h2>
                            </div>))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;