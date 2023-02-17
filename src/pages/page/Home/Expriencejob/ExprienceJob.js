import React from 'react';
import exprience from '../../../../assets/exprience.png'

const Expriencejob = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-5">
            <figure><img   src={exprience} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Expriencejob;