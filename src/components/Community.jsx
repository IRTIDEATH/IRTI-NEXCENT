import styles from '../style'
import { cardimg1, cardimg2, cardimg3 } from '../assets'

const Community = () => {
  return (
    <section id='community' className={`${styles.flexCenter} space-y-20 mt-6 flex-col ${styles.padding}`}>
      <div className="space-y-4">
        <h1 className={`${styles.heading2}`}>Manage your entire community <br/> in a single system</h1>
        <p className={`${styles.paragraph}`}>Who is Nextcent suitable for?</p>
      </div>

      <div className="flex gap-9 flex-wrap px-30 w-full md:justify-between justify-center items-center">
        <div className="bg-linear rounded-2xl bg-shadow">
          <div className={`${styles.flexCenter} flex-col space-y-6 py-9 px-5`}>
            <img src={cardimg1} alt="" className="object-contain w-[60px] h-[60px]"/>
            <h1 className="text-NeutralDGrey font-bold text-xl text-center">Membership <br/> Organisations</h1>
            <p className="text-NeutralDGrey font-medium text-xs text-center">
              Our membership management <br/>
              software provides full automation <br/>
              of membership renewals and <br/> payments
            </p>
          </div>
        </div>

        <div className="bg-linear rounded-2xl bg-shadow">
          <div className={`${styles.flexCenter} flex-col space-y-6 py-9 px-5`}>
            <img src={cardimg2} alt="" className="object-contain w-[60px] h-[60px]"/>
            <h1 className="text-NeutralDGrey font-bold text-xl text-center">National <br/> Associations</h1>
            <p className="text-NeutralDGrey font-medium text-xs text-center">
              Our membership management <br/>
              software provides full automation <br/>
              of membership renewals and <br/> payments
            </p>
          </div>
        </div>

        <div className="bg-linear rounded-2xl bg-shadow">
          <div className={`${styles.flexCenter} flex-col space-y-6 py-9 px-5`}>
            <img src={cardimg3} alt="" className="object-contain w-[60px] h-[60px]"/>
            <h1 className="text-NeutralDGrey font-bold text-xl text-center">Clubs And <br/> Groups</h1>
            <p className="text-NeutralDGrey font-medium text-xs text-center">
              Our membership management <br/>
              software provides full automation <br/>
              of membership renewals and <br/> payments
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community