import React from 'react';
import { Link } from 'react-router-dom';

const TopCompanyInfocard = ({ data }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-5 m-10">
            <div className="card-body text-justify">
                <h2 className="card-title">{data.company_name}</h2>
                <p>{data.ceo}</p>
                <p>{data.description.length > 200 ? data.description.slice(0, 200) + '...' : data.description 
                     
                }</p>
                <span><Link to='/topcompanydetails'>see more</Link></span>
            </div>
        </div>
    );
};

export default TopCompanyInfocard;