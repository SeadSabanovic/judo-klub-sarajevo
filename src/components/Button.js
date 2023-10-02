import { Link } from "gatsby"
import React from "react"

export default function Button(props) {
  const { content, link } = props
  return (
    <Link to={link} className="button">
      {content}
    </Link>
  )
}
