import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

export default function NewsSlider(props) {
  const { posts } = props

  return (
    <div className="news-slider">
      <div className="news-slider__title">
        <h2>Novosti</h2>
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          ニュース
        </motion.h4>
      </div>
      <div className="news-slider__desc">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ab
          commodi rem alias quia quasi doloremque quas suscipit dolore iure.
        </p>
      </div>
      <Swiper
        className="news-slider__swiper"
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        /* autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }} */
        onSlideChange={() => console.log("slide change")}
        modules={[Autoplay]}
      >
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug // Define 'title' here
          const image = getImage(
            post.frontmatter.thumbnail.childImageSharp.gatsbyImageData
          )
          return (
            <SwiperSlide key={post.fields.slug}>
              <article
                className="news-slider__item"
                itemScope
                itemType="http://schema.org/Article"
              >
                {post.frontmatter.thumbnail && (
                  <GatsbyImage
                    className="news-slider__item__thumb"
                    image={image}
                    alt={title}
                  />
                )}
                <Link to={"vijesti" + post.fields.slug} itemProp="url">
                  <h5 className="news-slider__item__title" itemProp="headline">
                    {title}
                  </h5>
                </Link>
              </article>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
