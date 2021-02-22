import React from "react"
import Chuck from "./media/chuck.jpg"

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris API</h1>
          <img src={Chuck} alt="chuck" className="chuck" />
        </div>
      </div>
    </div>
  )
}
