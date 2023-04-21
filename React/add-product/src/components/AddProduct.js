import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Paper, Grid, Typography, Stack, Box, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddProduct() {
  const initialValues = {
    productName: "",
    productDescription: "",
    productImages: "",
    price: "",
    availability: "",
    shippingInformation: "",
    productDimensions: "",
    productWeight: "",
    materialAndConstruction: "",
    productFeatures: "",
    frequentlyAskedQuestions: "",
    warrantyInformation: "",
    returnPolicy: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const handleFaqChange = (value) => {
    formik.setFieldValue("frequentlyAskedQuestions", value);
  };
  const handleImageUpload = (e) => {
    const files = e.target.files;
    formik.setFieldValue("productImages", [
      ...formik.values.productImages,
      ...files,
    ]);
  };
  const validationSchema = Yup.object({
    productName: Yup.string()
      .required("Required")
      .max(20, "max 20 characters allowed"),
    productDescription: Yup.string()
      .required("Required")
      .max(50, "max 50 characters are allowed"),
    price: Yup.string()
      .required("Required")
      .test("is-valid-price", "Please enter a valid price", function (value) {
        const { path, createError } = this;
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
          return createError({ path, message: "Please enter a valid price" });
        }
        return true;
      }),
    productFeatures: Yup.string()
      .required("Required")
      .max(50, "max 50 characters are allowed"),
    availability: Yup.string().required("Please select yes or no"),
    shippingInformation: Yup.string().max(30, "max 30 characters are allowed"),
    productDimensions: Yup.string().max(30, "max 30 characters are allowed"),
    productWeight: Yup.string().max(20, "max 20 characters are allowed"),
    materialAndConstruction: Yup.string().max(
      50,
      "max 50 characters are allowed"
    ),
    warrantyInformation: Yup.string().max(30, "max 30 characters are allowed"),
    returnPolicy: Yup.string().max(30, "max 30 characters are allowed"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Grid
      container
      sx={{ marginTop: 5 }}
      fullWidth
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper sx={{ width: 600 }} elevation={10} square>
          <Stack spacing={2} sx={{ margin: "2rem" }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Add Product
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={5}>
                <TextField
                  id="productName"
                  name="productName"
                  label="Product Name"
                  variant="outlined"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.productName && formik.errors.productName ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.productName}
                      </span>
                    ) : null
                  }
                />

                <TextField
                  id="productDescription"
                  name="productDescription"
                  label="Product Description"
                  variant="outlined"
                  multiline
                  required
                  onChange={formik.handleChange}
                  value={formik.values.productDescription}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.productDescription &&
                    formik.errors.productDescription ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.productDescription}
                      </span>
                    ) : null
                  }
                ></TextField>
                <div>
                  <label htmlFor="productImages">Add Product Images: </label>
                  <input
                    accept="image/*"
                    id="productImages"
                    name="productImages"
                    type="file"
                    multiple
                    sx={{
                      width: 100 + "%",
                      height: 75 + "px",
                    }}
                    onChange={(e) => handleImageUpload(e)}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  variant="outlined"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.price && formik.errors.price ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.price}
                      </span>
                    ) : null
                  }
                ></TextField>
                <FormControl>
                  <FormLabel id="availability">Availability</FormLabel>
                  <RadioGroup
                    aria-labelledby="availability"
                    name="availability"
                    row
                    onChange={formik.handleChange}
                    value={formik.values.availability}
                    onBlur={formik.handleBlur}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                    {formik.errors.availability &&
                    formik.touched.availability ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.availability}
                      </span>
                    ) : null}
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="shippingInformation"
                  name="shippingInformation"
                  label="Shipping Information"
                  variant="outlined"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.shippingInformation}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.shippingInformation &&
                    formik.errors.shippingInformation ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.shippingInformation}
                      </span>
                    ) : null
                  }
                ></TextField>
                <TextField
                  id="productDimensions"
                  name="productDimensions"
                  label="Product Dimensions"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.productDimensions}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.productDimensions &&
                    formik.errors.productDimensions ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.productDimensions}
                      </span>
                    ) : null
                  }
                />
                <TextField
                  id="productWeight"
                  name="productWeight"
                  label="Product Weight"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.productWeight}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.productWeight &&
                    formik.errors.productWeight ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.productWeight}
                      </span>
                    ) : null
                  }
                />
                <TextField
                  id="materialAndConstruction"
                  name="materialAndConstruction"
                  label="Material and Construction"
                  variant="outlined"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.materialAndConstruction}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.materialAndConstruction &&
                    formik.errors.materialAndConstruction ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.materialAndConstruction}
                      </span>
                    ) : null
                  }
                ></TextField>
                <TextField
                  id="productFeatures"
                  name="productFeatures"
                  label="Product Features"
                  variant="outlined"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.productFeatures}
                  onBlur={formik.handleBlur}
                  required
                  helperText={
                    formik.touched.productFeatures &&
                    formik.errors.productFeatures ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.productFeatures}
                      </span>
                    ) : null
                  }
                ></TextField>
                <Box>
                  <label htmlFor="frequentlyAskedQuestions">
                    Frequently Asked Questions{" "}
                  </label>
                  <ReactQuill
                    name="frequentlyAskedQuestions"
                    id="frequentlyAskedQuestions"
                    onChange={handleFaqChange}
                    value={formik.values.frequentlyAskedQuestions}
                    helperText={
                      formik.touched.frequentlyAskedQuestions &&
                      formik.errors.frequentlyAskedQuestions ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.frequentlyAskedQuestions}
                        </span>
                      ) : null
                    }
                    style={{ height: "250px", margin: "10px" }}
                  />
                </Box>
                <TextField
                  id="warrantyInformation"
                  name="warrantyInformation"
                  label="Warranty Information"
                  variant="outlined"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.warrantyInformation}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.warrantyInformation &&
                    formik.errors.warrantyInformation ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.warrantyInformation}
                      </span>
                    ) : null
                  }
                ></TextField>
                <TextField
                  id="returnPolicy"
                  name="returnPolicy"
                  label="Return Policy"
                  variant="outlined"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.returnPolicy}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.returnPolicy &&
                    formik.errors.returnPolicy ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.returnPolicy}
                      </span>
                    ) : null
                  }
                ></TextField>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Add
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
