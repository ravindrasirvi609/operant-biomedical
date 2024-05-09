 
'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import Portfolio from '@/components/portfolio/Portfolio';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



// export const metadata = {
//   title: "Portfolio Vixan - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;