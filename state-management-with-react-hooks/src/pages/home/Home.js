import React, { useState } from "react";
import PrincipalText from "./components/PrincipalText"

function Home(props) {

  const [changeText, setChangedText] = useState('');
  const [changeText_2, setChangedText_2] = useState('');

  console.log("repinto home")
  return (
    <div>
      <input value={changeText} onChange={(event) => { setChangedText(event.target.value) }} />
      <PrincipalText text={changeText} />
      <input value={changeText_2} onChange={(event) => { setChangedText_2(event.target.value) }} />
      <PrincipalText text={changeText_2} />
    </div >);
}

export default Home;