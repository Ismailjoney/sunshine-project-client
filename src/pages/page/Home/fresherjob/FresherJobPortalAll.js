import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FresherJobPortalAllDataCard from './FresherJobPortalAllDataCard';

const FresherJobPortalAll = () => {
    const fresherdatas = useLoaderData([])
   
    return (
        <div className='mr-5 ml-5 sm:m-0'>
            {
                fresherdatas.map(fresherdata => <FresherJobPortalAllDataCard
                key={fresherdata._id}
                fresherdata={fresherdata}
                ></FresherJobPortalAllDataCard>)
            }
        </div>
    );
};

export default FresherJobPortalAll;