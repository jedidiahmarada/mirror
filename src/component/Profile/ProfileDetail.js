import React from "react";
import Myfeed from "./MyFeed";
import MyProfile from "./MyProfile";

const ProfileDetail = (props) => {
  switch (props.click) {
    case 2:
      return <Myfeed />;
    default:
      return <MyProfile />;
  }
};

export default ProfileDetail;
