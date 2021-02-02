import React, { useState, useEffect } from "react"
import { streamVoters } from "services/firebase"
import { Icon } from "components"

function VoteResults({ voteId }) {
  const [vote, setVote] = useState({ name: "", results: [] })

  useEffect(() => {
    const unsubscribe = streamVoters(voteId, {
      next: (documentSnapshot) => {
        if (documentSnapshot.exists) {
          const updatedVote = documentSnapshot.data()
          setVote(updatedVote)
        } else {
          console.error("No vote found.")
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
          {vote.results.map((result, i) => {
            return (
              <div key={i} className="px-4 py-5 flex px-6 border-b border-gray-200 last:border-b-0">
                <div className="px-2 text-4xl">{result.emoji}</div>
                <dt className="flex-grow text-lg font-medium text-gray-900 self-center">{result.name}</dt>
                <dd className={`self-center h-6 w-6 ${result.vote ? "text-green-600" : "text-red-600"}`}>
                  <Icon name={result.vote ? "thumbsUp" : "thumbsDown"} />
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </React.Fragment>
  )
}

export default VoteResults
