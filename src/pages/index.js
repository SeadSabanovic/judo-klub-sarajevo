import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as style from "../styles/modules/home.module.scss"
import video from "../assets/judopromo.mp4"
import kano from "../assets/kano.jpg"
import Button from "../components/Button"
import NewsSlider from "../components/NewsSlider"
import "swiper/css"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.slice(0, 3)

  /* if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  } */

  return (
    <div className={style.home}>
      <div className={style.home__video}>
        <video src={video} autoPlay playsInline loop muted></video>
      </div>
      <Layout location={location} title={siteTitle}>
        <section className={style.home__section}>
          <div className={style.home__section__title}>
            <h2>O Nama</h2>
          </div>
          <div className={style.home__section__content}>
            <p>
              Smješten u Sarajevu, nekoliko minuta hoda od hotela Novotel Judo
              klub Sarajevo pruža prvoklasnu obuku i treniranje džudoa za sve
              uzraste, od početnika do stručnjaka.
            </p>
            <p>
              Judo klub Sarajevo je osnovan 20xx godine, naš dojo se nalazi samo
              dvije minute hoda od novog Sarajevo Tower-a. Naš klub nudi niz
              pristupačnih časova za sve starosne grupe, od 5 pa nadalje, s
              bogatim naslijeđem naših osnivača sa preko 20 godina iskustva.
              Razvoj talenta naših članova kroz takmičenje i kontinuirano
              treniranje, naglašava našu stalnu posvećenost sportu.
            </p>
            <p>
              Mi smo prijateljski i profesionalni klub i naša vrata su otvorena
              za one koji žele prvi put probati džudo ili čak za iskusne
              džudiste koji su željni povratku na strunjače.
            </p>
          </div>
        </section>

        {posts.length ? <NewsSlider posts={posts} /> : ""}
        <ol>{}</ol>

        <section className={style.home__section}>
          <div className={style.home__section__content}>
            <p>
              Džudo je stvoren kao fizičko, mentalno i moralno obrazovanje u
              Japanu. Općenito se karakterizira kao moderna borilačka vještina.
              Njegovo najistaknutije svojstvo je takmičarski element u kojem je
              cilj baciti ili oboriti protivnika na zemlju, imobilizirati ga ili
              na neki drugi način svladati protivnika držanjem ili
              prisiljavanjem da se pokori koristeći se zglobnim zaključavanjem
              ili hvatom oko vrata.
            </p>
            <p>
              Džudo je stvoren kao fizičko, mentalno i moralno obrazovanje u
              Japanu. Općenito se karakterizira kao moderna borilačka vještina.
              Njegovo najistaknutije svojstvo je takmičarski element u kojem je
              cilj baciti ili oboriti protivnika na zemlju, imobilizirati ga ili
              na neki drugi način svladati protivnika držanjem ili
              prisiljavanjem da se pokori koristeći se zglobnim zaključavanjem
              ili hvatom oko vrata.
            </p>
            <p>
              Udarci i pritisci rukama i stopalima, kao i oružana odbrana dio su
              džudoa, ali samo u unaprijed dogovorenom obliku (kata, 形) i nisu
              dozvoljeni na džudo takmičenjima ili slobodnim treninzima
              (randori, 乱取り). Osoba koja se bavi džudom naziva se džudoka.
            </p>
            <div className={style.home__section__content__kano}>
              <img src={kano} alt="Kano Judo" />
              <h4>Jigoro Kano</h4>
              <p>'If there is effort, there is always accomplishment.'</p>
            </div>
          </div>
          <div className={style.home__section__title}>
            <h2>Judo</h2>
          </div>
        </section>
        <section className={style.home__split}>
          <div className={style.home__split__container}>
            <h4>IMAŠ LI ŠTA JE POTREBNO?</h4>
            <Button content="Pridruži nam se!" link="/trening" />
            <img
              className={style.home__split__container__bg}
              src="https://images.pexels.com/photos/6253307/pexels-photo-6253307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={style.home__split__container}>
            <h4>Podrži klub</h4>
            <Button content="Postani sponzor" link="/trening" />
            <img
              className={style.home__split__container__bg}
              src="https://images.pexels.com/photos/2425464/pexels-photo-2425464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Početna" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
