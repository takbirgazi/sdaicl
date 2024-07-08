
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error | SDAICL</title>
            </Helmet>
            {/* <Header></Header> */}
            <div className='min-h-screen flex flex-col gap-5 items-center justify-center'>
                <h2 className='font-bold text-2xl '>404 | Page Not Found</h2>
                <NavLink to="/" className="px-6 py-2 bg-yellow-800 text-gray-200 font-bold rounded">Home</NavLink>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default ErrorPage;