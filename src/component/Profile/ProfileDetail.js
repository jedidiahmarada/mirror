import React from "react";
import Myfeed from "./MyFeed";
import MyProfile from "./MyProfile";

const ProfileDetail = (props) => {
  switch (props.click) {
    case 2:
      return <MyProfile />;
    default:
      return <Myfeed />;
  }
};

export default ProfileDetail;
