import React from "react";

export const ContactForm = ({
  state,
  setState,
  handleSubmit
}) => {
  return (
    <div>
    <form onSubmit={handleSubmit}>
      

      Name<input name="name" type="text"  value={state.name} onChange= {(e) =>setState({[e.target.name]:e.target.value})} />
      Phone<input name="phone" type="tel" value={state.phone} 
       pattern="[0-9]{4}[0-9]{3}[0-9]{3}" onChange= {(e) =>setState({[e.target.name]:e.target.value})}/>
      Email<input name="email" type="email" value={state.email} onChange= {(e) =>setState({[e.target.name]:e.target.value})}/>

      <button type="submit">Submit</button>




    </form>
    
    
    
    </div>
  );
};

