import React, { useState } from "react"
import VotePicker from "./VotePicker"
import { randomEmoji } from "services/emoji"

function RegisterVoter({ registerAndVote }) {
  const [name, setName] = useState("")
  const [vote, setVote] = useState(null)

  return (
    <React.Fragment>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div>
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              What is your name and vote?
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Let your fellow Roman Voters know how they should address you and how you stand on the issue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 pt-4 pb-4">
        <input
          type="text"
          name="first_name"
          id="first_name"
          autoComplete="given-name"
          placeholder="Julius Caesar"
          className="border border-gray-300 rounded py-2 px-3 text-grey-darkest w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="px-4 sm:px-6 pt-4 pb-4">
        <VotePicker setVote={setVote} />
      </div>
      <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          disabled={name === "" || vote === null ? true : false}
          onClick={() => {
            registerAndVote({ name, vote, emoji: randomEmoji })
          }}
          type="button"
          className="disabled:opacity-50 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Vote!
        </button>
      </div>
    </React.Fragment>
  )
}

export default RegisterVoter
