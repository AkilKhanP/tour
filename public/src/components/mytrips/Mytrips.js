import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import BookingForm from '../home/BookingForm'
import UpdateForm from './UdateForm'
import {deletInputValue} from '../../action/index'
function Mytrips() {
    const myTrips= useSelector((state)=>state.getFieledValues)
    
    const dispatch = useDispatch();
    
  
   
  
  return (<>
  <div className='mtrip_background'></div>
      {myTrips.map((trips,i)=>
    <div className='mytrips_container' key={i} >
     <div className='mytrip_subcontainer'>  
    <div>
        <pre  >Facility        :   { trips.inlineCheckbox}</pre>
        <pre>Destination     :   { trips.destination  }</pre>
        <pre>CheckIn/ChexkOut:   {trips.date }</pre>
        <pre>No. Of Passenger:   { trips.no_of_passenger}</pre>
        </div>
        <div className='data2'>
        <pre>Travel Tickets  :   { trips.inlineCheckbox5 } </pre>
        <pre>From            :   { trips.from }</pre>
        <pre>To              :   { trips.to }</pre>
        <pre>Transportaton   :   { trips.inlineRadio }</pre>
        </div>
        <div className='btn_container'>
     <button  className="btn_1 button1" type='submit'  >Update</button>
     <button  className="btn_1 button1" type='submit' >Cancel</button>
     </div>
     </div>
    </div>
    )}
     
    </>
  )
}

export default Mytrips
