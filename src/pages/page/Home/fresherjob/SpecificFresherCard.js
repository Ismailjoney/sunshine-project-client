import React from 'react';

const SpecificFresherCard = ({ fresherdata }) => {
    const { job_name, job_time, job_description, job_location, skills, employes } = fresherdata
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-2 mt-5">
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
                    <button className="btn btn-outline btn-secondary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SpecificFresherCard;