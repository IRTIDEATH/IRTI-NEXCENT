import React from 'react'
import styles from '../style'
import { nexcent } from '../assets'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <section className="bg-[#272727]">
        <div className={`${styles.padding} flex flex-col items-center
            sm:flex-row sm:space-y-0 sm:space-x-60 space-y-10`}>

            <div className="flex flex-col space-y-8 text-white">
              <img src={nexcent} alt="" className="w-[60px] h-[60px] object-contain"/>
              <p>Lorem ipsum dolor sit amet, <br/>
                consectetur adipisicing elit. Est doloremque!
              </p>
              <div className="space-x-5">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} /></a> 
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="text-white">
                <h1 className="pb-3 text-2xl">About</h1>
                <div className="space-y-2">
                  <p>fsldk</p>
                  <p>sdgdvsdf</p>
                  <p>asfad</p>
                  <p>bfcffd</p>
                </div>
              </div>

              <div className="text-white">
                <h1 className="pb-3 text-2xl">The N</h1>
                <div className="space-y-2">
                  <p>fsldk</p>
                  <p>sdgdvsdf</p>
                  <p>asfad</p>
                  <p>bfcffd</p>
                </div>
              </div>

              <div className="text-white">
                <h1 className="pb-3 text-2xl">Info</h1>
                <div className="space-y-2">
                  <p>fsldk</p>
                  <p>sdgdvsdf</p>
                  <p>asfad</p>
                  <p>bfcffd</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Footer