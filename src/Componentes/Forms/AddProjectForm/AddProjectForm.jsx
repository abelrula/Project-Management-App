import React, { useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import moment from "moment";
import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import "./addProjectForm.css";
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";

const AddProjectForm = ( ) =>{
  
  const dispatch=useDispatch()
   const [ startDate, setStartDate ] = useState( "" );
  const [ endDate, setEndate ] = useState( "" );
  const [ description, setDescription ] = useState( "" );
  const [ selected, setSelected ] = useState( null );
  const [ tagColor, setTagColor ] = useState( "" );
  const colors = [ "#ff6161", "#39a8f7","#5e9197ab","#cd895f91","#930cc29e","#cdb15fc4","yellow" ];
   function handleSubmit ( e )
  {
    e.preventDefault();
  
  }
  return (
    <>
      <div className="modal">
      <form className="addProject" onSubmit={ handleSubmit }>
        <div className="addProject_header">
          <h1>Add Projects</h1>
          <IoCloseCircleSharp fontSize={ 27 } className="icon"
          onClick={ () => dispatch(closeModal()) }
          />
        </div>
        <div className="project__name">
          <label>Add Project name</label>
          <input
            type="text"
            id="description"
            value={ description }
            className="addProject__textarea"
            onChange={ ( e ) => setDescription( e.target.value ) }
            placeholder=""
          />
        </div>
        <div className="addProject_date">
             <div>
              <label>  <HiCalendar className="calanderIcon" />start date
              </label>
              <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
            </div>
             <div>
              <label>  <HiCalendar className="calanderIcon" />end date
              </label>
              <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
            </div>
        </div>
        <div className="addProject__tags">
          <label>Select Tag :</label>
          <div>
            { colors.map( ( color ) => (
              <div className="addProject__tag">
                <div
                  className="tag"
                  onClick={ () => setTagColor( color ) }
                  style={ {
                    background: `${ color }`,
                    border: tagColor === color ? "2px solid black" : "none",
                  } }
                ></div>
              </div>
            ) ) }
          </div>
        </div>
           <FormSubmitButton buttonName="Add Project" />
        </form>
        </div>
     </>
  )
} 

export default AddProjectForm;
