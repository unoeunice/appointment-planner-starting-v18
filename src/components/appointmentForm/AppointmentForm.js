import React, { useMemo } from "react";
import {ContactPicker} from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  
  contact,
  state,
  setState,
  handleSubmit
}) => {

  const getContactNames = () => {
    return contact.map((contact) => contact.name);
  };



  
  return (
    <form onSubmit={handleSubmit}>  

    Name<input name="name" type="text" value={state.name} onChange= {(e) =>setState({[e.target.name]:e.target.value})}/>
    Date <input name="date" type="date" value={state.date} min={getTodayString()}  onChange= {(e) =>setState({[e.target.name]:e.target.value})}/>
    Time<input name="time" type="time" value={state.time} onChange= {(e) =>setState({[e.target.name]:e.target.value})}/>

  
    <ContactPicker
          name="contact"
          value={state.contact}
          contact={getContactNames()}
          onChange= {(e) =>setState({[e.target.name]:e.target.value})}
        />
    <button type="submit">Submit</button>







    </form>
  );
};
