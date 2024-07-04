import React from 'react';
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import AboutUs from '../../components/AboutUs/AboutUs';
import ProfessionalTeam from '../../components/ProfessionalTeam/ProfessionalTeam';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ProfessionalTeam></ProfessionalTeam>
        </div>
    );
};

export default Home;