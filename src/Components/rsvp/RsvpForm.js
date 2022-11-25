import React, { useRef } from 'react';
import { Form, Field } from 'formik';
import emailjs from '@emailjs/browser';

const RsvpForm = ({ errors, touched, isValid, dirty }) => {
    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target[1].value);
        //set the values inside of variables to use later

        const userName = e.target[0].value;
        const email = e.target[1].value;
        const attending = e.target[2].value;
        const plusOne = e.target[3].value;
        const guests = e.target[4].value;
        const guest_name = e.target[5].value;
        const song = e.target[6].value;
        const msg = e.target[7].value;

        let templateParams = {
            user_name: userName,
            email: email,
            attending: attending,
            plusOne: plusOne, 
            guests: guests,
            guest_name: guest_name,
            song: song,
            message: msg, 
        };

        emailjs.send(  process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            })
    }

  return (
    <Form ref={form} onSubmit={sendEmail}>

    <div className='form-group'>
      <label className='col-form-label'>Name:</label>
      <Field
        className={
          touched.user_name
            ? `form-control ${errors.user_name ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='user_name'
        type='text'
        placeholder='Full Name'
      />
      {/* add the first '&' because if there is no error there is no need for the small tag */}
      {touched.user_name && errors.user_name && (
        <small className='text-danger'>{errors.user_name}</small>
      )}
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Email:</label>
      <Field
        className={
          touched.email
            ? `form-control ${errors.email ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='email'
        type='text'
        placeholder='mickey@disney.com'
      />
      {touched.email && errors.email && (
        <small className='text-danger'>{errors.email}</small>
      )}
    </div>

    <div className='form-group'>
    <label className='col-form-label'>Will you be joining our Magical day?</label><br/>
    <Field  id='attendingY' type="radio" name="attending" value="yes" checked/>
        <label htmlFor='attendingY' className='col-form-label ps-2 pe-3'>
        Wouldn't Miss It!
        </label>
        <Field id='attendingN' type="radio" name="attending" value="no" />
        <label htmlFor='attendingN' className='col-form-label ps-2'>
            Sorry, maybe next time 
        </label>
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Plus One:</label>
      <Field
        as='select'
        className={
          touched.plusOne
            ? `form-control ${errors.plusOne ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='plusOne'
      >
        <option value="">Please select an answer</option>
        <option value="yes">Yes, please add a plus one or few</option>
        <option value="no">Just me!</option>
        
      </Field>
      {touched.plusOne && errors.plusOne && (
        <small className='text-danger'>{errors.plusOne}</small>
      )}
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Total number of Guests attending:</label>
      <Field
        as='select'
        className={
          touched.guests
            ? `form-control ${errors.guests ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='guests'
      >
        <option value="">Please select an answer</option>
        <option value="1">Just Me!</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">Too many!</option>
        
      </Field>
      {touched.guests && errors.guests && (
        <small className='text-danger'>{errors.guests}</small>
      )}
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Name(s):</label>
      <Field
        className={
          touched.guest_name
            ? `form-control ${errors.guest_name ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='guest_name'
        type='text'
        placeholder='Please provide the name of each guest attending'
      />
      {touched.guest_name && errors.guest_name && (
        <small className='text-danger'>{errors.guest_name}</small>
      )}
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Song:</label>
      <Field
        className={
          touched.song
            ? `form-control ${errors.song ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='song'
        type='text'
        placeholder='Provide a song that will get you up on the dance floor'
      />
      {touched.song && errors.song && (
        <small className='text-danger'>{errors.song}</small>
      )}
    </div>

    <div className='form-group'>
      <label className='col-form-label'>Additional Comments:</label>
      <Field
        as='textarea'
        className={
          touched.message
            ? `form-control ${errors.message ? 'invalid' : 'valid'}`
            : `form-control`
        }
        name='message'
        placeholder='Please provide any dietary restrictions or additional information.'
      ></Field>
      {touched.message && errors.message && (
        <small className='text-danger'>{errors.message}</small>
      )}
    </div>

    <div className='text-center'>
      <button
        className='btn btn-primary my-3'
        disabled={!isValid || !dirty}
        type='submit'
        value="Send"
      >
        Submit
      </button>
    </div>
  </Form>
  );
}

export default RsvpForm;
