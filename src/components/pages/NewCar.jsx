import { useNavigate } from 'react-router-dom'
import CarForm from "../project/CarForm"
import styles from './NewCar.module.css'
import StarmanCar from './../../img/StarmanCar.svg'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'

function NewCar() {
  const navigate = useNavigate()
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  function createPost(car) {
    // Validação da idade do veículo
    const currentYear = new Date().getFullYear()
    if (car.year > currentYear || car.year < (currentYear - 20)) {
      setMessage('The car cannot be older than 20 years')
      setType('error')
      return setMessage , setType
    }

     // Enviar dados para o servidor
    fetch("http://localhost:5000/cars", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...car 
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          setMessage('Failed to register car')
          setType('error')
        }
        return resp.json()
      })
      .then((data) => {
        console.log('Car registered successfully:', data)
        // Redirecionar para a página após o cadastro
        navigate('/Inventory') 
        setMessage('Car successfully registered')
        setType('success')
      })
      .catch((err) => {
        console.error('Error:', err)
        setMessage('An error occurred while registering the car. Please try again.')
        setType('error')
      })
  }

  return (
    <>
      {message && <Message type={type} msg={message} />}
      <div className={styles.newcar_container}>
        <div className={styles.newcar_register}>
          <h1>Register your <span>car</span></h1>
          <p>Join a network of car enthusiasts who recognize quality</p>
          <img src={StarmanCar} alt='EliteRides'/>
        </div>
        <CarForm handleSubmit={createPost} btnText="Register"/>
      </div>
    </>
  )
}

export default NewCar
