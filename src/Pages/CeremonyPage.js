import React, {useState} from 'react'
import Ceremony from '../Components/Ceremony/Ceremony';
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import SidebarPages from '../Components/Sidebar/SidebarPages';
import Footer from '../Components/Footer/Footer';

const CeremonyPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <Ceremony />
        <Footer />
        </>
    );
};

export default CeremonyPage;