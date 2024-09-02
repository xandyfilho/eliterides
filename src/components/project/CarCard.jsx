import { Link } from 'react-router-dom';
import styles from './CarCard.module.css'
import { FiEdit3, FiXCircle  } from "react-icons/fi";

function CarCard({id, brand, year, color, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

  return (
    <div className={styles.car_card}>
        <h4>{brand}</h4>
        <p className={styles.car_text_yr}>
        <span>Year fabrication:</span>{year}
        </p>
        <div className={styles.car_text}>
            <p>Cor do carro:</p>
            <span className={`${styles[color.toLowerCase()]}`}></span>
            {color}
        </div>
        <div className={styles.car_card_actions}>
            <Link to={`/cars/${id}`}>
                <FiEdit3 /> Edit
            </Link>
            <button onClick={remove}>
                <FiXCircle /> Remove
            </button>
        </div>
    </div>
    
  )
}

export default CarCard
