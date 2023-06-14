import * as yup from "yup";


const passwordRules= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters , 1 upper case letter , 1 lower case letter , 1 numeric digit


 export const basicSchema = yup.object().shape({
email: yup.string().email("please enter a valid email").required("required"),
age: yup.number().positive().integer().required("required"),
password:yup.string().min(5).matches(passwordRules, {message: "please create a stronger password"}).required("required"),
confirmPassword: yup.string().oneOf([yup.ref('password'), null ], "passwords must match ").required("required")


})


