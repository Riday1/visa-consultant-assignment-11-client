import React from 'react';
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import ProfessionalTeam from '../../components/ProfessionalTeam/ProfessionalTeam'
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;