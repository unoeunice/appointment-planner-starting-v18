import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  
const[state,setState]=useState({
name:"",
phone:"",
email:""


})

const[duplicateName,setDuplicateName]=useState(false)






  const handleSubmit = (e) => {
    e.preventDefault();
    
    /*setState({[e.target.name]:e.target.value})*/
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
 

   
    


    if(duplicateName===false){
   
    props.addContact(state)

    }

    setState({
      name:"",
      phone:"",
      email:""
      
      
      })

  };


  useEffect(()=>{



    if(props.contact.indexOf(state.name)!==-1){

     
   
     setDuplicateName(true);
   
    }else{
   
     setDuplicateName(false)
   
    }
     
   
   },[state.name]) 
  
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */




  return (
    <div>
      <section>

        <h2>Add Contact</h2> 
        <ContactForm state={state} setState={setState}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contact}/>
      </section>
    </div>
  );
};
