import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import SubTittle from "../../components/SubTittle/SubTittle";
import aboutImg from "../../assets/images/bgImages/about_us.jpg"
import aboutImg2 from "../../assets/images/bgImages/image2.jpg"
import aboutImg3 from "../../assets/images/bgImages/image3.jpg"
import aboutImg4 from "../../assets/images/bgImages/image4.jpg"
import aboutImg5 from "../../assets/images/bgImages/image5.jpg"
import aboutImg6 from "../../assets/images/bgImages/image6.jpg"

const Sectors = () => {
    const sectorsInfo = [
        {
            id: 1,
            tittle: "Environment and Climate Change",
            imageUrl: aboutImg
        },
        {
            id: 2,
            tittle: "Education and Human Resources Development",
            imageUrl: aboutImg2
        },
        {
            id: 3,
            tittle: "Water Resources Management",
            imageUrl: aboutImg3
        },
        {
            id: 4,
            tittle: "Engineering and Urban and rural Infrastructure Development",
            imageUrl: aboutImg4
        },
        {
            id: 5,
            tittle: "Transport",
            imageUrl: aboutImg5
        },
        {
            id: 6,
            tittle: "Energy",
            imageUrl: aboutImg6
        }

    ]
    return (
        <div>
            <Helmet>
                <title>Sectors | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            <div className="py-10 bg-gray-200">
                <div className="w-11/12 mx-auto">
                    <SubTittle subTittleText="Sectors"></SubTittle>
                    <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            sectorsInfo.map(data => (<div key={data.id} className="h-72">
                                <img src={data.imageUrl} className="rounded h-full w-full border border-gray-400 cursor-pointer" />
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectors;