import styles from './Car.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import CarForm from './../project/CarForm'
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import { Link } from 'react-router-dom';
import { FiXCircle } from "react-icons/fi";


function Car() {
    const { id } = useParams()
    console.log(id)

    const [car, setCar] = useState(null)
      // Inicializa como null em vez de uma array vazio
    const [showCarForm, setShowCarForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setCar(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    function editPost(car){
        console.log(car)        
         // Validação da idade do veículo
        const currentYear = new Date().getFullYear()
        if (car.year > currentYear || car.year < (currentYear - 20)) {
            setMessage('The car cannot be older than 20 years')
            setType('error')
            return false
        }
        fetch(`http://localhost:5000/cars/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }) 
        .then((resp) => resp.json())
        .then((data) => {
            setCar(data)
            setShowCarForm(false)
            //message 
            setMessage('Updated Car')
            setType('success')
            })
        .catch((err) => console.log(err))       
    }

    function toggleCarForm() {
        setShowCarForm(!showCarForm)
    }

    return (
        <>
            {car ? (  // Verifica se o carro foi carregado
                <div className={styles.car_details}>
                    <div className={styles.title_car_details}>
                        <h1>Edit car</h1>
                    </div>
                    <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                        <div className='styles.details.container'>
                            <h1>{car.brand}</h1>
                            {!showCarForm ? (
                                <div>
                                    <p><span>Nome:</span>{car.brand}</p>
                                    <p><span>Year:</span>{car.year}</p>
                                    <p><span>Color:</span>{car.color.name}</p>
                                </div>
                            
                            ):(
                                <div>
                                    <CarForm className={styles.btnLink} handleSubmit={editPost} btnText="Confirm" carData={car}/>
                                </div>
                            )}
                            <button className={styles.btnLink}onClick={toggleCarForm}>
                                {!showCarForm ? 'Edit car' : 'Back'}
                            </button>
                        </div>
                        <div className={styles.car_link}>
                                <Link to={'/Inventory'}>
                                    <FiXCircle />
                                </Link>
                            </div>
                    </Container>
                </div>
            ) : (
                <p>Loading car details...</p>  // Mensagem enquanto os dados são carregados
            )}
        </>
    )
}

export default Car
