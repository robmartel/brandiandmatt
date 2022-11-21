import React from 'react'
import { RiMickeyLine } from 'react-icons/ri';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './RsvpElements'

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
                    <FormH1>RSVP to Brandi and Mathieu's Wedding</FormH1>
                    <FormLabel htmlFor='for' >Name:</FormLabel>
                    <FormInput type='name' placeholder='Full Name' required />
                    <FormLabel htmlFor='for' >Email:</FormLabel>
                    <FormInput type='email' placeholder='elsa@disneycastle.com' required />
                    <FormLabel htmlFor='for' >Total Number of guests attending:</FormLabel>
                    <FormInput type='select' required />
                    <FormLabel htmlFor='for' >Additional Comments:</FormLabel>
                    <FormInput type='textarea' placeholder='Please provide any dietary restrictions or additional information' required />
                    <FormButton type='submit'>Submit</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Rsvp;
