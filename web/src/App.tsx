import { useState } from 'react'
import { greet } from 'edge-inference'

function App() {
  const [name, setName] = useState('Miguel')
  const [greeting, setGreeting] = useState('')

  const handleGreet = async () => {
    // greet might be async depending on your implementation
    const message = await greet(name)
    setGreeting(message)
    console.log(message)
  }

  return (
    <div className="App">
      <h1>Edge Inference WASM</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleGreet}>Greet</button>
      </div>
      {greeting && <p>{greeting}</p>}
    </div>
  )
}

export default App