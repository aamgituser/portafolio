import React from 'react'
import { BsWhatsapp,BsInstagram,BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";


const Contact = () => {
  return (
    <main className='main'>
      <div className='titulo__container'>
        <p className='titulo projects'>Contact</p>
      </div>
      <section className='container'>
        <div className='contact_item'>
          <BsWhatsapp/>
          <a target='_blank' className='link link_con' href='https://wa.me/5492615658886'>whatsapp</a>
          
        </div>
        <div className='contact_item'>
          <FiMail/>
          mail
        </div>
        <div className='contact_item'>
          <BsLinkedin/>
          <a target='_blank' className='link link_con' href='https://www.linkedin.com/in/agostina-alvarez-497349190/'>linkedin</a>
        </div>
        <div className='contact_item'>
          <BsInstagram/>
          instagram
        </div>
      </section>
    </main>
  )
}

export default Contact