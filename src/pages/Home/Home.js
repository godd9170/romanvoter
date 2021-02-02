import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { createVote } from "services/firebase"

function Home() {
  return (
    <React.Fragment>
      <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"></div>
        <main className="mt-10 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left lg:max-w-md">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Build Team Consensus with </span>
              <span className="block text-indigo-600 xl:inline">Roman Voting</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Roman voting is used by teams or other groups in agile organizations when making a single yes/no decision. After discussing
              the merits of a possible decision, each participant votes. A thumb up is a vote in favor of a decision. A thumb down is a vote
              against that decision.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to={(location) => {
                    const voteId = nanoid()
                    createVote(voteId, "New Vote!!!") // TODO: allow user to name the vote
                    return { ...location, pathname: `/vote/${voteId}` }
                  }}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1555507679-1983b74f940c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </React.Fragment>
  )
}

export default Home
