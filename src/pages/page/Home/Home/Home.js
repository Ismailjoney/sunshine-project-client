import React from 'react';
import AllJobInfo from '../AlljobInfo/AllJobInfo';
import Banner from '../Banner/Banner';
import HomeInformation from '../HomeInfo/HomeInformation';
 

const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <HomeInformation></HomeInformation>
              <AllJobInfo></AllJobInfo>
        </div>
    );
};

export default Home;