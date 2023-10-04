import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} <Link to="/">Judo Klub Sarajevo</Link>{" "}
    </footer>
  )
}
