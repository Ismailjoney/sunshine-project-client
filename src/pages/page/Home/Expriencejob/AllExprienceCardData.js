import React from 'react';
import { Link } from 'react-router-dom';

const AllExprienceCardData = ({ data }) => {
    const { job_name, job_time, job_description, job_location, skills, employes, logo } = data
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mr-10 lg:ml-10 mt-6">
            <figure><img className='w-30 h-30  ' src={logo} alt="Movie" /></figure>
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
                  <Link to ='/applynow'>
                  <button className="btn btn-outline btn-secondary">Apply Now</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default AllExprienceCardData;