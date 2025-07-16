import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col md:items-start justify-center items-center'>
                <a href="/">Visit our Socials</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className='icon' target='blank' href={img.url} key={img.url}>
                        <img src={img.imgPath} alt=""/>
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    { new Date().getFullYear() } Digital Trifecta, All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer