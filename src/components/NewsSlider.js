import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function NewsSlider(props) {
  const { posts } = props

  return (
    <div className="news-slider">
      <h3 className="news-slider__title">Novosti</h3>
      <Swiper
        className="news-slider__swiper"
        spaceBetween={0}
        slidesPerView={1.2}
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
                <Link to={"vijesti" + post.fields.slug} itemProp="url">
                  <h2 className="news-slider__item__title" itemProp="headline">
                    {title}
                  </h2>
                </Link>
                {post.frontmatter.thumbnail && (
                  <GatsbyImage
                    className="news-slider__item__thumb"
                    image={image}
                    alt={title}
                  />
                )}
              </article>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
