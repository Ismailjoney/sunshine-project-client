import React from 'react';
import { Link } from 'react-router-dom';

const SpecificFresherCard = ({ fresherdata }) => {
    const { job_name, job_time, job_description, job_location, skills, employes } = fresherdata
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-2 lg:m-10">
            <div className="card-body">
                <h2 className="card-title">{job_name}</h2>
                <div className='text-justify'>
                    <p>Job Type :{job_time}</p>
                    <p>Location: {job_location}</p>
                    <p>employes :{employes}</p>
                    <p>Job Description :{job_description}</p>
                    <p>Skills :{skills}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to='/applynow'>
                        <button className="btn btn-outline btn-secondary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpecificFresherCard;