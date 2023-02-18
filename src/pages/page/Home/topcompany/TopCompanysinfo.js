import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopCompanyInfocard from './TopCompanyInfocard';

const TopCompanysinfo = () => {
    const datas = useLoaderData([])
    console.log(datas)
    return (
        <div>
            {
                datas.map(data => <TopCompanyInfocard
                key={data._id}
                data ={data}
                ></TopCompanyInfocard>)
            }
        </div>
    );
};

export default TopCompanysinfo;