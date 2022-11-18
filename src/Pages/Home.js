import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection/HeroSection';
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
  </>
  )
}

export default Home
