import React from "react";
import TemplateCard from "../components/TemplateCard";
import DefaultLayout from "../layouts/DefaultLayout";

const Templates = () => {
  return (
    <DefaultLayout>
      <div className="text-wishlistSecondary  flex justify-center items-center p-10 md:my-10  md:text-7xl">
        Templates
      </div>

      <div
        className="gap-6 my-10 px-5 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        }}
      >
        {new Array(10).fill(0).map((item) => (
          <TemplateCard key={item} />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Templates;
