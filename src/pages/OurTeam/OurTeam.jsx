import { Helmet } from "react-helmet-async";
import PageTittle from "../../components/PageTittle/PageTittle";
import SubTittle from './../../components/SubTittle/SubTittle';
import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true);
        fetch('https://sdaicl.com/team.json')
            .then(res => res.json())
            .then(data => setTeamMembers(data));
        setTimeout(() => {
            setIsLoading(false)
        }, 400);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Our Team | SDAICL</title>
            </Helmet>
            <PageTittle pageTittle="Sustainable Development Alternatives"></PageTittle>
            {
                isLoading ? <div className='bg-gray-200 py-10 min-h-screen w-full flex items-center justify-center'><ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                /></div> : <div>
                    <div className="py-10 bg-gray-200">
                        <div className="w-11/12 mx-auto">
                            <SubTittle subTittleText="Our Team"></SubTittle>
                            <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {
                                    teamMembers.map(info => (<TeamCard key={info.id} teamInfo={info}></TeamCard>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default OurTeam;