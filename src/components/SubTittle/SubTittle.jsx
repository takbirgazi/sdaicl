
import { PropTypes } from 'prop-types';

const SubTittle = ({ subTittleText }) => {
    return (
        <div className='flex items-center justify-center py-5'>
            <h2 className='font-bold text-black text-opacity-75 text-4xl flex items-center justify-center'><div className='border-t-2 border-black px-36 relative flex items-center justify-center'><span className='absolute bg-gray-200 px-2 -top-6 py-0 flex items-center justify-center'>{subTittleText}</span></div></h2>
        </div>
    );
};

export default SubTittle;

SubTittle.propTypes = {
    subTittleText: PropTypes.string
}