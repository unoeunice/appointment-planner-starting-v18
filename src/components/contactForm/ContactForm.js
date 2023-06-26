import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
  handleSubmit,
  contact
}) => {

  console.log(contact)
  
  return (







    <div>
    <form onSubmit={handleSubmit}>


   
      

      Name<input name="name" type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
      Phone<input name="phone" type="tel" value={phone} 
       pattern="[0-9]{4}[0-9]{3}[0-9]{3}" onChange={(e)=>setPhone(e.target.value)}/>
      Email<input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

      <button type="submit">Submit</button>




    </form>
    
    

    
    </div>
  );
};

