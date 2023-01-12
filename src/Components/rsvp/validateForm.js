import * as Yup from 'yup';

export const ErrorSchema = Yup.object().shape({
    userName: Yup.string().required("Name is Required").min(4, "Full name must be longer than four characters").max(15, "Name cannot exceed 15 characters"),
    email: Yup.string().email("Invalid email").required("Must provide a valid e-mail"), 
    attending: Yup.string().oneOf(['yes', 'no'], "Invalid Selection").required("Required"),
    plusOne: Yup.string().oneOf(['yes', 'no'], "Invalid Selection").required("Required"),
    guests: Yup.string().oneOf(['one', 'two', 'three', 'four', 'five', 'six'], "Invalid Selection").required("Required"),
    guest_name: Yup.string().required("At least ONE Name is Required").min(2, "Name must be longer than two characters").max(75, "Name cannot exceed 15 characters"),
    song: Yup.string().required("Please provide a song").min(2, "Song must be longer than two characters").max(55, "The song must be shorter than 55 characters"),
    message: Yup.string().min(5, "Must be at least 5 characters").max(150, "Message is too long").required("Required"),
   }); 