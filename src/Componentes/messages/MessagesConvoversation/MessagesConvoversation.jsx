import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
import MemeberInfo from "../memeberInfo/MemeberInfo";
import { GrAttachment } from "react-icons/gr";
 import "./messagesConversion.css";
import { openModal } from "../../../redux/slices/modalSlice";
 import PreviewImages from "../../Modals/PreviewImages/PreviewImages";
 
 const MessagesConvoversation = memo(() => {
  
   const [ messages, setMessages ] = useState( [] );
   const [previewUrl,setPreviewUrl]=useState([])
    const fileRef=useRef()
  const { id } = useParams();
  const dispatch = useDispatch();
   const { modalType, toggled } = useSelector( state => state.modal )
   
  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations/" + id);
       const data = await res.json();
      setMessages(data);
     }
    fetchMessages();
  }, [ id ] );
   
   const handle_file_ref_click=() =>{
     fileRef.current.click();
      
   }
  function readAndPreview (e) {
    const files = e.target.files
    if (files) {
             
      const Arrfiles = Array.from(files).map((img) => URL.createObjectURL(img))
       setPreviewUrl(Arrfiles)
    }
       dispatch( openModal( { modalType: "previewImage", toggled: true } ) )

   }
   console.log(previewUrl);
   
  return (
    <div className="messageConvo">
      <div className="MessagesConvoversation">
        <div className="MessagesConvoversation__header">
          <div
            className="MessagesConvoversation__header__sender"
            onClick={()=>dispatch(openModal({modalType:"memberInfo",toggled:true}))}
          >
            <img src={messages?.profile} alt="profile" />
            <div className="MessagesConvoversation__header__sender-stat">
              <p className="MessagesConvoversation__header__sender-stat-name">
                {messages?.name}
              </p>
              <span className="MessagesConvoversation__header__sender-stat-activeStatus"></span>
            </div>
          </div>
         
        </div>
        <div className="MessagesConvoversation__list element-with-scroll">
          {messages?.message?.map((item, i) => (
            <Fragment key={i}>
              <div className="MessagesConvoversation__list__sender">
                <p className="MessagesConvoversation__list__sender-message">
                  {item.sender}
                </p>
                <p className="MessagesConvoversation__list__sender-timeSent">
                  at 12:24 pm
                </p>
              </div>
              <div className="MessagesConvoversation__list__reciever">
                <p className="MessagesConvoversation__list__reciever-message">
                  {item.reciever}
                </p>
                <p className="MessagesConvoversation__list__reciever-timeSent">
                  at 12:24 pm
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="MessagesConvoversation__TypingBox">
          <div>
            <GrAttachment onClick={handle_file_ref_click} fontSize={24} className="infoIcon" />
            <input type="file" multiple onChange={ readAndPreview } ref={ fileRef } style={ { display: "none" } } />
        
            <textarea type="text" placeholder="hy"></textarea>
           </div>
          <button>send</button>
        </div>
      </div>
      { modalType === "memberInfo" && toggled === true && <MemeberInfo /> }
         {
              modalType === "previewImage" && toggled === true &&
             <PreviewImages previewUrl={previewUrl} />
      }
    </div>
  );
});
export default MessagesConvoversation;
