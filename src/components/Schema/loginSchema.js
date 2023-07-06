import * as Yup from 'yup'
export const schemas=Yup.object({
email:Yup.string().required("Please enter your email").email("not valid email."),
password:Yup.string().required("Please enter your password").matches(/^[A-Z][a-z0-9]{3,8}$/,"password  must  start uppercase ,and minimum 9 characters "),

})