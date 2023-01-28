import React from 'react';

const Price = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Medium', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 }
    ];
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-200 p-12 text-white'>Best Deal of the Town</h2>
        </div>
    );
};

export default Price;