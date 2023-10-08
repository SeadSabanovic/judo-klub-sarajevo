import React from "react"
import "../styles/pages/news.scss"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LinesEllipsis from "react-lines-ellipsis"
import { motion, AnimatePresence } from "framer-motion"

const News = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes.slice(0, 5)
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="news">
        <h2 className="news__title">Vijesti</h2>
        <div className="news__wrap">
          <AnimatePresence>
            {posts.map((post, index) => {
              const title = post.frontmatter.title || post.fields.slug // Define 'title' here
              const image = getImage(
                post.frontmatter.thumbnail.childImageSharp.gatsbyImageData
              )
              return (
                <motion.article
                  key={post.fields.slug}
                  className="news__wrap__article"
                  itemScope
                  itemType="http://schema.org/Article"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 1 }}
                >
                  <Link to={"." + post.fields.slug} itemProp="url">
                    {post.frontmatter.thumbnail && (
                      <GatsbyImage
                        className="news__wrap__article__thumb"
                        image={image}
                        alt={title}
                      />
                    )}
                    <div className="news__wrap__article__content">
                      <LinesEllipsis
                        className="news__wrap__article__content__title"
                        text={title}
                        maxLine="2"
                        ellipsis="..."
                        basedOn="letters"
                        trimRight
                        component="h5"
                      />
                      {post.frontmatter.description && (
                        <LinesEllipsis
                          component="p"
                          text={post.frontmatter.description}
                          maxLine="3"
                          basedOn="letters"
                          trimRight
                        />
                      )}
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  )
}

export default News

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Vijesti" />

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
          description
        }
      }
    }
  }
`
