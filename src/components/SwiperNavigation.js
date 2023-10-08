import React from "react"
import { useSwiper } from "swiper/react"
import { motion } from "framer-motion"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

export default function SwiperNavigation() {
  const swiper = useSwiper()

  const hover = {
      scale: 1.1,
    },
    tap = {
      scale: 0.9,
    },
    goNext = () => {
      const currentIndex = swiper.activeIndex

      // Check if it's the last slide, and if so, go to the first slide
      if (currentIndex === swiper.slides.length - 1) {
        swiper.slideTo(0)
      } else {
        swiper.slideNext()
      }
    },
    goPrev = () => {
      const currentIndex = swiper.activeIndex

      // Check if it's the first slide, and if so, go to the last slide
      if (currentIndex === 0) {
        swiper.slideTo(swiper.slides.length - 1)
      } else {
        swiper.slidePrev()
      }
    }

  return (
    <div className="swiper-navigation">
      <motion.div
        className="swiper-navigation__button"
        whileHover={hover}
        whileTap={tap}
        onClick={goPrev}
      >
        <FiChevronLeft />
      </motion.div>
      <motion.div
        className="swiper-navigation__button"
        whileHover={hover}
        whileTap={tap}
        onClick={goNext}
      >
        <FiChevronRight />
      </motion.div>
    </div>
  )
}
