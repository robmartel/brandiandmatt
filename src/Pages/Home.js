import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection/HeroSection';
import { homeObjOne } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import NavBar from '../Components/NavBar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle} />
  <NavBar toggle={toggle} />
  <HeroSection />
  <InfoSection {...homeObjOne}/>
  </>
  )
}

export default Home
