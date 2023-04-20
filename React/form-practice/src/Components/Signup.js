import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

function Signup() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "required";
    }
    if (!values.email) {
      errors.email="required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email="invalid email";
    }
    if (!values.channel) {
      errors.channel="required";
    }
    return errors
  };
  const validationSchema = Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().required("Required").email("Invalid email format"),
    channel:Yup.string().required('Required')
  })
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  // console.log(formik.values,"form values");
  // console.log(formik.touched,"visited");
 
  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        { formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div>:null}
        </div>
        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}
         </div>
         <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
         {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div>:null}
         </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
