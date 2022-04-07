import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Input from "./form-components/Input";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
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
const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(formik) => (
        <Form className="flex flex-col mt-3 w-full">
          <h2 className="font-bold text-gray-800 text-4xl mb-4 drop-shadow-sm ">
            Login
          </h2>
          <label className="block mb-4">
            <span className="block pb-2 text-wishlistSecondary font-semibold">
              Email
            </span>
            <Input name="email" id="email" placeholder="Email" />
          </label>
          <label className="block mb-6">
            <span className="block pb-2 text-wishlistSecondary font-semibold">
              Password
            </span>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="h-14 text-lg text-white w-full rounded rounded-lg bg-wishlistSecondary/90 hover:bg-wishlistSecondary hover:shadow-md hover:scale-105 transition-all ease-in-out">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
