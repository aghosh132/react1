import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from './schemas';
import './hi.css';

const onSubmit  = async(values , actions)=>{
console.log(values);
console.log(actions);
await new Promise((resolve)=> setTimeout(resolve, 1000));
actions.resetForm()
}
function Hiam() {
  const {values,errors,handleBlur, handleChange,handleSubmit,touched,isSubmitting}= useFormik({
    initialValues:{
      email:"",
      age:"",
      password:"",
      confirmPassword:"",
    },
validationSchema:basicSchema,
onSubmit,

  });
  console.log(errors);
  
  return (
           <form onSubmit={handleSubmit} autoComplete='off'>




<label htmlFor='email'>Email</label><br />
<input
value={values.email}
onChange={handleChange}
onBlur={handleBlur}
id="email" type='email' name='email' placeholder='Enter Your Email'
className={errors.email && touched.email ? "input-error":""}
/>
<br />
{errors.email && touched.email && <p className="error">{errors.email}</p> }
<br />




<label htmlFor='age'>Age</label><br />
<input
value={values.age}
onChange={handleChange}
onBlur={handleBlur}
id="age" type='number' name='age' placeholder='Enter Your Age'
className={errors.age && touched.age ? "input-error":""}

/>
<br />
{errors.email && touched.email && <p className="error">{errors.age}</p> }
<br />



<label htmlFor='password'>Password</label><br />
<input
value={values.password}
onChange={handleChange}
onBlur={handleBlur}
id="password" type='password' placeholder='Enter Your Password'
className={errors.password && touched.confirmPassword ? "input-error":""}

/>
<br />
{errors.email && touched.email && <p className="error">{errors.password}</p> }
<br />





<label htmlFor='confirmPassword'>Confirm Password</label><br />
<input
value={values.confirmPassword}
onChange={handleChange}
onBlur={handleBlur}
id="confirmPassword" type='password'  placeholder='Enter Your Password'

className={errors.confirmPassword && touched.confirmPassword ? "input-error":""}



/>
<br />
{errors.email && touched.email && <p className="error">{errors.confirmPassword}</p> }
<br />

<button disabled={isSubmitting} type='submit' > Submit </button>
           </form>
    
  )
}

export default Hiam