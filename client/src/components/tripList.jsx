import React from 'react';
import {render} from 'react-dom';
import Trip from './trip.jsx';
import axios from 'axios';
// import {API_KEY} from '../../API_KEY.js'

//  props: {
//       reserveSeat: function() {},
//       trips : [
//           {
//           description:"adasd",
//           driverId:21,
//           driverName:"Calvin",
//           endCity:"Los Angeles",
//           endSt:"11111 Richland Ave",
//           endState:"CA",
//           id:34,
//           numSeats:3,
//           seatPrice:30,
//           startCity:"Santa Monica",
//           startSt:"604 Arizona Ave ",
//           startState:"CA",
//           tripDate:"2016-09-13T00:00:00.000Z",
//           vehicleMake:"Honda",
//           vehicleModel:"Honda",
//           vehicleYear:"2000"
//           }
//   ]
// }
   


  const TripList = (props) => {
     console.log('props inside triplist', props)
     //first make API call to googleMapDirections to get latitude and longitude
     // have a .then (function(data) ) then take the data
    

    axios.get('https://maps.googleapis.com/maps/api/directions/json?', {
    params: {
      "origin": props.trips[0].startSt + props.trips[0].startCity,
      "destination": props.trips[0].endSt + props.trips[0].endCity,
      "key": 'inserkey'
    }
    })
    .then(function(response){
      console.log('response inside tripList inside axiosGet to googleDirections: ',response)
    })
    .catch(function(err) {
      console.error('error inside tripList inside axiosGet to googleDirections')
    })


     return (
       <div className="container">
         <div className="tripContainer">
           {props.trips.map((trip, index) => {
            return <Trip key={index} trip={trip} reserveSeat={props.reserveSeat}/>
           })}
           <div className="googleMap"></div>
         </div>
       </div>
     );
  }

export default TripList;
