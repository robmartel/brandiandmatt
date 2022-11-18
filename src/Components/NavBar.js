import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">Logo</NavLogo>
            {/*   <img src="" alt="" /> */}
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="ceremony" >Ceremony</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="reception" activeStyle>Reception</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="accommodations" activeStyle>Accommodations</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="registry" activeStyle>registry</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/rsvp">RSVP</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar
