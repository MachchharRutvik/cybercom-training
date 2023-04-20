import React, { useState } from "react";
import "./css/AddClientForm.css";
import { useFormik } from "formik";
import { crmSchema } from "../utils/clientFormValidation";

function AddClientForm() {
  const [checkboxValues, setCheckboxValues] = useState({
    directSales: false,
    consultativeSales: false,
    requestForProposal: false,
  });
  const handleChangeForCheckBox = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(checkboxValues);
  };

  const initialValues = {
    clientName: "",
    address: "",
    country: "",
    date: "",
    consultant: "",
    email: "",
    approved: "",
    totalPrice: "",
  };
  const onSubmit = (values) => {
    console.log("Form values", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: crmSchema,
  });
  const countries = [
    "Afghanistan",
    "Brazil",
    "Canada",
    "Denmark",
    "Egypt",
    "France",
    "Germany",
    "Honduras",
    "India",
    "Japan",
    "Kenya",
    "Lebanon",
    "Mexico",
    "Netherlands",
    "Oman",
    "Philippines",
    "Qatar",
    "Russia",
    "Spain",
    "Turkey",
    "United States",
    "Venezuela",
    "Wales",
    "Yemen",
    "Zimbabwe",
  ];
  // console.log(formik.errors);

  return (
    <div className="mt-5">
      <>
        <div className="container-fluid">
          <form
            className="well form-horizontal"
            action=" "
            method="post"
            id="contact_form"
            onSubmit={formik.handleSubmit}
          >
            <fieldset>
              {/* Form Name */}
              <legend>Contact Us Today!</legend>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Client Name</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      name="clientName"
                      placeholder=""
                      className="form-control"
                      type="text"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.clientName}
                    />
                  </div>
              {formik.errors.clientName && formik.touched.clientName ? <span className='text-danger'>{formik.errors.clientName}</span>:null}
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Address</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-home" />
                    </span>
                    <textarea
                      className="form-control"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                     {formik.errors.address && formik.touched.address ? <span className='text-danger'>{formik.errors.address}</span>:null}
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Country</label>
                <div className="col-md-4 selectContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-list" />
                    </span>
                    <select
                      name="country"
                      className="form-control selectpicker"
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Please select your Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                    {formik.errors.country && formik.touched.country ? <span className='text-danger'>{formik.errors.country}</span>:null}
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label">Type</label>
                <div className="selectContainer">
                  <div className="input-group">
                    <label className="checkboxGroup col-md-3">
                      <input
                        type="checkbox"
                        name="directSales"
                        checked={checkboxValues.directSales}
                        onChange={handleChangeForCheckBox}
                        
                      />
                      <b>Direct sales</b>
                    </label>
                    <label className="checkboxGroup col-md-4">
                      <input
                        type="checkbox"
                        name="consultativeSales"
                        checked={checkboxValues.consultativeSales}
                        onChange={handleChangeForCheckBox}
                      />
                      <b>Consultative sales</b>
                    </label>
                    <label className="checkboxGroup col-md-4">
                      <input
                        type="checkbox"
                        name="requestForProposal"
                        checked={checkboxValues.requestForProposal}
                        onChange={handleChangeForCheckBox}
                      />
                      <b>Request for proposal</b>
                    </label>
                  </div>
                </div>
              </div>

              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Date</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-calendar" />
                    </span>
                    <input
                      name="date"
                      className="form-control"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                     {formik.errors.date && formik.touched.date ? <span className='text-danger'>{formik.errors.date}</span>:null}
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Consultant</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      name="consultant"
                      placeholder="Start typing name/surname/title here"
                      className="form-control"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.consultant}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                     {formik.errors.consultant && formik.touched.consultant ? <span className='text-danger'>{formik.errors.consultant}</span>:null}
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label">E-Mail</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                    <input
                      name="email"
                      placeholder="you@domain.com"
                      className="form-control"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                     {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span>:null}
                </div>
              </div>

              {/* radio checks */}
              <div className="form-group">
                <label className="col-md-4 control-label">Approved?</label>
                <div className="col-md-1">
                  <label>
                    <input
                      type="radio"
                      name="approved"
                      value="yes"
                      checked={formik.values.approved === "yes"}
                      onChange={formik.handleChange}
                    />
                    <b> Yes</b>
                  </label>
                </div>
                <div className="col-md-1">
                  <label>
                    <input
                      type="radio"
                      name="approved"
                      value="no"
                      checked={formik.values.approved === "no"}
                      onChange={formik.handleChange}
                    />
                    <b> No</b>
                  </label>
                </div>
                <div className="col-md-2">
                {formik.errors.approved && formik.touched.approved ? <span className='text-danger'>{formik.errors.approved}</span>:null}
                </div>
              </div>
                 

              {/* Text area */}
              <div className="form-group">
                <label className="col-md-4 control-label">Total price</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i
                        className="glyphicon glyphicon-usd"
                      />
                    </span>
                    <input
                      name="totalPrice"
                      className="form-control"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.totalPrice}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                     {formik.errors.totalPrice && formik.touched.totalPrice ? <span className='text-danger'>{formik.errors.totalPrice}</span>:null}
                </div>
              </div>
              {/* Success message */}
              {/* Button */}
              <div className="form-group">
                <label className="col-md-4 control-label" />
                <div className="col-md-4">
                  <button type="submit" className="btn btn-warning">
                    Add
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}

export default AddClientForm;
