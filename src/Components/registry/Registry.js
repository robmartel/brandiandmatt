import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './RsvpElements'

const Registry = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>logo</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>RSVP to Brandi and Mathieu's Wedding</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Submit</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Registry
