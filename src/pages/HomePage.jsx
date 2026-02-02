import React from "react";
import "./HomePage.css"
import TourInfo from "./TourInfo";

const HomePage = () => {

   const toursListArray = [
      {
         id: "1",
         date: "JUL16",
         city: "DETROIT, MI",
         place: "DTE ENERGY MUSIC THEATRE"
      },

      {
         id: "2",
         date: "JUL19",
         city: "TORONTO,ON",
         place: "BUDWEISER STAGE"
      },

      { 
         id:"3",
         date: "JUL 22",
         city: "BRISTOW, VA",
         place: "JIGGY LUBE LIVE"
      },

      {
         id:"4",
         date: "JUL 29",
         city: "PHOENIX, AZ",
         place: "AK-CHIN PAVILION"
      },

      {
         id: "5",
         date: "AUG 2",
         city: "LAS VEGAS, NV",
         place: "T-MOBILE ARENA"
      }
   ]

   const toursList = (<ul className="tourslist-ul">{toursListArray.map((tour) =>  
                            
                         ( <TourInfo
                             key = {tour.id} 
                             id = {tour.id}
                             date = {tour.date}
                             city = {tour.city}
                             place = {tour.place} />)
                             )} </ul>)
   return (
      <div className="homepage-container">
   <h1>TOURS</h1>
    {toursList}
   </div>
   )
}

export default HomePage;