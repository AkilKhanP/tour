import React, { useState } from 'react'
import {useFormik} from 'formik'
import {bookingSchema} from "../../schemas"
import '../../App.css'
import {useDispatch,useSelector} from 'react-redux'
import {updateInputValue} from '../../action/index'
import * as  Yup from 'yup'


const radio = Yup.object().shape({
  inlineRadio: Yup.string().required('Require'),
  inlineCheckbox: Yup.array().required('Required'),
  destination:Yup.string().min(2).max(25).required("Please enter your destination"),
  // date:Yup.string().min(8).max(8).required("Please enter Date"),
  no_of_passenger:Yup.number().min(1).required("Enter no. of passenger"),
  from:Yup.string().min(4).max(25).required("Please enter your destination"),
  to:Yup.string().min(4).max(25).required("Please enter your destination"),
  inlineCheckbox1:Yup.boolean().oneOf([true],"please check the box").required("Please check the box"),
  inlineCheckbox5:Yup.boolean().oneOf([true],"Please accept travel ticket").required("Please accept travel ticket "),
})


const initialValues ={
    destination:"",
    date:"",
    no_of_passenger:"",
    from:"",
    to:"",
    inlineCheckbox:"",
    inlineCheckbox5:"",
    inlineRadio:""
}
function UpdateForm(props) {
    const myTrips= useSelector((state)=>state.getFieledValues)
  
    const updateTrips= useSelector((state)=>state.updateFieledValues)
const dispatch = useDispatch();
 const {values,errors,touched,handleBlur,handleChange,handleSubmit}=  useFormik({
        initialValues : initialValues,
        validationSchema:radio,
        onSubmit:(value,action)=>{
            console.log('submit value',value);
            // action.resetForm()
        }
     })
   
  return (  
  <div >
  <section className='booking_Part text-light' >
<form onSubmit={handleSubmit}>
  <div className='check_Box'>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox1" value='Hotle'  onChange={handleChange} onBlur={handleBlur}/>                               
  <label className="form-check-label" htmlFor="inlineCheckbox">Hotel</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox2" value='Car' onChange={handleChange} onBlur={handleBlur}/>
  <label className="form-check-label" htmlFor="inlineCheckbox">Car</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox3" value='Food' onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox">Food</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox4" value='SightSeeing' onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox">SightSeeing</label>
</div>
<p className='errors'>{values.inlineCheckbox1 || values.inlineCheckbox2 || values.inlineCheckbox3 || values.inlineCheckbox4 ?'': errors.inlineCheckbox}</p>

<div className='input_Type '>
<div className="mb-3">
  <label htmlFor="destination" className="form-label">Destination</label>
  <input   type="text" className={"form-control"} style={errors.destination && touched.destination ? {border:"2px solid red"}:{}} name='destination' id="destination" value={values.destination} onChange={handleChange} onBlur={handleBlur} />
  <p className='errors' >{errors.destination} </p>
</div>
<div className='row'>
<div className="mb-3 col-7 ">
<label htmlFor="date" className="form-label">Check-in / Check-Out Dates</label>
  <input type="date" className="form-control " name='date' id="date" value={values.date} onChange={handleChange} onBlur={handleBlur} />
<p className='errors'>{errors.date}</p>
</div>
<div className="mb-3 col-5">
  <label htmlFor="no_of_passenger" className="form-label" >No. of Passenger</label>
  <input type="number" className="form-control" style={errors.no_of_passenger && touched.no_of_passenger ? {border:"2px solid red"}:{}} name='no_of_passenger' id="no_of_passenger" value={values.no_of_passenger} onChange={handleChange} onBlur={handleBlur}/>
  <p className='errors'>{errors.no_of_passenger}</p>
</div>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name='inlineCheckbox5' id="inlineCheckbox5"  value='Yes' onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox5">Travel Tickets</label>
</div>
<p className='errors'>{errors.inlineCheckbox5}</p>
<div className='row'>
<div className="mb-3 col-6">
  <label htmlFor="from" className="form-label">From</label>
  <input type="text" className="form-control" style={errors.from && touched.from ? {border:"2px solid red"}:{}} name='from' id="from" placeholder='Destination' value={values.from} onChange={handleChange} onBlur={handleBlur} />
<p className='errors'>{errors.from}</p>
</div>
<div className="mb-3 col-6">
  <label htmlFor="to" className="form-label">To</label>
  <input type="text" className="form-control" style={errors.to && touched.to ? {border:"2px solid red"}:{}} name='to' id="to" placeholder='Destination' value={values.to} onChange={handleChange} onBlur={handleBlur}/>
<p className='errors'>{errors.to}</p>
</div>
</div>
</div>

<div className='check_Radio'>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio1"  value='Bus' checked={values.inlineRadio==='Bus'} onChange={handleChange} onBlur={handleBlur}  />
  <label className="form-check-label" htmlFor="inlineRadio1">Bus</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio2" value='Train' checked={values.inlineRadio==='Train'} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineRadio2">Train</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value='Flight' checked={values.inlineRadio==='Flight'} onChange={handleChange} onBlur={handleBlur}/>
  <label className="form-check-label" htmlFor="inlineRadio3">Flight</label>
</div>
<p className='errors'>{errors.inlineRadio}</p>
</div>
<div className="form_btn my-3">    
<button  className="btn_1 button1" type='submit' onClick={()=>{dispatch(updateInputValue(values))
     props.pro(false)} } >Udate</button>

</div>
</div>
</form>
    </section>
    </div>
  )
}

export default UpdateForm;


