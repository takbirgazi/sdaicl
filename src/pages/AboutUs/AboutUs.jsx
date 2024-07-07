import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import aboutImg from "../../assets/images/bgImages/about_us.jpg"


const AboutUs = () => {
    const tittleText = "Sustainable Development Alternatives";
    return (
        <div>
            <Helmet>
                <title>Home | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle={tittleText}></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
                    <div className="md:w-1/3 w-full py-2">
                        <img src={aboutImg} className="rounded h-[400px] w-full" />
                    </div>
                    <div className="md:w-2/3 w-full text-gray-600 flex flex-col gap-4 font-sans font-medium">
                        <p>Sustainable Development Alternatives is a registered professional service provider in the area of Environment, Education, and Engineering (3E). The core team of Sustainable Development Alternatives consists of professionals from diverse backgrounds and nationalities. Most of our team members are experienced in working internationally on projects funded by different governments and bilateral and multilateral development partners. The combination of a core team from different nationalities and different backgrounds enables us to provide services that maintain international standards and quality.</p>
                        <p>Being a consultancy firm based in the third world, we understand the ever-changing issues of the developing world. We offer sustainable and innovative solutions that reflect contemporary issues and cosmopolitan views. We consider the environment, society, and governance embedded in our development efforts. We believe educational reforms are a prior necessity for development. Thus, we prioritize educational sector development along with reforms in other areas.</p>
                        <p>We work to build liveable urban and rural areas that focus on building roads and bridges, improving transportation, managing waste, ensuring safe water, ensuring affordable and clean energy and public health. Our attempt is to protect biodiversity by safeguarding the environment and adopting climate change strategies and resilience. We are determined to achieve sustainable development for all, building on the principle of “living no one behind”. We think of ourselves as an alternative as we provide services that substitute sustainable development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;