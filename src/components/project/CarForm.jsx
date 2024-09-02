import React, { useState, useEffect } from 'react'
import styles from './CarForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'
import Message from '../layout/Message'

function CarForm({ handleSubmit, btnText, carData }) {
  const [color, setColor] = useState([])
  const [car, setCar] = useState(carData || {})
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    fetch("http://localhost:5000/color", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setColor(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault();
    
    // Validação dos campos
    if (!car.brand || !car.year || !car.color) {
      setMessage('Please fill in all fields')
      setType('error')
      return
    }

    if (handleSubmit) {
      handleSubmit(car) // Enviar os dados para o componente pai
    }
  }

  function handleChange(e) {
    setCar({ ...car, [e.target.name]: e.target.value })
  }

  function handleSelect(e) {
    const selectedOption = e.target.options[e.target.selectedIndex]
    setCar({
      ...car,
      color: {
        id: e.target.value,
        name: selectedOption.text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      {message && <Message type={type} msg={message} />}
      <Input 
        type='text' 
        text='Enter the car brand'
        name='brand'
        placeholder='Car brand' 
        value={car.brand || ''}
        handleOnChange={handleChange}
      />     
      <Input 
        type='number'
        text='Enter the car year'
        name='year'
        placeholder='e.g., 2010' 
        value={car.year || ''}
        handleOnChange={handleChange}
      />
      <Select 
        name='color_id'
        text='Car color'
        option={color}
        value={car.color ? car.color.id : ''}
        handleOnChange={handleSelect}
      />
      <SubmitButton 
        type='submit'
        text={btnText}                
      />
    </form>
  )
}

export default CarForm
