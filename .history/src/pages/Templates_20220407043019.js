import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Templates = () => {
  return (
    <DefaultLayout>
      <div className="bg-wishlistPrimary text-wishlistSecondary  flex justify-center items-center p-10 my-10  text-7xl">
        Templates
      </div>
      <div
        className="gap-4 my-10 px-5 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        }}
      ></div>
    </DefaultLayout>
  );
};

export default Templates;
