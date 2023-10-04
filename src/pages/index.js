import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"
import video from "../assets/judopromo.mp4"
import Button from "../components/Button"
import NewsSlider from "../components/NewsSlider"
import "swiper/css"
import "../styles/pages/home.scss"
import { motion } from "framer-motion"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.slice(0, 3)

  return (
    <div className="home">
      <div className="home__video">
        <video src={video} autoPlay playsInline loop muted></video>
      </div>
      <Layout location={location} title={siteTitle}>
        <section className="home__section">
          <div className="home__section__title">
            <h2>O Nama</h2>
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, when: "beforeChildren" }}
            >
              私たちについて
            </motion.h4>
          </div>
          <div className="home__section__content">
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
            <Button link="/o-nama" content="Saznaj Više" />
          </div>
        </section>

        {posts.length ? <NewsSlider posts={posts} /> : ""}

        <section className="home__section home__section--reverse">
          <div className="home__section__title">
            <h2>Judo</h2>
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, when: "beforeChildren" }}
            >
              柔道
            </motion.h4>
          </div>
          <div className="home__section__content">
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
            <Button link="/trening" content="Pridruži nam se" />
          </div>
        </section>

        <section className="home__kano">
          <StaticImage
            className="home__kano__img"
            src="../assets/kano.jpg"
            alt="Kano Judo"
            width={400}
          />
          <motion.div
            className="home__kano__desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, when: "beforeChildren" }}
          >
            <h4>Jigoro Kano</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae earum quae autem quod ipsam similique sit, esse
              adipisci aperiam numquam?
            </p>
          </motion.div>
        </section>

        <section className="home__section-sponsors">
          <div className="home__section-sponsors__title">
            <h2>Partneri</h2>
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, when: "beforeChildren" }}
            >
              パートナー
            </motion.h4>
          </div>
          <div className="home__section-sponsors__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, a iste vel adipisci impedit magni? Quos harum sint
              voluptates velit?
            </p>
          </div>
          <div className="home__section-sponsors__wrap">
            <StaticImage
              src="../assets/gama.webp"
              alt="Gama AA Security Logo"
              layout="fixed"
              height={55}
              loading="lazy"
            />
            <StaticImage
              src="../assets/sensu.webp"
              alt="Sensu Boje i Lakovi Logo"
              layout="fixed"
              height={75}
              loading="lazy"
            />
            <StaticImage
              src="../assets/union.webp"
              alt="Union Banka Logo"
              layout="fixed"
              height={55}
              loading="lazy"
            />
            <StaticImage
              src="../assets/kenzo.png"
              alt="Kenzzo Logo"
              layout="fixed"
              height={75}
              loading="lazy"
            />
            <StaticImage
              src="../assets/avanti.webp"
              alt="Avanti Auto Dijelovi Logo"
              layout="fixed"
              height={35}
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
