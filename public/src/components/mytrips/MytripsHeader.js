import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SubtitlesOffTwoToneIcon from '@mui/icons-material/SubtitlesOffTwoTone';
import CancelledTrips from './CancelledTrips';
import Mytrips from './Mytrips';
import CompletedTrips from './CompletedTrips';
function MytripsHeader(props) {
   
  return (
    <div className='mytrips_Header_Container w-75 '>
      <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
     <Nav.Link className='line1' onClick={()=>{props.setrout(<Mytrips/>)}}> <AssignmentIcon/>UPCOMING</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link  className='line2' onClick={()=>{props.setrout(<CancelledTrips/>)}} ><SubtitlesOffTwoToneIcon/>CANCELLED</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link  className='line3' onClick={()=>{props.setrout(<CompletedTrips/>)}} ><AssignmentTurnedInIcon/>COMPLETED</Nav.Link>
      </Nav.Item>
    </Nav>
  
    </div>
  )
}

export default MytripsHeader
