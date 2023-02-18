import React from 'react';
import { Link } from 'react-router-dom';
import exprience from '../../../../assets/exprience.png'

const Expriencejob = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-5">
            <figure><img src={exprience} alt="Movie" /></figure>
            <div className="card-body text-justify">
                <h2 className="card-title">Find A New job and build your career </h2>
                <p>Click the button and find your job and apply now</p>
                <div className="card-actions justify-end">
                    <Link to='/expriencesjobs'>
                        <button className="btn btn-primary">Watch</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Expriencejob;