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
        <a className="IconHome" href='/brandiandmatt/' onClick={toggleHome}>
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
            Stag and Doe - June 10, 2023 
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
  )
}

export default Footer
