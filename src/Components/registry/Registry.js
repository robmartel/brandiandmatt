import React from 'react';
import { Container, Icon } from './RegistryElements';
import { GiCastle } from 'react-icons/gi';


const Registry = () => {
  return (
   
   <Container>
   <Icon to='/'>
            <GiCastle /> 
            </Icon>
    </Container>
  )
}

export default Registry
