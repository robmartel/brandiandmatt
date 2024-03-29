import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import RsvpForm from './rsvp/RsvpForm';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const NavBar = ({toggle}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

const [scrollNav, setScrollNav] = useState(false);

const changeNav =()=> {
  if(window.scrollY >= 80) {
    setScrollNav(true);
  } else {
    setScrollNav(false);
  }
}

useEffect(() => {
  window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <>
    {/* the next line keeps the icons whatever color is in there */}
    <IconContext.Provider value={{ color: '#fff'}}>  
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
            <RiMickeyLine style={{color: isHovering ? 'red' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>  
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="ceremony" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Ceremony</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="reception" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Reception</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="accommodations" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Accommodations</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="registry" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Registry</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="stagDoe" 
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Stag and Doe</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink onClick={handleShow}>RSVP</NavBtnLink>
        </NavBtn>
        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='modalHeader text-light' closeButton>
          <Modal.Title >RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
        <small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Please submit before June 1, 2023</small>
        <div>

<Formik
  className="bookingCredentials"
  component={RsvpForm}
/>
<small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Thank you!</small>

</div>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
