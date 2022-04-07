import React from "react";

const ErrorText = ({ children }) => {
  return <span className="text-red-600 font-semibold">{children} !</span>;
};

export default ErrorText;
