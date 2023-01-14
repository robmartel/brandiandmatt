import React from 'react';
import "../../Styles/Footer.css";
import { animateScroll as scroll } from 'react-scroll';
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import {  FaInstagram, } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <section className="footerSection">
    <footer className="footer">
      <section>
      
        <div className="iconsection">
        <a className="IconHome" href='/' onClick={toggleHome}>
                 <RiMickeyLine />
        </a>
          <a href="https://www.instagram.com/brandiandmatt2023/" target="_blank" rel="noreferrer" aria-label="Instagram" >
            <span className="Icon">
              <FaInstagram />
            </span>
          </a>
        </div>
        <div className="footerContainer">
          <div className="infoAddress">
            Questions?
            <br />
            <HiOutlineMail style={{ marginRight: "5px" }} />
            <a href="mailto:brandiandmatt2023@gmail.com">
              brandiandmatt2023@gmail.com
            </a>
            <br />
            <AiOutlinePhone style={{ marginRight: "5px" }} />
            <a href="tel:+7052976459">(705) 297-XXXX</a>
            <br />
            <HiOutlineLocationMarker style={{ marginRight: "5px" }} />
            Sault Ste. Marie, Ontario
            <br />
          </div>
          <div className="openDaysAndTime">
            Wedding Date - July 22, 2023
            <br />
            Other date - 
            <br />
            Tag us - #brandiandmatt2023
          </div>
        </div>
      </section>
      <section className="TermsAndConditions">
        <p>
           Rob Martel © {new Date().getFullYear()} All rights reserved. 
          
        </p>
      </section>
    </footer>
  </section>
    // <FooterContainer>
    //   <FooterWrap>
    //   <SocialMedia>
    //         <SocialMediaWrap>
    //             <SocialLogo to='/' onClick={toggleHome}>
    //             <RiMickeyLine />
    //             </SocialLogo>
                
    //             <WebsiteRights>Rob Martel © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
    //             <SocialIcons>
                    
    //                 <SocialIconLink href='https://www.instagram.com/brandiandmatt2023/' target="_blank" aria-label="Instagram" >
    //                 <FaInstagram />
    //                 </SocialIconLink>
    //             </SocialIcons>
    //         </SocialMediaWrap>
    //     </SocialMedia>
    //     <FooterLinksContainer>
    //         <FooterLinksWrapper>
    //             <FooterLinkItems>
    //                 <FooterLinkTitle>About Us</FooterLinkTitle>
    //                     <FooterLink to="/">Our Pets</FooterLink>
    //                     <FooterLink to="/">Favorite Movies</FooterLink>
    //                     <FooterLink to="/">Games</FooterLink>
    //                     <FooterLink to="/">Menu</FooterLink>
    //                     <FooterLink to="/">Gallery</FooterLink>
    //             </FooterLinkItems>
    //             <FooterLinkItems>
    //                 <FooterLinkTitle>Contact Us</FooterLinkTitle>
    //                     <FooterLink to="/">Contact</FooterLink>
    //                     <FooterLink to="/">Groomsman</FooterLink>
    //                     <FooterLink to="/">Bridal Party</FooterLink>
    //                     <FooterLink to="/">Parents of Groom</FooterLink>
    //                     <FooterLink to="/">Parents of Bride</FooterLink>
    //             </FooterLinkItems>
    //         </FooterLinksWrapper>
    //         <FooterLinksWrapper>
    //             <FooterLinkItems>
    //                 <FooterLinkTitle>Things to Do</FooterLinkTitle>
    //                     <FooterLink to="/">Restaurants </FooterLink>
    //                     <FooterLink to="/">Sites to Visit</FooterLink>
    //                     <FooterLink to="/">Beaches</FooterLink>
    //                     <FooterLink to="/">Shopping</FooterLink>
    //                     <FooterLink to="/">Golf</FooterLink>
    //             </FooterLinkItems>
    //             <FooterLinkItems>
    //                 <FooterLinkTitle>Check this out</FooterLinkTitle>
    //                     <FooterLink to="/">Funny pet videos</FooterLink>
    //                     <FooterLink to="/">Prank videos</FooterLink>
    //                     <FooterLink to="/">Cats Cats and more cats</FooterLink>
    //                     <FooterLink to="/">Motivation</FooterLink>
    //                     <FooterLink to="/">Donate to our local TAAG</FooterLink>
    //             </FooterLinkItems>
    //         </FooterLinksWrapper>
    //     </FooterLinksContainer>
    //   </FooterWrap>
    // </FooterContainer>
  )
}

export default Footer
