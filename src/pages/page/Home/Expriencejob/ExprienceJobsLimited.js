import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ExprienceJobLimitedcard from './ExprienceJobLimitedcard';

const ExprienceJobsLimited = () => {
    const datas = useLoaderData([])
    console.log(datas)
    return (
        <div>
            {
                datas.map(data => <ExprienceJobLimitedcard
                    key={data._id}
                    data={data}
                ></ExprienceJobLimitedcard>)
            }
            <Link to='/expriencejobsall'>
                <button className="btn btn-outline btn-secondary mt-5">Show All</button>
            </Link>
        </div>
    );
};

export default ExprienceJobsLimited;