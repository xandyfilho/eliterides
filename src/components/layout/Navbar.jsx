import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/eliteRides-removebg-preview.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container customClass = "teste">
        <Link to="/">
          <img className={styles.imgLogo} src={logo} alt="eliterides"/>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newcar">NewCar</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
