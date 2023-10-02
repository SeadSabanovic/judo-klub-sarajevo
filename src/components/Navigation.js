import { Link } from "gatsby"
import React from "react"
import logo from "../assets/jcs_logo.png"

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <Link to="/">
          <img
            className="navigation__logo"
            src={logo}
            alt="Judo Klub Sarajevo Logo"
          />
        </Link>
        <div className="navigation__links">
          <Link to="/">Početna</Link>
          <Link to="/o-nama">O nama</Link>
          <Link to="/vijesti">Vijesti</Link>
          <Link to="/trening">Trening</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </div>
    </nav>
  )
}
