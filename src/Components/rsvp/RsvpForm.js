import React from 'react';
import { useFormik, Form, Field } from 'formik';
import { ErrorSchema } from './validateForm';

import emailjs from '@emailjs/browser';

const RsvpForm = () => {
  
  const {
    handleChange,
    errors,
    handleSubmit,
    values,
    handleBlur,
    touched,
    isValid,
    dirty,
    handleReset
  } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      attending: '',
      plusOne: '',
      guests: '',
      guest_name: '',
      song: '',
      message: '',
    },

    validationSchema: ErrorSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_PUBLIC_KEY
        )

        .then(
          (result) => {
            console.log(result.text);
            handleReset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='col-form-label'>Name:</label>

        {/* Name Field */}
        <Field
          className={
            touched.userName
              ? `form-control ${errors.userName ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='userName'
          type='text'
          placeholder='Full Name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
        />
        {/* add the first '&' because if there is no error there is no need for the small tag */}
        {touched.userName && errors.userName && (
          <small className='text-light'>
            <strong>{errors.userName}</strong>
          </small>
        )}
      </div>

        {/* Email Field */}
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && (
          <small className='text-light'>
            <strong>{errors.email}</strong>
          </small>
        )}
      </div>

          {/* Attending Field */}
      <div className='form-group'>
        <label className='col-form-label'>
          Will you be joining our Magical day?
        </label>
        <Field
          component='select'
          className={
            touched.attending
              ? `form-control ${errors.attending ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='attending'
          type='select'
          value={values.attending}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: 'block' }}
        >
          <option value=''>Please select an answer</option>
          <option value='yes'>Wouldn't miss it!</option>
          <option value='no'>Decline, with regret</option>
        </Field>
        {touched.attending && errors.attending && (
          <small className='text-light'>
            <strong>{errors.attending}</strong>
          </small>
        )}
      </div>

          {/* Plus One Field */}
      <div className='form-group'>
        <label className='col-form-label'>Plus One:</label>
        <Field
          component='select'
          className={
            touched.plusOne
              ? `form-control ${errors.plusOne ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='plusOne'
          type='select'
          value={values.plusOne}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: 'block' }}
        >
          <option value=''>Please select an answer</option>
          <option value='yes'>Yes, please add a plus one </option>
          <option value='no'>Just me!</option>
        </Field>
        {touched.plusOne && errors.plusOne && (
          <small className='text-light'>
            <strong>{errors.plusOne}</strong>
          </small>
        )}
      </div>

          {/* Number of Guests Field */}
      <div className='form-group'>
        <label className='col-form-label'>
          Total number of Guests attending:
        </label>
        <Field
          as='select'
          className={
            touched.guests
              ? `form-control ${errors.guests ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='guests'
          type='select'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.guests}
        >
          <option value=''>Please select an answer</option>
          <option value='one'>Just Me!</option>
          <option value='two'>Plus One</option>
          <option value='three'>Plus One and One Child</option>
          <option value='four'>Plus One and Two Children</option>
          <option value='five'>Plus One and Three Children</option>
        </Field>
        {touched.guests && errors.guests && (
          <small className='text-light'>
            <strong>{errors.guests}</strong>
          </small>
        )}
      </div>

          {/* Guest Names Field */}
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
          placeholder='Please enter full name for all attending guests'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.guest_name}
        />
        {touched.guest_name && errors.guest_name && (
          <small className='text-light'>
            <strong>{errors.guest_name}</strong>
          </small>
        )}
      </div>

          {/* Song Field */}
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.song}
        />
        {touched.song && errors.song && (
          <small className='text-light'>
            <strong>{errors.song}</strong>
          </small>
        )}
      </div>

          {/* Additional Comments Field */}
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        ></Field>
        {touched.message && errors.message && (
          <small className='text-light'>
            <strong>{errors.message}</strong>
          </small>
        )}
      </div>

          {/* Submit Button Field */}
      <div className='text-center'>
        <button
          className='btn btn-primary my-3'
          disabled={!isValid || !dirty}
          type='submit'
          value='Send'
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default RsvpForm;
