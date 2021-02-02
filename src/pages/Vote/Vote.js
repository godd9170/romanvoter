import React, { useState } from "react"
import RegisterVoter from "./components/RegisterVoter"
import VoteResults from "./components/VoteResults"
import { addVote } from "services/firebase"
import { useParams } from "react-router-dom"
import { Card } from "components"

function Vote() {
  const [isRegistered, setIsRegistered] = useState(false)

  let { id } = useParams()

  const registerAndVote = (vote) => {
    addVote(id, vote) // add the new voter + vote
    setIsRegistered(true) // update to registered
  }

  return (
    <React.Fragment>
      <Card>
        {isRegistered ? <VoteResults voteId={id}></VoteResults> : <RegisterVoter registerAndVote={registerAndVote}></RegisterVoter>}
      </Card>
    </React.Fragment>
  )
}

export default Vote
