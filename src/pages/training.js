import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import "../styles/pages/training.scss"

const Training = ({ data, location }) => {
  const groups = [
    {
      id: "01",
      title: "Dječija grupa",
      days: "Ponedjeljak - Srijeda - Petak",
      time: "18:30h - 20:00h",
    },
    {
      id: "02",
      title: "Napredna grupa",
      days: "Ponedjeljak - Srijeda - Petak",
      time: "16:45h - 18:30h",
    },
    {
      id: "03",
      title: "Pirana grupa",
      days: "Utorak - Četvrtak",
      time: "18:30h - 20:00h",
    },
    {
      id: "04",
      title: "Stariji početnici",
      days: "Utorak - Četvrtak",
      time: "16:45h - 18:30h",
    },
    {
      id: "05",
      title: "Veterani",
      days: "Ponedjeljak - Srijeda - Petak",
      time: "20:00h - 21:30h",
    },
  ]
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <div className="training">
        <div className="training__header">
          <h1>Trening</h1>
          <h3>Cjenovnik i Termini</h3>
          <p>
            Posjeti nas, <span>prva 3 treninga su besplatna!</span>
          </p>
        </div>
        <div className="training__trainings">
          {groups.map(group => {
            return (
              <div className="training__trainings__section" key={group.id}>
                <h4>{group.title}</h4>
                <p>{group.days}</p>
                <h4>{group.time}</h4>
              </div>
            )
          })}
          <div className="training__trainings__section">
            <h4>Mjesečna Članarina</h4>
            <p>60KM</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Training

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Trening" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
