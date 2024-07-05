import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo';
import ReviewContainer from '../../components/ReviewContainer/ReviewContainer';

const ServiceDetails = () => {


    const { serviceData, reviews } = useLoaderData()

    console.log(serviceData, reviews)
    return (
        <section>
            <ServiceInfo serviceData={serviceData}></ServiceInfo>
            <ReviewContainer reviews={reviews}></ReviewContainer>
        </section>
    );
};

export default ServiceDetails;