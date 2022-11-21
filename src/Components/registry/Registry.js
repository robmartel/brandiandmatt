import React from 'react';
import { Container, Icon, RegistryPic, RegistryH1, ImgWrapper, Img, RegistryP, ImageLink, RegistryBtn, RegistryBtnLink } from './RegistryElements';
import { GiRose } from 'react-icons/gi';

const Registry = () => {
  return (
   
   <Container>
   <Icon to='/'>
            <GiRose /> 
            </Icon>
            <RegistryPic src={require('../../images/brandimatt.jpg')} alt='two people'>

            </RegistryPic>
            <RegistryH1>Registry</RegistryH1>
            <ImgWrapper>
            <ImageLink to="https://www.amazon.ca/wedding/brandi-martel-mathieu-jacques-sault-ste-marie-july-2023/registry/3KP05CJKWV1KU" target="-blank" rel="external">
            <Img src={require('../../images/amazon.png')} alt='image' />
            </ImageLink>
            <RegistryP>Click <ImageLink to="https://www.amazon.ca/wedding/brandi-martel-mathieu-jacques-sault-ste-marie-july-2023/registry/3KP05CJKWV1KU" target="-blank" rel="external">here</ImageLink>, or
 on the image for Brandi and Matt's Registry Page</RegistryP>
            </ImgWrapper>
            <RegistryBtn>
              <RegistryBtnLink to="/rsvp">RSVP</RegistryBtnLink>
            </RegistryBtn>

    </Container>
  )
}

export default Registry
