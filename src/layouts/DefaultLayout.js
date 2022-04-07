import React from "react";
import Header from "../components/Header";

const DefaultLayout = ({children}) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
