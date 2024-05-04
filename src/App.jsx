import styles from './style'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Community from './components/Community.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
        </div>

        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Community/>
            <About/>
            <CTA/>
          </div>
        </div>        
        <Footer/>
    </div>
  )
}

export default App
