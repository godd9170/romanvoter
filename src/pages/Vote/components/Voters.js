import React, { useState, useEffect } from "react"
import { streamVoters } from "services/firebase"

function Voters({ voteId }) {
  const thumbsDownIcon =
    "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  const thumbsUpIcon =
    "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  //const waitingIcon = "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"

  const [voters, setVoters] = useState({})

  useEffect(() => {
    const unsubscribe = streamVoters(voteId, {
      next: (documentSnapshot) => {
        if (documentSnapshot.exists) {
          const updatedVoters = documentSnapshot.data()
          setVoters(updatedVoters)
        } else {
          console.log("NO DOC :(")
        }
      },
      error: () => console.error("Error"),
    })
    return unsubscribe
  }, [voteId])

  return (
    <React.Fragment>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Voting Arena</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is how everyone has voted. Copy the link in the URL and send to other required voters
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {Object.entries(voters).map(([emoji, voter], i) => {
            return (
              <div key={i} className="px-4 py-5 flex px-6 border-b border-gray-200 last:border-b-0">
                <div className="px-2 text-4xl">{emoji}</div>
                <dt className="flex-grow text-lg font-medium text-gray-900 self-center">{voter.name}</dt>
                <dd className={`self-center h-6 w-6 ${voter.vote ? "text-green-600" : "text-red-600"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="none">
                    <path fillRule="evenodd" clipRule="evenodd" d={voter.vote ? thumbsUpIcon : thumbsDownIcon} />
                  </svg>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </React.Fragment>
  )
}

export default Voters
