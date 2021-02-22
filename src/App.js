import React from "react"
import Chuck from "./media/chuck.jpg"

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="title">Chuck Norris API</h1>
          <img src={Chuck} alt="chuck" />
        </div>
        <div className="col-6 search-joke-col">
          <div className="card">
            <div className="card-header">Search for a word</div>
            <div className="card-body">
              <input class="search-option" type="text" />
            </div>
          </div>
          <div>
            <button className="btn btn-warning btn-lg">Generate Joke</button>
          </div>
        </div>
      </div>
      <div className="joke">
        <h2>Here is the joke!</h2>
        <h4>Chuck Norris is not afraid of anything</h4>
      </div>
    </div>
  )
}
