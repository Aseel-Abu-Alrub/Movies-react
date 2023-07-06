import * as Yup from 'yup'
export const schemas=Yup.object({
userName:Yup.string().required("Please enter username").min(3,"Username must between 3 and 25 characters.").max(20,"Username must between 3 and 25 characters."),
email:Yup.string().required("Please enter your email").email("not valid email."),
password:Yup.string().required("Please enter your password").matches(/^[A-Z][a-z0-9]{3,8}$/,"password  must  start uppercase ,and minimum 9 characters "),
cPassword:Yup.string().required("Please Confirm password").oneOf([Yup.ref("password")],"not match password")

})