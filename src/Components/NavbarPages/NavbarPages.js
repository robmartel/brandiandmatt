import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik'; 
import RsvpForm from '../../Components/rsvp/RsvpForm';
import { animateScroll as scroll } from 'react-scroll';
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

let activeStyle = {
  color: "rgb(207, 3, 252)",
  fontWeight: "bold",
  fontSize: "1.5rem",
  transitionDuration: "450ms",
  borderBottom: "5px solid rgb(207, 3, 252)",
};

let linkStyle = {
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1.5rem",
  height: "100%",
  marginTop: "0.5rem",
  cursor: "pointer",
}

  return (
    <>
    {/* the next line keeps the icons whatever color is in there */}
    <IconContext.Provider value={{ color: '#fff'}}>  
      <nav className='nav'>
        <div className='navbarContainer'>
            <NavLink className='navLogo' to="/" onClick={toggleHome}>
            <RiMickeyLine style={{color: isHovering ? 'red' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />  
            </NavLink>
            <div className='mobileIcon' onClick={toggle}>
                <FaBars />
            </div>
        <ul className='navMenu'>
            <li className='navItem'>
            <NavLink className='nav-link' 
            style={({isActive}) => isActive ? activeStyle : linkStyle} 
            to="/ceremony" 
            exact='true' 
            >Ceremony</NavLink>
            </li>
            <li className='navItem'>
            <NavLink className='nav-link' 
            style={({isActive}) => isActive ? activeStyle : linkStyle} 
            to="/reception" 
             exact='true' 
            >Reception</NavLink>
            </li>
            <li className='navItem'>
            <NavLink className='nav-link' 
            style={({isActive}) => isActive ? activeStyle : linkStyle} 
            to="/accommodations" 
             exact='true'
            >Accommodations</NavLink>
            </li>
            <li className='navItem'>
            <NavLink className='nav-link' 
            style={({isActive}) => isActive ? activeStyle : linkStyle} 
            to="/registry" 
             exact='true'
            >Registry</NavLink>
            </li>
            <li className='navItem'>
            <NavLink className='nav-link'
            style={({isActive}) => isActive ? activeStyle : linkStyle} 
            to="/stagDoe" 
             exact='true'
            >Stag and Doe</NavLink>
            </li>
        </ul>
        <nav className='navBtn'>
            <NavLink className='navBtnLink' onClick={handleShow}>RSVP</NavLink>
        </nav>

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

        </div>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBarPages