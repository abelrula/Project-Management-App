import React, { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi";
 import { IoCloseCircleOutline, IoCloseOutline } from "react-icons/io5";
 import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import "./addProjectForm.css";
import FormSubmitButton from "../../Buttons/FormSubmitButton/FormSubmitButton";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
  
const colors = [ "#ff6161", "#39a8f7", "#5e9197ab", "#cd895f91", "#930cc29e", "#cdb15fc4", "yellow" ];

const AddProjectForm = ( ) =>{
  
  const dispatch=useDispatch()
   const [ startDate, setStartDate ] = useState( "" );
   const [ endDate, setEndate ] = useState( "" );
   const [ description, setDescription ] = useState( "" );
   const [openEmployee,setOpenEmployee]=useState(false)
   const [ tagColor, setTagColor ] = useState( "" );
   const [members, setMembers] = useState([]);
  const [ selectedCandidate, setSelectedCandidate ] = useState( [] )
   console.log(selectedCandidate);
 
   // delete selected candidate
  const deleteSelectedCandidates = (id) =>{
    const candidates=selectedCandidate.filter((candidate)=>candidate.id !== id)
   setSelectedCandidate(candidates)
 }
  // fetching memeber from json
  useEffect( () =>
  {
    async function fetchMembers  ( e )
  {
    const res = await fetch( "http://localhost:3500/members" )
    const data = await res.json()
      setMembers( data )
       
    }
    fetchMembers()
  }, [] )
   
   function handleSubmit ( e )
  {
    e.preventDefault();
  
  }


  return (
    <>
      <div className="modal">
      <form className="Form" onSubmit={ handleSubmit }>
        <header>
          <h6>Add Projects</h6>
          <IoCloseCircleOutline fontSize={ 27 } className="icon"
          onClick={ () => dispatch(closeModal()) }
          />
        </header>
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
           <div className="addproject__memberAdding">
            <label>Select Employee you want to assign 
            { !openEmployee && <FaArrowDown className="icon"
              onClick={ () =>
              {
                setOpenEmployee( true )
              } } /> }
            { openEmployee && <FaArrowUp className="icon"
              onClick={ () => setOpenEmployee( false ) } /> }
            </label>
            
            {/* selected Candidates */ }
           { selectedCandidate.length > 0 &&  <span
              className="employeContainer_members__selected element-with-scroll">
                { selectedCandidate?.map( ( candidate, i ) => (
                 <div
                  key={ i } 
                  className="employeContainer_members__selected-employee"
                  >
                 <div>
                 <img src={ candidate.profile } alt="profile" />
                  <h4>
                    {candidate.name}
                </h4>
                  </div>
                    <p>{ candidate.jobCatagory.substring(0,15) }...</p>
                    <IoCloseOutline
                      className="closeIcon"
                      // onClick={ () => deleteSelectedCandidates( candidate.id ) }
                    />
          </div>
               ))}
                
             </span> }
          
              {/* employee list to be selected to add in to the projects             */ }
            <div className="employeContainer_members"> 
              { openEmployee && members.map( ( employee, i ) => (
         <div
             key={ i } 
              onClick={ () =>{
                setOpenEmployee( false );
                setSelectedCandidate( (prev)=>[ ...prev, {
                       ...employee,
                       selected: true,
                } ] )
                                    } }
              className="employeContainer_members-employe"
           >
              <div>
                <img src={ employee.profile } alt="profile" />
            <h4>
              {employee.name}
            </h4>
              </div>
            <p>{employee.jobCatagory}</p>
         </div>
              ) ) } 
            </div>
            
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
