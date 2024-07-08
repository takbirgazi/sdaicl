import { Helmet } from "react-helmet-async";
import Services from "./Services/Services";
import Sectors from "./Sectors/Sectors";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | SDAICL</title>
            </Helmet>
            <div>
                <Carousel></Carousel>
                <Services></Services>
                <Sectors></Sectors>
            </div>
        </div>
    );
};

export default Home;