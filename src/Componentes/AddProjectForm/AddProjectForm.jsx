import React, { useState ,useEffect} from "react";
 import "./addProjectForm.css";
import { HiCalendar } from "react-icons/hi";
 import { AiFillPlusCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
//  import Calendar from "react-calendar";
import moment from "moment";
const AddProjectForm = ( {setOpenModal} ) =>
{
  const date = new Date();
  const [ startDate, setStartDate ] = useState( "" );
  const [ endDate, setEndate ] = useState( "" );
  const [ description, setDescription ] = useState( "" );
  const [ selected, setSelected ] = useState( null );
  const [ tagColor, setTagColor ] = useState( "" );
  const colors = [ "#ff6161", "#39a8f7","#5e9197ab","#cd895f91","#930cc29e","#cdb15fc4","yellow" ];
  console.log( moment( startDate ).toDate() );
  console.log( moment( endDate ).toDate() );
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
          onClick={ () => setOpenModal( false ) }
          />
        </div>
        <div>
          <label>Add title</label>
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
          {/* <Calendar value={value} onChange={onChange} /> */ }
          <div>
         
            <label>  <HiCalendar className="calanderIcon" />start date</label> <input type="date" onChange={ ( e ) => setStartDate( e.target.value ) } />
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
        <button type="submit" className="addProject__button">
          <p>Add Project</p>
          <div>
            <AiFillPlusCircle />
          </div>
        </button>
        </form>
        </div>
      {/* <Outlet /> */ }
    </>
  )
} 

export default AddProjectForm;
