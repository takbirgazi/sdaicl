
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import PageTittle from '../../components/PageTittle/PageTittle';
import SubTittle from '../../components/SubTittle/SubTittle';
import { Fade } from 'react-awesome-reveal';
import { ColorRing } from 'react-loader-spinner';
// import jsonData from "../../../public/team.json";

const TeamModal = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [fullTeam, setFullTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    console.log(params.id);
    const currentId = parseInt(params.id) - 1;

    useEffect(() => {
        setIsLoading(true);
        fetch('../../../public/team.json')
            .then(res => res.json())
            .then(data => setFullTeam(data));
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
                    <div className='bg-gray-200 py-10'>
                        <div className='w-11/12 mx-auto'>
                            <SubTittle subTittleText="Our Team"></SubTittle>
                            <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 bg-gray-200">
                                {
                                    fullTeam.map(team => (<div key={team.id} className='flex flex-col items-center justify-center  rounded p-4 cursor-pointer'>
                                        <img src={team.imageUrl} className='h-52 w-64 rounded border m-4' />
                                        <h2 className='text-center py-4 font-bold text-xl text-gray-800 text-opacity-75'>{team.name}</h2>
                                        <p className='text-center font-semibold text-gray-800 text-opacity-75'>{team.deg}</p>
                                    </div>))
                                }

                                <dialog id="my_modal_4" className="modal" open>
                                    <Fade direction='up'>
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => navigate("/ourTeam")}>✕</button>
                                            </form>
                                            <div>
                                                <h3 className="font-bold text-lg border-b border-gray-400 py-4">{fullTeam[currentId]?.name} Details</h3>
                                                <p className="py-4">{fullTeam[currentId]?.desc}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TeamModal;

TeamModal.propTypes = {
    teamInfo: PropTypes.object
}