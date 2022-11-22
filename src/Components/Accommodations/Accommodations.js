import React from 'react';
import Icon3 from '../../images/airbnb.jpeg';
import Icon2 from '../../images/gardens.jpeg';
import Icon1 from '../../images/quattro.jpeg';
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
        <a href="https://www.airbnb.ca/a/stays/Sault-Ste-Marie--Ontario--Canada?sem_brand_destination_erf=true&c=.pi0.pk355652324_64070011577&localized_ghost=true&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAz5IU_QCWml_dQ4m2iAbW_ch5UPfoWvPvjc6JymqPTDfR01hoXdbv8aAmXMEALw_wcB" target='_blank' rel='noreferrer'>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Air BNB</ServicesH2>
          <ServicesP>Looking for something other than a hotel. Check out airbnb.</ServicesP>
        </ServicesCard>
        </a>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
