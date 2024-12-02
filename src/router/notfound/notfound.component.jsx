import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

function NotFound() {
  return (
    <div className="not-found-backdrop">
      <div className="not-found-content">
        <h1 className="not-found-title">404 - Recipe Not Found!</h1>
        <p className="not-found-message">
          Oops! It looks like the recipe you're looking for is missing from our
          cookbook.
        </p>
        <div className="not-found-emoji">🍲 🥕 🍋 🍞</div>
        <Link to="/" className="not-found-link">
          Return to the Kitchen
        </Link>
      </div>
    </div>
  )
}

export default NotFound
