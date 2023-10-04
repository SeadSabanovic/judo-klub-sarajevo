import React from "react"
import {
  LiaMapMarkedAltSolid,
  LiaEnvelopeSolid,
  LiaPhoneSolid,
} from "react-icons/lia"
import { motion } from "framer-motion"

import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <h2>Kontakt</h2>
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, when: "beforeChildren" }}
        >
          接触
        </motion.h4>
      </div>
      <p className="contact__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        repudiandae adipisci at, exercitationem temporibus reiciendis alias
        doloribus quae facere architecto.
      </p>
      <div className="contact__sections">
        <div className="contact__sections__section">
          <LiaEnvelopeSolid className="contact__sections__section__icon" />
          <a href="mailto:jsc@gmail.com">jsc@gmail.com</a>
        </div>
        <div className="contact__sections__section">
          <LiaPhoneSolid className="contact__sections__section__icon" />
          <a href="tel:+38762960000">(+387) 62 960 000</a>
        </div>
        <div className="contact__sections__section">
          <LiaMapMarkedAltSolid className="contact__sections__section__icon" />
          <a
            rel="noreferrer"
            href="https://maps.app.goo.gl/iqmrEvY1iyc3GpcQ6"
            target="_blank"
          >
            Kolodvorska 12a,
            <br />
            Sarajevo 71000
          </a>
        </div>
        <div className="contact__sections__section contact__sections__section--social">
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100059136398760"
            target="_blank"
          >
            <FaSquareFacebook className="contact__sections__section__icon" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            rel="noreferrer"
            href="https://www.instagram.com/judoclubsarajevo/"
            target="_blank"
          >
            <FaInstagram className="contact__sections__section__icon" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            rel="noreferrer"
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fclub_judo"
            target="_blank"
          >
            <FaSquareXTwitter className="contact__sections__section__icon" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCfJf3Yp0CoZ4-gBkaTq7bDQ"
            target="_blank"
          >
            <FaYoutube className="contact__sections__section__icon" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact
