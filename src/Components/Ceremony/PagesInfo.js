import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import "../../Styles/Carousel.css";



const PagesInfo = ({ headline, headlineDescription, location, address, startTime, startTimeSharp, linkLabel1, linkLabel2, link1, link2, img1, img2, img3 }) => {
  return (
    <div className='carouselWrapper'>
      <h1 className='carouselPageTitle'>{headline}</h1>
    <div className='carouselContainer1'>
    <Card style={{ width: '25rem', maxHeight: 'vh-100', margin: 'auto', marginBottom: '32px', marginTop: '32px' }}>
    <div id='carouselDiv'>
        <div className='carouselContainer'>
    <Carousel className='carousel' fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300 }}
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption id='carouselCaptionWhite'>
        <h3 className='carouselCaptionHeader'>{headline}</h3>
        <p>{location}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300 }}
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">{headline}</h3>
        <p>{startTimeSharp}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 300, }}
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">{headline}</h3>
        <p>
          Any pictures that you take we kindly ask that you post and tag #brandiandmatt2023
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
    <Card.Body className='carouselBody'>
      <Card.Title>{headline}</Card.Title>
      <Card.Text>
        {headlineDescription}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{location}</ListGroup.Item>
      <ListGroup.Item>{address}</ListGroup.Item>
      <ListGroup.Item>{startTime} </ListGroup.Item>
    </ListGroup>
    <Card.Body className='carouselLinks' style={{display: 'flex', justifyContent: 'center'}}>
      <NavLink className='cardLinks' href='/'>{linkLabel1}</NavLink>
      <NavLink className='cardLinks' href={link2} target="_blank">{linkLabel2}</NavLink>
    </Card.Body>
  </Card>
  </div>
  </div>
  )
}

export default PagesInfo
