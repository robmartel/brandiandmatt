import React, { useState } from 'react'
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import SidebarPages from '../Components/Sidebar/SidebarPages';
import Footer from '../Components/Footer/Footer';
import StagDoe from '../Components/StagDoe/StagDoe';
import '../Styles/StagDoe.css';
   

const StagDoePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <StagDoe />
        <Footer />
        </>
    );
};

export default StagDoePage;