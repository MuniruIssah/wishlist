import React from "react";

const TemplateCard = () => {
  return (
    <div className="flex flex-col   hover:ring hover:ring-wishlistSecondary/80 hover:rounded hover:rounded-md transition-all ease-in-out hover:scale-105 hover:shadow-md">
      <div className="bg-wishlistPrimary h-32  w-full"></div>
      <div className="bg-white h-10  w-full self-end"></div>
    </div>
  );
};

export default TemplateCard;
