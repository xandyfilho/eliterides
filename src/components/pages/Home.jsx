import styles from './Home.module.css'
import fastCar from '../../img/fastCar.svg'
import LinkButton from '../layout/LinkButton'


function Home() {
  return (
    <section className={styles.home_container}>
      <img src={fastCar} alt='EliteRides'/>
      <div className={styles.boxTextHome}>
        <h1>Welcome to<span>EliteRides</span></h1>
        <p>Check out our catalog for a wide range of cars.</p>
        <LinkButton to="/newCar" text='Add your car' />
      </div>
    </section>
  )
}
export default Home