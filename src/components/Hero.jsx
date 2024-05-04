import styles from '../style'
import { imghero } from '../assets'
import { LoginBtn } from './Button'

const Hero = () => {
  return (
    <section id='home' className="bg-NeutralSilver">
      <div className={`py-24 xl:px-0 ${styles.paddingX}`}>
        <div className={`flex flex-col sm:flex-row-reverse items-center justify-between`}>
          <img src={imghero} alt="" className="w-[400px] h-[400px] object-contain"/>
          <div className="space-y-5">
            <h1 className="text-7xl text-NeutralDGrey leading-[5rem] font-semibold">Next and Centuary <br />
              <span className="text-BrandPrimary">from 8 years</span>
            </h1>
            <p className="text-md font-light">This is a Nexcent : Bringing advanced technology to the centuaries</p>
            <LoginBtn />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero