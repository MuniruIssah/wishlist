import React from "react";

const TemplateCard = ({ name = "A Random Template", price = 12.0 }) => {
  return (
    <div className="flex flex-col">
      <div className="peer bg-wishlistPrimary h-48  w-full hover:rounded hover:rounded-md transition-all ease-in-out hover:scale-110"></div>
      <div className="bg-white h-10  w-full self-end text-center flex flex-col space-x-2 py-2 peer-hover:py-4 transition-all ease-in-out">
        <span className="text-wishlistSecondary/90 uppercase">{name}</span>
        <span className="text-gray-800 font-semibold">GHS {price}</span>
      </div>
    </div>
  );
};

export default TemplateCard;
