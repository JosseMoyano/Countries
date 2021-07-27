import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFavouriteActivity, removeFavouriteActivity } from '../redux/action';
import { StyledActividad } from './StyledComponents/actividad';
import { FaHeart } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from "framer-motion"



export default function Activity (props) {   
    
    const {name, id, countries, temporada, duracion, dificultad, onClick, remove} = props;

    const activitiesFavourite = useSelector(state => state.activitiesFavourite)

    const [rojo, setRojo ] = useState(activitiesFavourite.some(c => c.id === id))


    const dispatch = useDispatch()
    const history = useHistory()

    const onClick2 = () => {
        if(!remove){
            if(!(activitiesFavourite.some(a => a.id === id))){
        dispatch(addFavouriteActivity({ name, id, countries, temporada, duracion, dificultad}))
        } else {
            dispatch(removeFavouriteActivity(id))
        }}}

    useEffect(() => {
        if(activitiesFavourite.some(c => c.id === id)){
            setRojo(true)
        } else {
            setRojo(false)
        }
    }, [activitiesFavourite, id])

    return (
        <StyledActividad key={id}>
            <div className='button_corazon_x'>
                {
                    !remove ? (
                        < motion.button whileHover={{scale: 1.5}} className='button_corazon' >
                            {
                                rojo ? (
                                    <FaHeart size={20} className='corazon_red' onClick={() => onClick2()}/>
                                ) : (
                                    <FaHeart size={20} className='corazon_gray' onClick={() => onClick2()}/>
                                )
                            }
                        </motion.button>
                    ) : (null)
                }
            </div>
            <div className='button_corazon_x'>
                {
                    remove ? (
                        <motion.button whileHover={{scale: 1.5}} className='button_corazon'>
                            <AiFillCloseCircle size={20} onClick={onClick}/>
                        </motion.button>
                    ):(null)
                }
            </div>

            <h1>{name}</h1>

            <div className='div_banderas'>
                {
                    props.countries?.map(country => (
                        <div className='div_bandera' key={country.id}>
                        <button onClick={()=>history.push(`/countries/${country.id}`)}><img className='img' src={country.bandera} alt={country.bandera}/></button>
                        </div>
                    ))
                } 
            </div>        
            <div className='div_texto'>  
                <p>Temporada: {temporada}</p>
                <p>Duración: {duracion} minutos</p>
                <p>Dificultad: {dificultad} de 5</p>
            </div> 
        </StyledActividad>
    )
}
