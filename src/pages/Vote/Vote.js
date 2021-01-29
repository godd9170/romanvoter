import React, { useState } from "react"
import RegisterVoter from "./components/RegisterVoter"
import Arena from "./components/Arena"
import Voters from "./components/Voters"

function Vote() {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <React.Fragment>
      <Arena>
        {isRegistered ? <Voters voters={[1, 2, 3]}></Voters> : <RegisterVoter setIsRegistered={setIsRegistered}></RegisterVoter>}
      </Arena>
    </React.Fragment>
  )
}

export default Vote
