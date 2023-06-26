import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({
  contact,
  addContact


}) => {


const[name,setName]=useState("")
const[phone,setPhone]=useState("")
const[email,setEmail]=useState("")


const[duplicateName,setDuplicateName]=useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if(duplicateName===false){
   
      addContact(name,phone,email)

      setName("")
      setPhone("")
      setEmail("")
      

    }else{


      setName("")
      setPhone("")
      setEmail("")




    }


    



  };


function nameDuplicate(arr,prop){

return arr.map(item=>item[prop])


}


const contactNames=nameDuplicate(contact,"name")
console.log(contactNames)
   
  useEffect(()=>{



    if(contactNames.includes(name)){
      

     
   
     setDuplicateName(true);
   
    }else{
   
     setDuplicateName(false)
   
    }
     
   
   },[name,contact]) 
  
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  console.log(contact)


  return (
    <div>
      <section>

        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone} contact={contact}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contact} />
      </section>
    </div>
  );
};
