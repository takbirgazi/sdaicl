
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TeamCard = ({ teamInfo }) => {
    const { id, name, deg, imageUrl } = teamInfo;
    const navigate = useNavigate();

    const clickHandler = (id) => {
        navigate(`/ourTeam/${id}`)
    }
 
    return (
        <div className='flex flex-col items-center justify-center  rounded p-4 cursor-pointer' onClick={() => clickHandler(id)}>
            <img src={imageUrl} className='h-52 w-64 rounded border m-4' />
            <h2 className='text-center py-4 font-bold text-xl text-gray-800 text-opacity-75'>{name}</h2>
            <p className='text-center font-semibold text-gray-800 text-opacity-75'>{deg}</p>
        </div>
    );
};

export default TeamCard;

TeamCard.propTypes = {
    teamInfo: PropTypes.object
}