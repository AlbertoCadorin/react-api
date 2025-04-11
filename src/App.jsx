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
      {actor.map((element) => <div key={element.id}>
        <h4>{element.name}</h4>
        <img src={element.image} alt={element.name} />
        <ul>
          <li>Birth year: {element.birth_year}</li>
          <li>Nationality: {element.nationality}</li>
          <li>Known for: {element.known_for} </li>
          <li>Awards: {element.awards}</li>
          <li>Biography: {element.biography}</li>
        </ul>
      </div>)}
    </>
  )

}

export default App
