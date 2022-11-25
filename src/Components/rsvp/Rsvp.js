import React, { useRef } from 'react'
import { RiMickeyLine } from 'react-icons/ri';
import { Container, FormContainer, FormRadio, FormRadioLabel, FormWrap, FormSelect, FormTextArea, Icon, FormContent, Form, FormH1, FormP, FormLabel, FormInput, FormButton, Text } from './RsvpElements'
import emailjs from '@emailjs/browser';

const Rsvp = ({show, handClose}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>
            <RiMickeyLine /> 
            </Icon>
            <FormContent>
                <Form ref={form} onSubmit={sendEmail}>
                    <FormH1>RSVP</FormH1>
                    <FormP>Please Respond by January 1st, 2099</FormP>
                    <FormLabel htmlFor='name' >Name:</FormLabel>
                    <FormInput id='name' type='name' name='name' placeholder='First and Last Name' required />
                    <FormLabel htmlFor='email' >Email:</FormLabel>
                    <FormInput id='email' type='email' name='email' placeholder='elsa@disneycastle.com' required />
                    <FormLabel htmlFor='attending'>Will you be joining our Magical evening?</FormLabel>
                    <FormContainer>
                        <FormRadio id='attendingY' type='radio' name='attending' value='yes' checked></FormRadio>
                        <FormRadioLabel htmlFor='attendingY'>Wouldn't miss it!</FormRadioLabel>
                        
                    </FormContainer>
                        <FormContainer>
                        <FormRadio id='attendingN' type='radio' name='attending' value='no'></FormRadio>
                        <FormRadioLabel htmlFor='attendingN'>Sorry, can't make it</FormRadioLabel>
                    </FormContainer>
                    <FormLabel htmlFor='plusOne'>Plus One:</FormLabel>
                    <FormSelect  id='plusOne' type='select' name='plusOne' required>
                    <option>Please select an answer</option>
                    <option value='yes'>Yes, please add a plus one</option>
                    <option value='no'>Just me!</option>  
                    </FormSelect> 
                    <FormLabel htmlFor='for' >Total Number of guests attending:</FormLabel>
                    <FormSelect id='totalGuests' type='select' name='guests' required>
                    <option>Please select an answer</option>
                    <option value='1'>Just Me</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    </FormSelect>
                    <FormLabel htmlFor='guest_name' >Name(s):</FormLabel>
                    <FormInput id='guest_name' type='name' name='guest_name' placeholder='Provide full name of all guests attending' required />
                    <FormLabel htmlFor='song' >Please provide a song that will get you up on the dance floor:</FormLabel>
                    <FormInput id='song' type='song' name='song' placeholder='Name of Song' />
                    <FormLabel htmlFor='message' >Additional Comments:</FormLabel>
                    <FormTextArea id='message' type='textarea' rows='10' cols='50' name='message' placeholder='Please provide any dietary restrictions or additional information' required />
                    <FormButton type='submit' value='Send'>Submit</FormButton>
                    <Text>Thank You! We look forward to getting your gift!</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Rsvp;
