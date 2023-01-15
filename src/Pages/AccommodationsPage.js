import React, {useState} from 'react'
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import AccommodationsPages from '../Components/Accommodations/AccommodationsPages';
import Footer from '../Components/Footer/Footer';
import SidebarPages from '../Components/Sidebar/SidebarPages';

const AccommodationsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <AccommodationsPages />
        <Footer />
        </>
    );
};

export default AccommodationsPage;