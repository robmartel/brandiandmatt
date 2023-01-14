import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import Icon1 from '../../images/quattro.jpeg';
import Icon2 from '../../images/microtel.jpeg';
import Icon3 from '../../images/airbnb.jpeg';
import '../../Styles/AccommodationsPages.css';


const AccommodationsPages = () => {
  return (
    <div className='accommodationsContainer'>
    <h1 className='accommodationsHeader'>Accommodations</h1>
    <div className='accommodationsCardContainer'>
    <CardGroup>
      <Card>
        <Card.Img className='accommodationsIcon mx-auto'  src={Icon1} style={{borderRadius: "50%", height: "200px", width: "200px"}} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>Quattro Hotel</Card.Title>
          <Card.Text>
            We have kindly booked a block. Reservations must be made before xyz date, click on the booking information tab below for more information.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Booking Information</Accordion.Header>
        <Accordion.Body>
         In order to book under our block, please call 1 (800) 503-7262. Inform them you are booking for Mattieu Jacques and Brandi Martel's wedding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Address</Accordion.Header>
        <Accordion.Body>
        229 Great Northern Road,
        Sault Ste. Marie,
        Ontario
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
       <strong>Option 1</strong> - 1 King & sofa with Queen pullout = <strong>$129.23</strong> / night or <strong>$258.46</strong> for 2 nights. <br/>
       <strong>Option 2</strong> - 2 Queen & sofa with Queen pullout = <strong>$162.63</strong> / night or <strong>$325.26</strong> for 2 nights.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
       All rooms have a mini fridge, microwave and Keurig Coffee Machine. <br/>
       Complimentary breakfast at in-house restaurant: eggs, home fries, yogurts, cereals, fresh fruit, pastries, coffee, tea.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='accommodationsIcon mx-auto' src={Icon2} style={{borderRadius: "50%", height: "200px", width: "200px"}} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>Microtel Inn & Suites by Wyndham</Card.Title>
          <Card.Text>
          We have kindly booked a block. Reservations must be made before xyz date, click on the booking information tab below for more information.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Booking Information</Accordion.Header>
        <Accordion.Body>
         In order to book under our block, please call 1 (800) xxx-xxxx. Inform them you are booking for Mattieu Jacques and Brandi Martel's wedding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Address</Accordion.Header>
        <Accordion.Body>
        724 Great Northern Road,
        Sault Ste. Marie,
        Ontario
        Phone: (705) 910-0180
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
       Here is more information about Microtel.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img className='accommodationsIcon mx-auto' src={Icon3} style={{borderRadius: "50%", height: "200px", width: "200px"}} />
        <Card.Body>
          <Card.Title className='accommodationsTitle'>AirBnB Sault Ste Marie</Card.Title>
          <Card.Text>
           If you are looking for something different, and something other than a traditional hotel, feel free to look at some of the great AirBnB stays available.
          </Card.Text>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>More Information</Accordion.Header>
        <Accordion.Body>
        <a className="accommodationsTag" href="https://www.airbnb.ca/a/stays/Sault-Ste-Marie--Ontario--Canada?sem_brand_destination_erf=true&c=.pi0.pk355652324_64070011577&localized_ghost=true&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAz5IU_QCWml_dQ4m2iAbW_ch5UPfoWvPvjc6JymqPTDfR01hoXdbv8aAmXMEALw_wcB" target='_blank' rel='noreferrer'>Here</a> is the link for AirBnB, please feel free to contact us should you have any questions about the area, or location of places you  might want to stay.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
    </div>
    </div>
  )
}

export default AccommodationsPages
