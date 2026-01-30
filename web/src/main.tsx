import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import init from "edge-inference"
import "./index.css"
import App from "./App.tsx"

const root = createRoot(document.getElementById("root")!)

root.render(<div>Loading WASM...</div>)

init()
  .then(() => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  })
  .catch(err => {
    console.error("WASM init error:", err)
    root.render(<div>Error: {err.message}</div>)
  })