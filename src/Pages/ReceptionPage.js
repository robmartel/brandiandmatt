import React, {useState} from 'react'
import Reception from '../Components/Reception/Reception';
import ScrollToTop from '../Components/ScrollToTop';
import NavBarPages from '../Components/NavbarPages/NavbarPages';
import SidebarPages from '../Components/Sidebar/SidebarPages';
import Footer from '../Components/Footer/Footer';

const ReceptionPage = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <ScrollToTop />
        <SidebarPages isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <Reception />
        <Footer />
        </>
    );
};

export default ReceptionPage;





