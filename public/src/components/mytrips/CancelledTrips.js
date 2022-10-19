import React from 'react'

function CancelledTrips() {
  return (
    <>
    <div className='cancel_background'></div>
    <div className='cancel_container'>
      <h1>Looks empty, you've no cancelled bookings.</h1>
      <button  className="btn_1 button1" type='submit'  >Plan A Trip</button>
    </div>
    </>
  )
}

export default CancelledTrips
