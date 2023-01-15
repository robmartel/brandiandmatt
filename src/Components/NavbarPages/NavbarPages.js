import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik'; 
import RsvpForm from '../../Components/rsvp/RsvpForm';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarPagesElements';
import { NavLink } from 'react-router-dom';
import '../../Styles/NavBarPages.css';

const NavBarPages = ({toggle}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

const toggleHome = () => {
  scroll.scrollToTop();
}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    {/* the next line keeps the icons whatever color is in there */}
    <IconContext.Provider value={{ color: '#fff'}}>  
      <Nav>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
            <RiMickeyLine style={{color: isHovering ? 'red' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />  
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks  
            to="/ceremony" 
             exact='true' 
             activeClassName='text-red-600'
            >Ceremony</NavLinks>
            </NavItem>
            <NavItem >
            <NavLinks 
            to="/reception" 
             exact='true' 
            >Reception</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks 
            to="/accommodations" 
             exact='true'
            >Accommodations</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks  
            to="/registry" 
             exact='true'
            >Registry</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks 
            to="/stagDoe" 
             exact='true'
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
        <small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Please submit before January 3, 1249</small>
        <div>

<Formik
  className="bookingCredentials"
  component={RsvpForm}
/>
<small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Thank you, we look forward to getting your gift!</small>

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

export default NavBarPages