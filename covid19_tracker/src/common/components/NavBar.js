import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Covid19Tracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">WorldWide</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/country">By country</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/what-to-do">What to do</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
