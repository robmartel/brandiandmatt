import React, {useEffect, useState} from 'react'
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import NavBar from '../Components/NavBar'
import Services from '../Components/Accommodations/Accommodations';
import Sidebar from '../Components/Sidebar/Sidebar';
import Popups from '../Components/Popups';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setTimedPopup(true);
      }, 3000);
    }, []);

  return (
  <>
  <Popups trigger={timedPopup} setTrigger={setTimedPopup} />
  <Sidebar isOpen={isOpen} toggle={toggle} />
  <NavBar toggle={toggle} />
  <HeroSection />
  <InfoSection {...homeObjOne}/>
  <InfoSection {...homeObjTwo}/>
  <Services />
  <InfoSection {...homeObjThree}/>
  <InfoSection {...homeObjFour}/>
  <Footer />
  </>
  )
}

export default Home
