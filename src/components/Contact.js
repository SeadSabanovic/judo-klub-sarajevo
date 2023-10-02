import React from "react"
import {
  LiaLocationArrowSolid,
  LiaEnvelopeSolid,
  LiaPhoneSolid,
} from "react-icons/lia"

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Kontakt</h2>
      <div className="contact__sections">
        <div className="contact__sections__section">
          <LiaEnvelopeSolid className="contact__sections__section__icon" />
          <h3 className="contact__sections__section__title">Email</h3>
          <h5>jsc@gmail.com</h5>
          <img
            className="contact__sections__section__bg"
            src="https://images.pexels.com/photos/1677546/pexels-photo-1677546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="contact__sections__section">
          <LiaLocationArrowSolid className="contact__sections__section__icon" />
          <h3 className="contact__sections__section__title">Lokacija</h3>
          <h5>
            Kolodvorska 12a,
            <br />
            Sarajevo 71000
          </h5>
          <img
            className="contact__sections__section__bg"
            src="https://images.pexels.com/photos/16700787/pexels-photo-16700787/free-photo-of-tenku-no-torii-and-mount-fuji-in-the-background-kawaguchi-asama-shrine-yamanashi-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="contact__sections__section">
          <LiaPhoneSolid className="contact__sections__section__icon" />
          <h3 className="contact__sections__section__title">Telefon</h3>
          <h5>+38762-960-000</h5>
          <img
            className="contact__sections__section__bg"
            src="https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
