import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllExprienceCardData from './AllExprienceCardData';

const ExprienceJobsAll = () => {
    const datas = useLoaderData([])
    return (
        <div>
            {
                datas.map(data => <AllExprienceCardData
                key={data._id}
                data ={data}
                ></AllExprienceCardData>)
            }
        </div>
    );
};

export default ExprienceJobsAll;