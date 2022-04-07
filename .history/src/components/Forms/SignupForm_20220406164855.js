import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Input from "./form-components/Input";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required").min(8),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(),
});

const onSubmit = (values) => {
  let loginPromise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          message: "Logged in Successfully",
          status: 200,
          data: [],
        }),
      1000
    )
  );
  toast.promise(loginPromise, {
    loading: "Loading",
    success: "Logged in Successfully",
    error: "Error when fetching",
  });
};
const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
    >
      {(formik) => (
        <Form className="flex flex-col mt-3 w-full">
          <h2 className="font-bold text-gray-800 text-4xl mb-4 drop-shadow-sm ">
            Sign Up
          </h2>
          <label className="block mb-4">
            <span className="block pb-2 text-rose-500 font-semibold">
              Email
            </span>
            <Input name="email" id="email" placeholder="Email" />
          </label>
          <label className="block mb-6">
            <span className="block pb-2 text-rose-500 font-semibold">
              Password
            </span>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <label className="block mb-6">
            <span className="block pb-2 text-rose-500 font-semibold">
              Confirm Password
            </span>
            <Input
              name="confirmPassword"
              id="confirmPassword"
              type="confirmPassword"
              placeholder="Confirm Password"
            />
          </label>
          <button className="h-14 text-lg text-white w-full rounded rounded-lg bg-rose-500 hover:bg-rose-600 hover:shadow-md hover:scale-105 transition-all ease-in-out">
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
