import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import ProjectCard from "./ProjectCard";

import project1 from "../../assets/images/projects/project1.jpg"

const Projects = () => {
    const projects = [
        {
            id: 1,
            projImg: project1,
            projTittle: `Reaching Out of School Children (ROSC)`,
            projDesc: `Reaching Out of School Children (ROSC)`

        },
    ]
    return (
        <div>
            <Helmet>
                <title>Projects | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto">
                    <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            projects.map(info => (<ProjectCard key={info.id} projectInfo={info}></ProjectCard>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;