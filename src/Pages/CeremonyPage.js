import React, {useState} from 'react'
import Ceremony from '../Components/Ceremony/Ceremony';
import ScrollToTop from '../Components/ScrollToTop';
import Sidebar from '../Components/Sidebar/Sidebar';
import NavBarPages from '../Components/NavbarPages/NavbarPages';

const CeremonyPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBarPages toggle={toggle} />
        <Ceremony />
        </>
    );
};

export default CeremonyPage;