import React from 'react'
import { AiOutlineWhatsApp,AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Goat All rights reserved</p>
      <p className='icons'>
        <AiFillFacebook></AiFillFacebook>
        <AiOutlineWhatsApp></AiOutlineWhatsApp>
      </p>
    </div>
  )
}

export default Footer