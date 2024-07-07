import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import career from "../../assets/images/bgImages/career.jpg"


const Careers = () => {
    return (
        <div>
            <Helmet>
                <title>Careers | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto flex md:flex-row flex-col gap-5 items-center">
                    <div className="md:w-1/2 w-full">
                        <img src={career} className="w-full rounded" />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <p className="text-gray-800 font-medium">We offer in-house and project-based positions. If you have a cosmopolitan view to develop your career in a challenging and international setting, send your CV to sdaicl2030@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;