import React, { useState } from 'react'
import Registry from '../Components/registry/Registry';
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import SidebarPages from '../Components/Sidebar/SidebarPages';
import Footer from '../Components/Footer/Footer';
   

const RegistryPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <Registry />
        <Footer />
        </>
    );
};

export default RegistryPage;