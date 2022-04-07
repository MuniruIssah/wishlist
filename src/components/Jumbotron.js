import React from "react";
import background from '../assets/conifer-gifts.png'
const Jumbotron = () => {
  return (
    <div className="bg-violet-600  my-20 flex flex-col  lg:items-start justify-center space-y-16 2xl:rounded 2xl:rounded-[30px] px-2 py-14 md:p-14 bg-no-repeat bg-right bg-contain lg:bg-[url('/src/assets/conifer-gifts.png')]" >
      <h1 className="text-5xl md:text-8xl text-white font-bold text-center lg:text-left drop-shadow-sm">
        It's time for
        <br />
        Christmas magic
      </h1>
      <span className="text-white/90 text-xl text-center lg:text-left">
        Invite your friends to know what gifts to give
        <br />
        for the holidays!
      </span>

      <button className="bg-black  text-white px-10 py-3 rounded rounded-lg lg:rounded-full hover:scale-105 hover:shadow-md transition-all ease-in-out">
        Invite friends
      </button>
    </div>
  );
};

export default Jumbotron;
