import footer_bg from "../../assets/images/bgImages/footer_bg_image.jpg";
import PropTypes from 'prop-types';

const PageTittle = ({ pageTittle }) => {
    return (
        <div style={{ backgroundImage: `url(${footer_bg})` }} className="h-44 bg-no-repeat bg-cover bg-right-top">
            <div className="bg-black h-full bg-opacity-70">
                <div className="h-full w-11/12 mx-auto py-10 flex items-center justify-center">
                    <h2 className="font-bold text-gray-200 lg:text-5xl md:text-4xl text-3xl text-center">{pageTittle}</h2>
                </div>
            </div>
        </div>
    );
};

export default PageTittle;

PageTittle.propTypes = {
    pageTittle: PropTypes.string
}