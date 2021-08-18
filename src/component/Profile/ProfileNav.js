import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail";
import { FiCamera } from "react-icons/fi";
import "./profile.css";

const ProfileNav = () => {
  const [menuAktif, setMenuAktif] = useState({
    feed: true,
    profile: false,
    logout: false,
  });

  const [click, setClick] = useState(1);

  const myProfile = (event) => {
    setMenuAktif({
      feed: false,
      profile: true,
      logout: false,
    });
    setClick(2);
  };

  const myFeed = (event) => {
    setMenuAktif({
      feed: true,
      profile: false,
      logout: false,
    });
    setClick(1);
  };

  const hanldeLogout = () => {
    const store = window.localStorage;
    store.clear();

    window.location.reload();
  };

  return (
    <>
      <div className="containerNav">
        <div className="logo">
          <img
            src="https://bn1305files.storage.live.com/y4m0mE5ICcfWEBD8eMhJHJFf6ijZresz7gqyfearA-OgMlV2zeceuKURr7lMvboQtJ9LKIzptuyTAdzxJyjiinCIc19yrFfyBvJx5mv7ihhqu8TVrZRYKSREN07XgYQRiygBBJt4MUYASBX3J8OnTA3Y0Tu-XuY4bzFu0LsWgSQ5DOyz545_oh2x7p2gt6Pb5F-hl6NQJG6EU7gilF-ckCOIw/logo%20mirror.psd?psid=1&width=1600&height=2048"
            alt="logo"
          />
        </div>
        <div className="profile">
          <div className="profile-Nav">
            <div className="profile-Image">
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                alt="profile"
              />
              <FiCamera
                size="15"
                style={{
                  alignItems: "center",
                  color: "gray",
                  marginTop: "57px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="profile-Username">
            <p>Administrasi</p>
            <p>@adm</p>
          </div>
          <div className="profile-folower">
            <div className="info1">
              <div>Post</div>
              <div>123</div>
            </div>
            <div className="info">
              <div>Follower</div>
              <div>123</div>
            </div>
            <div className="info3">
              <div>Following</div>
              <div>123</div>
            </div>
          </div>
          <div className="profile-bio">
            <div>
              <span>Develover</span>
            </div>
            <div>
              <p>
                Like Travel and shoot cinematic and photos. Tools - Capture For
                one raw
              </p>
            </div>
          </div>
          <div className="profile-Menu">
            <div className="profile-Menu-pilih">
              <img
                src="https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png"
                alt="user"
              />
              <strong
                onClick={myFeed}
                className={
                  menuAktif.myFeed
                    ? "profile-Button-inactive"
                    : "profile-Button-active"
                }
              >
                Feed
              </strong>
            </div>

            <div className="profile-Menu-pilih">
              <img
                src="https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png"
                alt="folder"
              />
              <strong
                onClick={myProfile}
                className={
                  menuAktif.myProfile
                    ? "profile-Button-inactive"
                    : "profile-Button-active"
                }
              >
                Profile
              </strong>
            </div>

            <div className="profile-Menu-pilih-log">
              <img
                src="https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png"
                alt="logout"
              />
              <strong
                onClick={hanldeLogout}
                className={
                  menuAktif.logout
                    ? "profile-Button-inactive"
                    : "profile-Button-active"
                }
              >
                Logout
              </strong>
            </div>
          </div>
        </div>
        {/* <ProfileDetail click={click} /> */}
      </div>
    </>
  );
};

export default ProfileNav;
