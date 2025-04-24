import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById("root")!)
root.render(<App />)

// Override injected meta tag if needed
const updateMeta = () => {
  const descriptionTag = document.querySelector("meta[name='description']")
  if (descriptionTag) {
    descriptionTag.setAttribute("content", "Innovative marking solutions")
  } else {
    const newMeta = document.createElement("meta")
    newMeta.name = "description"
    newMeta.content = "Innovative marking solutions"
    document.head.appendChild(newMeta)
  }
}

// Run after initial render and again after a short delay to override GPTEngineer
updateMeta()
setTimeout(updateMeta, 1000)
