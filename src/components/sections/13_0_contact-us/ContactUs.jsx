import React from 'react'
import {AiOutlineMail, AiOutlineArrowUp} from 'react-icons/ai'

const ContactUs = () => {
    const email = 'info@investprojects.info'
  return (
    <section className="contact-us-section landing-section">
        <p className="contact-us-section__text">Остались вопросы?</p>
        <p className="contact-us-section__text">Будем рады на них ответить!</p>
        <div className="contact-us-section__mail-wrapper">
          <AiOutlineMail className="contact-us-section__mail-icon"/>
          <a className="contact-us-section__mail" href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="back-btn-wrapper">
          <AiOutlineArrowUp className="back-btn-icon"/>
          <a className="back-btn" href='#welcome-screen-section'>В начало</a>
        </div>
    </section>
  )
}

export default ContactUs