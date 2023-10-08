import { Link } from "gatsby"
import React from "react"
import { useScroll } from "framer-motion"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [active, setActive] = useState(false)
  const { scrollYProgress } = useScroll()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const links = [
    {
      id: 1,
      href: "/",
      text: "Početna",
    },
    {
      id: 2,
      href: "/o-nama",
      text: "O nama",
    },
    {
      id: 3,
      href: "/vijesti",
      text: "Vijesti",
    },
    {
      id: 4,
      href: "/trening",
      text: "Trening",
    },
  ]

  scrollYProgress.on("change", latest => {
    if (latest > 0.03 && !active) {
      setActive(true)
    } else if (latest < 0.03 && active) {
      setActive(false)
    }
  })

  const handleContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleToggle = () => {
    const b = document.body
    if (mobileNavOpen) {
      setMobileNavOpen(false)
      b.classList.remove("noscroll")
    } else {
      setMobileNavOpen(true)
      b.classList.add("noscroll")
    }
  }

  const item = {
    exit: {
      top: "-100%",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.5,
      },
    },
  }

  return (
    <nav
      className={`navigation ${active ? "navigation--active" : ""}`}
      animate={mobileNavOpen ? "opened" : "closed"}
    >
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="navigation__mobile-menu"
            variants={item}
            initial={{ top: "-100%", opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <div className="navigation__mobile-menu__links">
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={link.id}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      transition: {
                        ease: "easeInOut",
                        delay: index * 0.1,
                      },
                    }}
                  >
                    <Link
                      className="navigation__mobile-menu__links__link"
                      to={link.href}
                      activeClassName="navigation__links__link--active"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navigation__inner">
        <Link to="/">
          <StaticImage
            className="navigation__logo"
            src="../assets/jcs_logo.png"
            height={50}
            placeholder="none"
            alt="Judo Klub Sarajevo Logo"
          />
        </Link>
        <div className="navigation__links">
          {links.map(link => {
            return (
              <Link
                key={link.id}
                className="navigation__links__link"
                to={link.href}
                activeClassName="navigation__links__link--active"
              >
                {link.text}
              </Link>
            )
          })}
          <motion.div
            whileHover={{ scale: 0.95 }}
            to="/kontakt"
            className="navigation__links__link navigation__links__link--contact"
            onClick={handleContact}
          >
            Kontakt
          </motion.div>
        </div>

        <div
          className={`navigation__toggle ${
            mobileNavOpen ? "navigation__toggle--active" : ""
          }`}
          onClick={handleToggle}
        >
          <div className="navigation__toggle__line"></div>
          <div className="navigation__toggle__line"></div>
        </div>
      </div>
    </nav>
  )
}
