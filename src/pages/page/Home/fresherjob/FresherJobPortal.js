import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SpecificFresherCard from './SpecificFresherCard';

const FresherJobPortal = () => {
    const fresheerjobData = useLoaderData([])

    return (
        <div className='w-[1150px] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-1'>
            <div>
                {
                    fresheerjobData.map(fresherdata => <SpecificFresherCard
                        key={fresherdata._id}
                        fresherdata={fresherdata}
                    ></SpecificFresherCard>)
                }
                <Link to='/fresherjobportalall'>
                    <button className="btn btn-outline btn-secondary mt-4"> Show All</button>
                </Link>
            </div>

        </div>
    );
};

export default FresherJobPortal;