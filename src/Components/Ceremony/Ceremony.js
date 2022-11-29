import React from 'react'
import CeremonyInfo from './CeremonyInfo';
import { infoObjOne, } from './Data';

const Ceremony = () => {
  return (
    <>
     <CeremonyInfo {...infoObjOne}/>
    </>
  )
}

export default Ceremony
