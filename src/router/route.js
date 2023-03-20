import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import QualityAssurance from '../views/sQualityAssurance';
import Cloud from '../views/sCloud';
import IT from '../views/IT';
import AI from '../views/AI';

const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <IndividualService />,
        to: '/individualService'
    },
    {
        components: <AboutUs />,
        to: '/aboutUs'
    },
    {
        components: <ProjectDetails />,
        to: '/projectDetails'
    },
    {
        components: <SMediaService />,
        to: '/sMediaService'
    },
    {
        components: <QualityAssurance />,
        to: '/qualityAssurance'
    },
    {
        components: <Cloud />,
        to: '/cloud'
    },
    {
        components: <IT />,
        to: '/it'
    },
    {
        components: <AI />,
        to: '/ai'
    }
];

export default routes;