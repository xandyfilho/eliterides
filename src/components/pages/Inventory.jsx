import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styles from './Inventory.module.css';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import CarCard from '../project/CarCard';

function Inventory() {
  const [cars, setCars] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState()
  const [search, setSearch] = useState('')
  const location = useLocation();

  const filteredCars = cars.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase()) || // Verifica se a marca inclui o termo de busca
    car.year.toString().includes(search) || // Verifica se o ano inclui o termo de busca
    car.color.name.toLowerCase().includes(search.toLowerCase()) // Verifica se a cor inclui o termo de busca
  );

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setCars(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function removeCar(id) {
    fetch(`http://localhost:5000/cars/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCars(cars.filter((car) => car.id !== id))
        setMessage('Car deleted')
        setType('success')
      })
      .catch((err) => console.log(err))
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.inventory_container}>
      {message && <Message type={type} msg={message} />}
      <div className={styles.title_container}>
        <h1>Inventory</h1>
        <input type="search" value={search} onChange={handleInputChange} placeholder='Search'/>
        <LinkButton to="/newCar" text="Add your car" />
      </div>
      <Container customClass="start">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard
              id={car.id}
              brand={car.brand}
              year={car.year}
              color={car.color.name}
              key={car.id}
              handleRemove={removeCar}
            />
          ))
        ) : (
          <p>No cars found...</p>
        )}
      </Container>
    </div>
  );
}

export default Inventory;
