import { PropTypes } from 'prop-types';
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectCard = ({ projectInfo }) => {
    const { projImg, projTittle, projDesc } = projectInfo;
    return (
        <div className="card  shadow-sm rounded-none">
            <figure className='max-h-[400px] max-w-[500px] flex items-center justify-center object-cover'>
                <img src={projImg} className='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-800 font-bold hover:text-yellow-500">{projTittle}</h2>
                <p className='my-5 text-gray-800'>{projDesc}</p>
                <div className="card-actions border-t border-gray-500">
                    <button className="py-5 font-bold hover:text-yellow-500 text-gray-800 flex gap-1 items-center justify-center"><span>Read More </span><HiArrowNarrowRight className='text-2xl'/> </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

ProjectCard.propTypes = {
    projectInfo: PropTypes.object
}