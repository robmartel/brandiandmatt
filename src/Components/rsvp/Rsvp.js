import React from 'react'
import { RiMickeyLine } from 'react-icons/ri';
import { Container, FormWrap, FormSelect, FormTextArea, Icon, FormContent, Form, FormH1, FormP, FormLabel, FormInput, FormButton, Text } from './RsvpElements'

const Rsvp = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>
            <RiMickeyLine /> 
            </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>RSVP</FormH1>
                    <FormP>Please Respond by January 1st, 2099</FormP>
                    <FormLabel htmlFor='name' >Name(s):</FormLabel>
                    <FormInput id='name' type='name' placeholder='Provide full name of all guests attending' required />
                    <FormLabel htmlFor='email' >Email:</FormLabel>
                    <FormInput id='email' type='email' placeholder='elsa@disneycastle.com' required />
                    <FormLabel htmlFor='plusOne'>Plus One:</FormLabel>
                    <FormSelect id='plusOne' type='select' name='plusOne' required>
                    <option>Please select an answer</option>
                    <option value='yes'>Yes, please add a plus one</option>
                    <option value='no'>Just me!</option>  
                    </FormSelect> 
                    <FormLabel htmlFor='for' >Total Number of guests attending:</FormLabel>
                    <FormSelect id='totalGuests' type='select' name='totalGuests' required>
                    <option>Please select an answer</option>
                    <option value='1'>Just Me</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    </FormSelect>
                    <FormLabel htmlFor='song' >Please provide a song that will get you up on the dance floor:</FormLabel>
                    <FormInput id='song' type='song' placeholder='Name of Song' />
                    <FormLabel htmlFor='message' >Additional Comments:</FormLabel>
                    <FormTextArea id='message' type='textarea' rows='10' cols='50' placeholder='Please provide any dietary restrictions or additional information' required />
                    <FormButton type='submit'>Submit</FormButton>
                    <Text>Thank You! We look forward to getting your gift!</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Rsvp;
