import React, { useState,useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const[state,setState]=useState({
  name:"",
  date:"",
  time:"",
  contact:""

  })
  const handleSubmit = (e) => {
    e.preventDefault();
   
    setState({[e.target.name]:e.target.value})
    props.addAppointment(state)
   

    setState({

      name:"",
      date:"",
      time:"",
      contact:""


    })


    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm state={state} setState={setState} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={props.appointment}/>
      </section>
    </div>
  );
};