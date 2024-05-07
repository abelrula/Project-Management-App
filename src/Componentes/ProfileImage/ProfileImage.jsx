import React from "react";
import "./profileImage.css"
const ProfileImage = ({ name }) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <div className="user-profile-image">
      {firstNameInitial}
      {lastNameInitial}
    </div>
  );
};
export default ProfileImage;