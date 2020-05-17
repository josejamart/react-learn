import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/auth";
import Profile from "./components/profile/Profile"

function Admin(props) {
  const { logout, name, email, setName, setMail } = useContext(AuthContext);
  const [isProfileInEdition, setProfileInEdition] = useState(false);

  function edit() {
    setProfileInEdition(true);
  }

  console.log("repinto todo")

  if (isProfileInEdition) {
    console.log(true)
  }
  return (
    <div>
      <div>Admin Page</div>
      <button onClick={logout}>Log out</button>
      <button onClick={() => setName("uno-" + Math.random(100))}>Set name</button>
      <button onClick={() => setMail("dos-" + Math.random(100))}>Set mail</button>
      <button onClick={edit}>Edit profile</button>
      {isProfileInEdition && <Profile name={name} email={email} onClose={() => { setProfileInEdition(false) }} />}
    </div>
  );
}

export default Admin;