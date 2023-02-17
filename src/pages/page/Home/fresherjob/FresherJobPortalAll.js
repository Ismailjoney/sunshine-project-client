import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FresherJobPortalAllDataCard from './FresherJobPortalAllDataCard';

const FresherJobPortalAll = () => {
    const fresherdatas = useLoaderData([])
   
    return (
        <div className='w-[1150px] mx-auto'>
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