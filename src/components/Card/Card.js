import React from "react"

function Card({ children }) {
  return (
    <div className="py-12 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg">{children}</div>
      </div>
    </div>
  )
}

export default Card
