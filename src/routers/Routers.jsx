import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import AboutUs from './../pages/AboutUs/AboutUs';
import Home from './../pages/Home/Home';
import OurTeam from './../pages/OurTeam/OurTeam';
import Sectors from './../pages/Sectors/Sectors';
import Projects from './../pages/Projects/Projects';
import Global from './../pages/Global/Global';
import Careers from './../pages/Careers/Careers';
import Contact from './../pages/Contact/Contact';
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/ourTeam",
                element: <OurTeam></OurTeam>
            },
            {
                path: "/sectors",
                element: <Sectors></Sectors>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/globalReach",
                element: <Global></Global>
            },
            {
                path: "/careers",
                element: <Careers></Careers>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;