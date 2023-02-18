import React from 'react';
import Expriencejob from '../Expriencejob/ExprienceJob';
import FresherJobs from '../fresherjob/FresherJobs';
import TopCompanys from '../topcompany/TopCompanys';


const AllJobInfo = () => {
    return (
        <div className=' grid grid-cols-1 gap-4 lg:grid-cols-3 lg:m-10 sm:m-2 '>
            <div className=' grid grid-rows-1 gap-8 lg:grid-flow-row-1 col-span-2  '>
                <FresherJobs></FresherJobs>
                <Expriencejob></Expriencejob>
                <TopCompanys></TopCompanys>
            </div>
            <div className=' lg:p-5 text-justify'>
                <h2 className='text-3xl my-2 font-bold text-red-300'>It Jobs In Bangladesh</h2>
                In the era of advanced technology, it has become easy to make a career in ICT (Information and Communications Technology) and computing. As the field of Information and Technology has become common with time, finding IT jobs has become a little more challenging hence, for your convenience, we have enlisted all the new IT and Communication jobs on our website. You can search for the latest IT jobs in Bangladesh in whatever city you would like to work in; Sialkot, Lahore, Islamabad, Karachi, Multan, Faisalabad etc. Find all IT related jobs here on our website and apply now. Becoming an IT officer, manager or support is just one click away. Don’t wait anymore and sign up on our website and get the latest IT and Communication job.#
                <br /><br />
                <h2 className='text-3xl my-2 font-bold mt-8 text-red-300'>It Jobs In Bangladesh</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita veniam autem blanditiis? Maxime nihil ipsa dolorum aliquid. Sapiente maiores perspiciatis sint? Molestias quae ducimus dolorum, mollitia esse, reprehenderit quasi pariatur, commodi harum possimus maiores. Soluta nobis in quo neque facilis!</p>
            </div>
        </div>
    );
};

export default AllJobInfo;