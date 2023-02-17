import React from 'react';
import Expriencejob from '../Expriencejob/ExprienceJob';
import FresherJobs from '../fresherjob/FresherJobs';
import TopCompanys from '../topcompany/TopCompanys';


const AllJobInfo = () => {
    return (
        <div className='w-[1150px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3  border'>
            <div className='border grid grid-rows-1 gap-8 lg:grid-flow-row-1 col-span-2 mt-5'>
                <FresherJobs></FresherJobs>
                <Expriencejob></Expriencejob>
                <TopCompanys></TopCompanys>
            </div>
            <div className='border lg:p-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita enim, ex consequuntur labore asperiores et deserunt. At repellendus nisi laborum aliquam debitis esse recusandae molestiae. Incidunt corporis itaque, nobis porro ex architecto veniam enim fuga vel officiis laborum est impedit cumque illum atque quis? Illo totam, fugit quam eos voluptate atque? Obcaecati illo amet fugit assumenda adipisci, nisi rerum atque. Odit vel voluptate, voluptas praesentium, autem vero aspernatur nemo nisi nam sequi facere voluptates ut recusandae possimus libero eos. Sit numquam illo aut eveniet minus reiciendis voluptatem necessitatibus repellendus, hic aliquid animi quod, sunt obcaecati aliquam aperiam, facere corporis.
            </div>
        </div>
    );
};

export default AllJobInfo;