import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleServices from './SingleServices';

const Services = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='my-12'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='w-1/2 mx-auto my-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
                {
                    services.map(services => <SingleServices key={services._id} services={services} />)
                }
            </div>
        </div>
    );
};

export default Services;