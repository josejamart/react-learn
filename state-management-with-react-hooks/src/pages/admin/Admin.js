import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/auth";
import Profile from "./components/profile/Profile"

function Admin(props) {
  const { state, dispatch } = useContext(AuthContext);
  const [isProfileInEdition, setProfileInEdition] = useState(false);

  function logOut() {
    dispatch({
      type: "LOGOUT",
    })
  }

  function edit() {
    setProfileInEdition(true);
  }

  return (
    <div>
      <div>Admin Page</div>
      <button onClick={logOut}>Log out</button>
      <button onClick={edit}>Edit profile</button>
      {isProfileInEdition && <Profile {...state} onClose={() => { setProfileInEdition(false) }} />}
    </div>
  );
}

export default Admin;