import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-4xl'>This is Order page {order.length}</h1>
        </div>
    );
};

export default Orders;