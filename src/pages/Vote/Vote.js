import React, { useState } from "react"
import RegisterVoter from "./components/RegisterVoter"
import Arena from "./components/Arena"
import Voters from "./components/Voters"
import { addVote } from "services/firebase"
import { useParams } from "react-router-dom"

function Vote() {
  const [isRegistered, setIsRegistered] = useState(false)

  let { id } = useParams()

  const registerAndVote = (vote) => {
    addVote(id, vote) // add the new voter + vote
    setIsRegistered(true) // update to registered
  }

  return (
    <React.Fragment>
      <Arena>{isRegistered ? <Voters voteId={id}></Voters> : <RegisterVoter registerAndVote={registerAndVote}></RegisterVoter>}</Arena>
    </React.Fragment>
  )
}

export default Vote
