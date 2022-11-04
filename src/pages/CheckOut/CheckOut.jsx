import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        console.log(name);
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        console.log(order);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('Order placed successfully')
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="text-4xl font-bold">{title}</div>
                <div className="text-2xl">Price: ${price}</div>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <input type="text" name='firstName' placeholder='First Name' className='p-3 border border-gray-700 mr-3 mb-3' />
                        <input type="text" name='lastName' placeholder='last Name' className='p-3 border border-gray-700 mr-3 mb-3' />
                        <input type="number" name='phone' placeholder='Phone Number' className='p-3 border border-gray-700 mr-3 mb-3' />
                        <input type="email" name='email' placeholder='Email' className='p-3 border border-gray-700 mr-3 mb-3' defaultValue={user?.email} readOnly />
                    </div>
                    <textarea name="message" id="" cols="30" rows="5" className='w-full border border-gray-700 p-3 mr-3'></textarea>
                    <input type="submit" value="Order" className='font-bold bg-orange-600 px-5 py-2 text-white cursor-pointer' />
                </form>
            </section>
        </div>
    );
};

export default CheckOut;