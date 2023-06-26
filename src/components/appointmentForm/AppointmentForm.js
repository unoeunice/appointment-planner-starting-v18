import React, { useMemo } from "react";
import {ContactPicker} from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  
 name,date,time,handleSubmit,contact,setName,setDate,setTime,contactSelected,setContactSelected
}) => {

  


  console.log(contact)


  
  return (
    <form onSubmit={handleSubmit}>  

    Name<input name="name" type="text" value={name} onChange= {(e) =>setName(e.target.value)}/>
    Date <input name="date" type="date" value={date} min={getTodayString()}  onChange= {(e) =>setDate(e.target.value)}/>
    Time<input name="time" type="time" value={time} onChange= {(e) =>setTime(e.target.value)}/>

  
    <ContactPicker
        contact={contact}
         name={name}
         onChange={(e)=>{setContactSelected(e.target.value)}}
         value={contactSelected}


        />
    <button type="submit">Submit</button>







    </form>
  );
};
