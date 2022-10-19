import React, { useState } from 'react'
import CancelledTrips from '../components/mytrips/CancelledTrips'
import CompletedTrips from '../components/mytrips/CompletedTrips'
import Mytrips from '../components/mytrips/Mytrips'
import MytripsHeader from '../components/mytrips/MytripsHeader'

function Trips() {
const [rout,setRout]=useState()

  return (
    <div className='trips_container'>
     <MytripsHeader setrout={setRout}/>
     {rout}
      {/* <Mytrips/>
      <CancelledTrips/>
      <CompletedTrips/> */}
    </div>
  )
}

export default Trips
