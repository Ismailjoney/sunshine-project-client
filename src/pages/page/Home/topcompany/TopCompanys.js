import React from 'react';
import { Link } from 'react-router-dom';
import companyone from '../../../../assets/companyone.jpg'

const TopCompanys = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-5">
            <figure><img src={companyone} alt="Movie" /></figure>
            <div className="card-body text-justify">
                <h2 className="card-title">Top It company</h2>
                <p>click the button and about of top IT company details</p>
                <div className="card-actions justify-end">
                    <Link to='/topcompanyinfo'>
                        <button className="btn btn-primary">Top Company</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopCompanys;