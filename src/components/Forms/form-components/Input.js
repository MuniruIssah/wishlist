import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = (props) => {
  const { name, id,type,...rest } = props;
  return (
    <div className="flex flex-col">
      <Field
        name={name}
        id={id}
        type={type}
        {...rest}
        className="max-w-[30rem] w-full border-2  border-gray-200 h-14 focus:border-rose-500/50 rounded rounded-md outline-none pl-2 text-gray-400"
      />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Input;
