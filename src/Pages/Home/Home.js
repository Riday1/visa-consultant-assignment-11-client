import React from 'react';
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import AboutUs from '../../components/AboutUs/AboutUs';
import ProfessionalTeam from '../../components/ProfessionalTeam/ProfessionalTeam';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - kopa visa consultant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ProfessionalTeam></ProfessionalTeam>
        </div>
    );
};

export default Home;