import React, { useState } from "react";
 import "./addMemberForm.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
const AddMemberForm = ( {setOpenModal} ) =>
{
  const [ username, setUsername ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const dispatch=useDispatch()

  function handleSubmit ( e )
  {
    e.preventDefault();
  
  }
 return (
    <>
      <div className="modal">
      <form className="addMember" onSubmit={ handleSubmit }>
        <div className="addMember_header">
          <h1>Add Member</h1>
          <IoCloseCircleSharp fontSize={ 27 } className="icon"
          onClick={ () => dispatch(closeModal()) }
          />
        </div>
          <div>
          <label>Email:-</label>
          <input
            type="text"
            id="email"
            value={ email }
            className="addMember__textarea"
            onChange={ ( e ) => setEmail( e.target.value ) }
            placeholder="Someone@gmail.com"
          />
        </div>
        <FormSubmitButton buttonName="Send Invitaion"/>
        </form>
        </div>
      {/* <Outlet /> */ }
    </>
  )
 
} 

 

export default AddMemberForm;