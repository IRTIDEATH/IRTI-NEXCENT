import styles from "../style"
import { LoginBtn } from "./Button"
import { aboutimg } from "../assets"

const About = () => {
  return (
    <section id="about" className={`${styles.flexCenter} flex-col ${styles.padding}`}>
      <div className="space-y-2">
        <p className={`${styles.paragraph} text-xl`}>About</p>
        <h1 className={`${styles.heading2}`}>How Nexcent Work</h1>
      </div>

      <div className={`flex justify-between w-full flex-col space-y-5 ${styles.paddingY} sm:flex-row items-center`}>
        <img src={aboutimg} alt="" className="w-[430px] h-[430px] object-contain sm:w-[380px] sm:h-[380px]"/>
        <div className="space-y-8">
          <h1 className={`${styles.heading1}`}>The unseen of spending three <br/> years at Pixelgrade</h1>
          <p className={`${styles.paragraphs}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/>
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br/>
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br/>
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <LoginBtn />
        </div>
      </div>
    </section>
  )
}

export default About