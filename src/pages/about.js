import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import "../styles/pages/about.scss"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <div className="about">
        <h1>
          Judo
          <br />
          Klub
          <br />
          Sarajevo
        </h1>
        <div className="about__inner">
          <div className="about__values">
            <div className="about__values__value">
              <h4>Odanost</h4>
              <h4>忠誠</h4>
            </div>
            <div className="about__values__value">
              <h4>Čast</h4>
              <h4>名誉</h4>
            </div>
            <div className="about__values__value">
              <h4>Hrabrost</h4>
              <h4>勇気</h4>
            </div>
            <div className="about__values__value">
              <h4>Poštovanje</h4>
              <h4>尊敬</h4>
            </div>
            <div className="about__values__value">
              <h4>Uljudnost</h4>
              <h4>礼儀</h4>
            </div>
            <div className="about__values__value">
              <h4>Iskrenost</h4>
              <h4>誠実</h4>
            </div>
            <div className="about__values__value">
              <h4>Skromnost</h4>
              <h4>謙虚</h4>
            </div>
            <div className="about__values__value">
              <h4>Samokontrola</h4>
              <h4>自制心</h4>
            </div>
            <div className="about__values__value">
              <h4>Prijateljstvo</h4>
              <h4>友情</h4>
            </div>
          </div>
          <div className="about__content">
            <div className="about__content__section">
              <h3 className="about__content__section__title">O Nama</h3>
              <p>
                Osnovani smo 2008g. s misijom da klub mjesto gdje svatko može
                doći, vježbati i osjećati se zdravim. Naš holistički pristup
                džudu izdvaja nas od bilo kojeg drugog Judo kluba sa sjedištem u
                Sarajevu. Gledamo široku sliku i kombiniramo najbolje aspekte
                svih vrsta judo pokreta, kako bismo utjelovili ovaj pristup i
                redefinirali ono što može biti vrhunski Judoki klub. Budući da
                je pojavljivanje najteži dio, nastojimo biti sigurni da se za
                sve ostalo brinemo mi. Posjetite nas i uvjerit ćete se i sami.
              </p>
            </div>
            <div className="about__content__section">
              <h3 className="about__content__section__title">Vizija</h3>
              <p>
                Judo klub Sarajevo upravlja edukativnim judo uzrasnim
                odijeljenima. Naši džudisti su kroz ovaj sport dobijaju sportsku
                i socijalnu kompletnosti. Cilj je da naše judoke dobiju
                obijektvnost Karaktera, Integriteta, Intenziteta kako bi se
                razvio Sportski duh. da budu životni šampioni. Velika naša
                očekivanja od njih je stavljanja i žrtvovanje za kolektiv prije
                sebe što dolazi kroz izgradnju timskog iskustva, sudjelovanja na
                treninzima, kampovima i turnirskim prvenstvima na
                kontinentalnoj, svjetskoj, regionalnoj i domaćoj razini. Dok se
                trudimo izgraditi konkurentne, pobjedničke jedinke i timove,
                Judo klub sarajevo raste u jednu modernu sarajevsku judo školu
                koja uči svoje Judoke (Džudaše) da budu cijenjeni građani kao
                uspiješni takmičari.
              </p>
            </div>
            <div className="about__content__section">
              <h3 className="about__content__section__title">Misija</h3>
              <p>
                Naša judo misija je pružiti svima, od učenika koji polaze prvi
                put do profesionalnih džudista, najbolje sportske i judo uvjete
                kako bismo olakšali postizanje velikih judo rezultata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="O Nama" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
