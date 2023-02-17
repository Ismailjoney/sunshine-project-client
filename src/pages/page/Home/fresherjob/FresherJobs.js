import React from 'react';
import { Link } from 'react-router-dom';
import fresherone from '../../../../assets/fresherone.png'

const FresherJobs = () => {

    return (
        <div className=" card lg:card-side bg-base-100 shadow-xl lg:p-5">
            <figure><img src={fresherone} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <Link to='/fresherjobportal'>
                        <button className="btn btn-primary">Fresher Job</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FresherJobs;