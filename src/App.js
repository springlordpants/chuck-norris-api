import React, { useEffect, useState } from "react"
import Chuck from "./media/chuck.jpg"
import axios from "axios"

export default function App() {
  const [state, setState] = useState({
    joke: "",
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await axios.get("https://api.chucknorris.io/jokes/random")
    console.log(result.data.value)
    setState({
      ...state,
      joke: result.data.value,
    })
  }

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
              <input className="search-option" type="text" />
            </div>
          </div>
          <div>
            <button className="btn btn-warning btn-lg">Generate Joke</button>
          </div>
        </div>
      </div>
      <div className="joke">
        <h2>Here is the joke!</h2>
        <h4>{state.joke}</h4>
      </div>
    </div>
  )
}
