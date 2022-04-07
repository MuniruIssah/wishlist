import React from "react";
import Jumbotron from "../components/Jumbotron";
import EventCard from "../components/EventCard";
import eventImage1 from "../assets/arabica-148.png";
import eventImage2 from "../assets/arabica-birthday-party-2.png";
import eventImage3 from "../assets/fabulous-celebration-party.png";
import eventImage4 from "../assets/pixeltrue-business-meeting-1.svg";
import DefaultLayout from "../layouts/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Jumbotron />
      <h1 className="font-bold text-gray-900 text-2xl px-5 2xl:px-0">
        Nearby Events
      </h1>
      <div
        className="gap-4 my-10 px-5 2xl:px-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        }}
      >
        <EventCard
          color="bg-amber-400"
          bgImage={eventImage4}
          date={new Date("11-28-2025")}
        />
        <EventCard
          color="bg-sky-400"
          bgImage={eventImage1}
          date={new Date("8-3-2025")}
        />
        <EventCard color="bg-green-400" bgImage={eventImage3} />
        <EventCard
          color="bg-red-400"
          bgImage={eventImage2}
          date={new Date("12-12-2025")}
        />
        <EventCard
          color="bg-amber-400"
          bgImage={eventImage4}
          date={new Date("4-17-2025")}
        />
      </div>
    </DefaultLayout>
  );
};

export default Home;
