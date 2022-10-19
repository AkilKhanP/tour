import * as  Yup from 'yup'
import en from '../localization/en'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  
// let = inlineCheckbox
// phone_number: Yup.string()
//   .required("required")
//   .matches(phoneRegExp, 'Phone number is not valid')
//   .min(10, "to short")
//   .max(10, "to long"),
export const bookingSchema = Yup.object().shape({
    destination:Yup.string().min(2).max(25).required("Please enter your destination"),
    // date:Yup.string().min(8).max(8).required("Please enter Date"),
    no_of_passenger:Yup.number().min(1).required("Enter no. of passenger"),
    from:Yup.string().min(4).max(25).required("Please enter your destination"),
    to:Yup.string().min(4).max(25).required("Please enter your destination"),
    inlineCheckbox1:Yup.boolean().oneOf([true],"please check the box").required("Please check the box"),
    
    inlineCheckbox5:Yup.boolean().oneOf([true],"Please accept travel ticket").required("Please accept travel ticket "),
    // inlineRadio:Yup.boolean().required().oneOf([0 , 1], 'Selecting the gender field is required'),
    lemail: Yup.string().email('Invalid email').required('Required'),
    lpassword: Yup
    .string().min(8).required("Required"),
    name:Yup.string().min(2).max(25).required("Required"),
    email: Yup.string().email(en.emailValidation).required('Required'),
    phone: Yup.string()
      .required("Required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "to short")
      .max(10, "to long"),
    password: Yup
    .string()
    .min(8, 'Password must be 8 characters long').required('Required')
    // .matches(/[0-9]/, 'Password requires a number')
    // .matches(/[a-z]/, 'Password requires a lowercase letter')
    // .matches(/[A-Z]/, 'Password requires an uppercase letter')
    // .matches(/[^\w]/, 'Password requires a symbol').required('Required'),
    ,
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    condition:Yup.boolean().oneOf([true],"Please accept terms & condition ").required("Please accept terms & condition "),

})
