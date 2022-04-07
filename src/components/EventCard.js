import React from 'react'

const EventCard = ({color='green',date=new Date(),bgImage}) => {
    
    return (

        <div className={`rounded rounded-3xl ${color} p-5 min-h-[15rem] bg-no-repeat bg-right bg-contain hover:shadow-md hover:scale-105 transition-all ease-in-out`} style={{backgroundImage:`url(${bgImage})`}}>
           <span className="text-white text-6xl font-bold drop-shadow-md">
           {date.getDate()}.{date.getMonth()}
           </span>
   
        </div>
    )
}

export default EventCard
