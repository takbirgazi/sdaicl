import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import global from "../../assets/images/bgImages/map.jpg"


const Global = () => {
    return (
        <div>
            <Helmet>
                <title>Global | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto">
                    <img src={global} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Global;