import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

render(
  <BrowserRouter>
    <React.StrictMode>
      <h1>Welcome to the FLY app</h1>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  , document.getElementById('root')
)
