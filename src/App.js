import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const[contact,setContact]=useState([]);


  const[appointment,setAppointment]=useState([]);




 const addContact=(name,phone,email)=>{
  
  setContact((prev)=>{

  return [...prev,{name:name,phone:phone,email:email}]


  })


 }

 const addAppointment=(name,contactSelected,date,time)=>{

  setAppointment((prev)=>{
  return [...prev,{name,contactSelected,date,time}]
  }
)



}



  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contact={contact} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contact={contact} appointment={appointment} addAppointment={addAppointment}/>  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
