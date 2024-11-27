import React from 'react'
import defaultImage from '../Assets/logo.png'
import './sellercard.css'; 

const SellerCard = (props) => {
    const { data } = props;
    return (
        <div className='seller-container rounded-2 bg-light p-2 shadow'>
            <img className='seller-image w-100 rounded-2 object-fit-cover' src={data?.image ? data?.image : defaultImage} />
           <p className='py-2 text-break text-dark'>{data?.title.slice(0,10)}</p>

        </div>
    )
}

export default SellerCard
