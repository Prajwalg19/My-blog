import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root as HTMLElement)
reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

