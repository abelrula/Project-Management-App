import React from "react";
import "./commentSection.css";
 import { LiaComments } from "react-icons/lia";
 import AddButton from "../../AddButton/AddButton";
import BoxHeader from "../../boxHeader/BoxHeader";
const CommentSection = () => {
  return (
    <div className="CommentSection">
      <BoxHeader icon={<LiaComments />} header="New Comments"   />
      <div className="CommentSection_TeamsComment">
        <div className="CommentSection_TeamsComment-Usercomments">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness </h6>
            <p> unique comments only, specific hashtags, and mentions.</p>
          </span>
        </div>
        <div className="CommentSection_TeamsComment-Usercomments">
          <img
            src="https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness</h6>
            <p> unique comments only, specific hashtags, and mentions.</p>
          </span>
        </div>
        <div className="CommentSection_TeamsComment-Usercomments">
          <img
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="avatar"
          />
          <span>
            <h6>elon musk from buisness</h6>
            <p> unique comments only, specific hashtags, and mentions.</p>
          </span>
        </div>
       
      </div>
                <AddButton name="Comment" />
    </div>
  );
};

export default CommentSection;
