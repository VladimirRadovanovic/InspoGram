import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../Auth/LogoutButton";
import cat from "../../images/cat.jpg";

function ProfileButton({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <img className="profile-pic-nav" src={cat} alt="cat" onClick={openMenu} />
      {showMenu && (
        <div
          className="profile-pic-dropdown"
          style={showMenu ? { transform: "translateY(10%)" } : {}}
        >
          <NavLink to={`/users/${user.id}`} activeClassName="active">
            <i className="fas fa-user-circle"></i>
          </NavLink>
          <LogoutButton />
        </div>
      )}
    </>
  );
}

export default ProfileButton;
