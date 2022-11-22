import React from 'react';
import Icon1 from '../../images/thomson.JPG';
import Icon2 from '../../images/gardens.jpeg';
import Icon3 from '../../images/quattro.jpeg';
import '../../App.css'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './AccommodationsElements';

const Services = () => {
  return (
    <ServicesContainer id='accommodations'>
      <ServicesH1>Accommodations</ServicesH1>
      <ServicesWrapper>
        <a href="https://quattrossm.com/" target='_blank' rel='noreferrer'>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Quattro Hotel</ServicesH2>
          <ServicesP>
            There is a block booked off, for the wedding. 
          </ServicesP>
        </ServicesCard>
        </a>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Other Hotels</ServicesH2>
          <ServicesP>Here are some other hotels in the area.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Affordable Options</ServicesH2>
          <ServicesP>Here are some more affordable options.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
