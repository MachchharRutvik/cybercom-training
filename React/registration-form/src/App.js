import logo from "./logo.svg";
import "./App.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    console.log(values, "values");
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string()
      .required("Required")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Must contain 8 characters, one uppercase,one number,one special character"
      ),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
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
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
