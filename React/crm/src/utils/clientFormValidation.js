import * as Yup from "yup";
export const crmSchema = Yup.object({
    clientName: Yup.string().min(2).max(24).required('Client name is required'),
    address: Yup.string().min(2).max(30).required('Address is required'),
    country: Yup.string().required('Country is required'),
    date: Yup.date().required('Date is required'),
    consultant: Yup.string().required('Consultant is required'),
    email: Yup.string().email("Invalid email").required('Email is required'),
    approved: Yup.string().required('please select yes or no'),
    totalPrice: Yup.string().required('Total price is required').test('is-valid-price', 'Please enter a valid price', function (value) {
        const { path, createError } = this;
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
          return createError({ path, message: 'Please enter a valid price' });
        }
        return true;
      }),
  });