import React from 'react'
import { FaBars } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarPagesElements';

const NavBarPages = ({toggle}) => {

const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <>
    {/* the next line keeps the icons whatever color is in there */}
    <IconContext.Provider value={{ color: '#fff'}}>  
      <Nav>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
            <RiMickeyLine />  
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="/ceremony" 
             exact='true' 
            >Ceremony</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/reception" 
             exact='true' 
            >Reception</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/accommodations" 
             exact='true'
            >Accommodations</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/registry" 
             exact='true'
            >Registry</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/rsvp">RSVP</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBarPages