import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingUp from '../FormInfo/SingUp';
import Main from '../layout/Main';
import About from '../pages/page/About/About';
import ContactUs from '../pages/page/contact/ContactUs';
import FresherJobPortal from '../pages/page/Home/fresherjob/FresherJobPortal';
import FresherJobPortalAll from '../pages/page/Home/fresherjob/FresherJobPortalAll';
import Home from '../pages/page/Home/Home/Home';

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
            }
        ]
    }
])

// const Route = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Route;