import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section className="bg-NeutralSilver ctabg">
        <div className={`${styles.padding} flex flex-col items-center justify-between
            sm:flex-row sm:space-y-0 space-y-10`}>
            <h1 className="text-2xl text-NeutralDGrey text-center sm:text-start font-semibold">Make the technology<br/>growing up with Nexcent</h1>
            <a href="#" className="px-7 py-4 rounded-md font-medium bg-NeutralDGrey text-white">Lets Join</a>
        </div>
    </section>
  )
}

export default CTA