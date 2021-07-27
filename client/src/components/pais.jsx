import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../redux/action';
import { NavLink } from 'react-router-dom';
import {StyledPais} from './StyledComponents/pais'
import { FaHeart } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from "framer-motion"


export default function Pais (props){

    const {name, bandera, continente, id, remove, onClick} = props;

    
    const countriesFavorites = useSelector(state => state.countriesFavorites)
    
    const [rojo, setRojo ] = useState(countriesFavorites.some(c => c.id === id))
    
    const dispatch = useDispatch();
    
    const onClick2 = () => {
        if(!remove){
            if(!(countriesFavorites.some(c => id === c.id))){
            dispatch(addFavourite({name, bandera, continente, id}))
            } else {
                dispatch(removeFavourite(id))
            }
        }
    }

    useEffect(() => {
        if(countriesFavorites.some(c => c.id === id)){
            setRojo(true)
        } else {
            setRojo(false)
        }
    }, [countriesFavorites, id])


    
    return (
        <StyledPais>
            <div className='div_container_button'>
                {
                    !remove ? (
                        <div  className='button_pais'> 
                            <motion.button whileHover={{scale: 1.5}} className='button_corazon' onClick={onClick2}>
                                {
                                    rojo ? (
                                        <FaHeart size={20} className='corazon_red'/>
                                    ) : (
                                        <FaHeart size={20} className='corazon_gray'/>
                                    )
                                }
                            </motion.button>
                        </div>
                        ) : (null)
                }
            </div>
            <div className='div_container_button'>
                {
                    remove ? (
                        <div className='button_pais'>
                            <motion.button whileHover={{scale:1.5}} className='button_corazon' onClick={onClick}>
                                <AiFillCloseCircle size={20}/>
                            </motion.button>
                        </div>
                    ) : (null)
                }
            </div>
            <div className='div_image'>
                <img className='img_pais' src={bandera} alt={name} />
            </div>
            <div className='nombre_pais'>
                <NavLink className='navlink' to={`/pais/${id}`}><h2 className='h2_paisycontinente'>{name} - {continente}</h2></NavLink>
            </div>
        </StyledPais>
    )
}

