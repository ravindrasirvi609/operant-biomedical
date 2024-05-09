'use client'
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import TeamDetailsArea from '@/components/details/TeamDetailsArea';


// export const metadata = {
//   title: "Team Details Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TeamDetailsArea />
            <ServiceTeam />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;