import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <Link className={styles.social_list_svg} to="https://www.linkedin.com/in/alexandre-pavinatto-filho-8136471a4/" target='_blank'>
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link className={styles.social_list_svg} to="https://github.com/xandyfilho" target='_blank'>
            <FaGithub />
          </Link>
         
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>EliteRides</span> &copy; 2024
      </p>
    </footer>
  )
}

export default Footer
