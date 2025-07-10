import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById("root")!; // non-null assertion

// the ! tells typescript "trust me, this won't be null"

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
