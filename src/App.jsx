import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [actor, setActor] = useState([])

  function fetchActor() {
    axios.get("https://www.freetestapi.com/api/v1/actors")
      .then((res) => setActor(res.data))
  }

  useEffect(fetchActor, [])
  console.log(actor)
  return (
    <>
      <div>
        <h1>Liasta Attori</h1>
      </div>
      <hr />
      <ul>
        {actor.map((element) => <li key={element.id}>{element.name}</li>)}
      </ul>
    </>
  )

}

export default App
