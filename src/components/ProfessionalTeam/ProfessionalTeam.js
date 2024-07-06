import React, { useEffect, useState } from 'react';
import EmployeCard from '../EmployeCard/EmployeCard';


const ProfessionalTeam = () => {

    const [employes, setEmployes] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-ashen.vercel.app/employes')
            .then(res => res.json())
            .then(data => {
                setEmployes(data)
            })
    }, [])

    return (
        <section className='my-20'>

            <div className='my-10'>
                <p className='text-gray-400 text-lg text-center font-bold my-4'>Professionals</p>
                <h1 className='text-6xl font-bold text-indigo-500 text-center'> Experienced Professionals</h1>
            </div>
            <div className=' my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20'>
                {
                    employes.map(employe => <EmployeCard key={employe._id} employe={employe}></EmployeCard>)
                }
            </div>
        </section>
    );
};

export default ProfessionalTeam;
