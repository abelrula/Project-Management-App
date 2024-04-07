import React, { useState } from "react";
 import "./addMemberForm.css";
import { IoCloseCircleSharp } from "react-icons/io5";
const AddMemberForm = ( {setOpenModal} ) =>
{
  const [ username, setUsername ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
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
          onClick={ () => setOpenModal( false ) }
          />
        </div>
        <div>
          <label>Employee Username :-</label>
          <input
            type="text"
            id="username"
            value={ username }
            className="addMember__textarea"
            onChange={ ( e ) => setUsername( e.target.value ) }
            placeholder="abelRula"
          />
          </div>
          <div>
          <label>Employee Email :-</label>
          <input
            type="text"
            id="email"
            value={ email }
            className="addMember__textarea"
            onChange={ ( e ) => setEmail( e.target.value ) }
            placeholder="Someone@gmail.com"
          />
        </div>
        {/* <div className="addMember_date"> */}
          {/* <Calendar value={value} onChange={onChange} /> */ }
          {/* <div>
            <label>  <HiCalendar className="calanderIcon" />start date :</label> <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } /> 
          </div> */}
        {/* </div> */}
        <button type="submit" className="addMember__button">
          <p>Send Invitaion</p>
        </button>
        </form>
        </div>
      {/* <Outlet /> */ }
    </>
  )
 
} 

 

export default AddMemberForm;