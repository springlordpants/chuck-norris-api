import React, { useEffect, useState } from "react"
import Chuck from "./media/chuck.jpg"
import axios from "axios"

export default function App() {
  const [state, setState] = useState({
    joke: "",
    searchKeyword: "",
    searchURL: "https://api.chucknorris.io/jokes/search?query=",
  })

  useEffect(() => {
    fetchData() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    const result = await axios.get("https://api.chucknorris.io/jokes/random")
    setState({
      ...state,
      joke: result.data.value,
    })
  }

  const searchJoke = (event) => {
    setState({
      ...state,
      searchKeyword: event.target.value,
    })
  }

  const fetchMyJoke = async () => {
    const result = await axios.get(state.searchURL + state.searchKeyword)

    try {
      const randomJoke = Math.floor(
        Math.random() * result.data.result.length + 1
      )
      setState({
        ...state,
        joke: result.data.result[randomJoke].value,
      })
    } catch (e) {
      setState({
        ...state,
        joke:
          "This joke does not exist because Chuck Norris roundhouse kicked it into the sun!",
      })
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h1 className="title">Chuck Norris Joke Generator</h1>
          <img src={Chuck} alt="chuck" />
        </div>
        <div className="col-md-6 col-sm-6 search-joke-col">
          <div className="card">
            <div className="card-header">Search for a word</div>
            <div className="card-body">
              <input type="text" onChange={searchJoke} />
            </div>
          </div>
          <div>
            <button className="btn btn-warning" onClick={fetchMyJoke}>
              Generate Joke
            </button>
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
