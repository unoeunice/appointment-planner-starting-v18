import React, { useState,useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointment,contact,addAppointment}) => {
  

const[name,setName]=useState("")

const[contactSelected,setContactSelected]=useState("")
const[date,setDate]=useState("")
const[time,setTime]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
   
    addAppointment(name,date,time,contactSelected)


    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  name={name} date={date} time={time} handleSubmit={handleSubmit} contact={contact} setName={setName} setTime={setTime} setDate={setDate} contactSelected={contactSelected} setContactSelected={setContactSelected} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointment}/>
      </section>
    </div>
  );
};