import React from "react"
import { Icon } from "components"

function VotePicker({ setVote }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setVote(true)}
        className={`mx-5 text-green-600 hover:bg-green-200 hover:bg-opacity-30 rounded-full p-4 cursor-pointer focus:outline-green`}
      >
        <Icon name="thumbsUp" className="h-20 sm:h-40" />
      </button>
      <button
        onClick={() => setVote(false)}
        className="mx-5 text-red-600 hover:bg-red-200 hover:bg-opacity-30 rounded-full p-4 cursor-pointer focus:outline-red"
      >
        <Icon name="thumbsDown" className="h-20 sm:h-40" />
      </button>
    </div>
  )
}

export default VotePicker
