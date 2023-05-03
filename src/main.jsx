import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedText from './assets/components/AnimatedText.jsx'
import DanielPortfolio from './assets/components/Daniel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DanielPortfolio />
  </React.StrictMode>,
)
