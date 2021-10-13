import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>

            <nav className="navbar  navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
                            <NavLink className="nav-link" to="/localisation" exact >Localisation</NavLink>
                            <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
