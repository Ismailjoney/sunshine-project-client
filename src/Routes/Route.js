import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../FormInfo/Login';
import SingUp from '../FormInfo/SingUp';
import Main from '../layout/Main';
import ApplyNow from '../pages/applyhere/ApplyNow';
import About from '../pages/page/About/About';
import ContactUs from '../pages/page/contact/ContactUs';
import ExprienceJobsAll from '../pages/page/Home/Expriencejob/ExprienceJobsAll';
import ExprienceJobsLimited from '../pages/page/Home/Expriencejob/ExprienceJobsLimited';
import FresherJobPortal from '../pages/page/Home/fresherjob/FresherJobPortal';
import FresherJobPortalAll from '../pages/page/Home/fresherjob/FresherJobPortalAll';
import Home from '../pages/page/Home/Home/Home';
import TopCompanyDetails from '../pages/page/Home/topcompany/TopCompanyDetails';
import TopCompanysinfo from '../pages/page/Home/topcompany/TopCompanysinfo';
import PrivetRoute from './privetRoute/PrivetRoute';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            },
            {
                path:'/fresherjobportal',
                element:<FresherJobPortal></FresherJobPortal>,
                loader : () => (fetch(`http://localhost:5000/fresherjobs`))
            },
            {
                path:'/fresherjobportalall',
                element:<FresherJobPortalAll></FresherJobPortalAll>,
                loader : () => (fetch(`http://localhost:5000/fresheralljobs`))
            },
            //exprience job
            {
                path:'/expriencesjobs',
                element:<ExprienceJobsLimited></ExprienceJobsLimited>,
                loader : () => (fetch(`http://localhost:5000/expriencejob`))
            },
            {
                path:'/expriencejobsall',
                element:<ExprienceJobsAll></ExprienceJobsAll>,
                loader:() => ((fetch`http://localhost:5000/expriencejobs`))
            },
            {
                path: '/topcompanyinfo',
                element:<TopCompanysinfo></TopCompanysinfo>,
                loader: () =>(fetch(`http://localhost:5000/topcompany`))
            },
            {
                path:'/topcompanydetails',
                element:<TopCompanyDetails></TopCompanyDetails>,
                loader: () =>(fetch(`http://localhost:5000/topcompany`))
            },
            {
                path:'/applynow',
                element:  <PrivetRoute><ApplyNow></ApplyNow></PrivetRoute>,
            }
        ]
    }
])

 