import React from "react";

const TemplateCard = () => {
  return (
    <div className=" h-40 flex flex-col   hover:ring hover:ring-wishlistSecondary/80 hover:rounded hover:rounded-md transition-all ease-in-out hover:scale-105 hover:shadow-md">
      <div className="h-30 w-full bg-wishlistPrimary"></div>
      <div className="bg-white h-10 border border-red-400 w-full"></div>
    </div>
  );
};

export default TemplateCard;
