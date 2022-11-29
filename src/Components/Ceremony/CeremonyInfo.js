import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import "../../Styles/Carousel.css";


const CeremonyInfo = () => {
  return (
    <div className='ceremonyContainer'>
    <Card style={{ width: '25rem', margin: 'auto', marginBottom: '32px', marginTop: '32px' }}>
    {/* <Card.Img variant="top" src={require("../../images/thomson.JPG")} /> */}
    <div id='carouselDiv'>
        <div className='carouselContainer'>
    <Carousel className='carousel' fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 500 }}
        src={require("../../images/ring.jpg")}
        alt="First slide"
      />
      <Carousel.Caption id='carouselCaptionWhite'>
        <h3 className='carouselCaptionHeader'>Ceremony</h3>
        <p>Thomson Farms Cider & Winery</p>
        <p>4057 Third Line West</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 500 }}
        src={require("../../images/brandimatt.jpg")}
        alt="Second slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">Ceremony</h3>
        <p>Will start at 3p.m. sharp</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 398, }}
        src={require("../../images/brandimatt2.jpg")}
        alt="Third slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">Ceremony</h3>
        <p>
          Drinking game of the day will be every time Brandi yells
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
    <Card.Body>
      <Card.Title>Ceremony</Card.Title>
      <Card.Text>
        Brandi and Matt have chosen a great location for the ceremony. If you have any questions please reach out.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Location: Thomson Farms Cider & Winery</ListGroup.Item>
      <ListGroup.Item>Address: 4057 Third Line West, Sault Ste Marie, P6A 5K8</ListGroup.Item>
      <ListGroup.Item>Start Time: 3:00 p.m. </ListGroup.Item>
    </ListGroup>
    <Card.Body style={{display: 'flex', justifyContent: 'center'}}>
      <Card.Link className='cardLinks' href="/">Home Page</Card.Link>
      <Card.Link className='cardLinks' href="https://www.thomsonfarms.ca/" target="_blank">Thomson Farms</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CeremonyInfo
