import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../redux/action';
import { NavLink } from 'react-router-dom';
import {StyledPais} from './Pais/pais'
import { FaHeart } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'


export default function Pais (props){

    const {name, bandera, continente, id, remove, onClick} = props;

    const countriesFavorites = useSelector(state => state.countriesFavorites)

    const dispatch = useDispatch();
    
    const onClick2 = () => {
        if(!remove){
            if(!(countriesFavorites.some(c => id === c.id))){
            dispatch(addFavourite({name, bandera, continente, id}))
            };
        }
    }
    
    return (
        <StyledPais>
            <div className='div_container_button'>
                {
                    !remove ? (
                        <div className='button_pais'> 
                            <button className='button_corazon' onClick={onClick2}><FaHeart size={20} className='corazon'/></button>
                        </div>
                        ) : (null)
                }
            </div>
            <div className='div_container_button'>
            {
                remove ? (
                    <div className='button_pais'>
                        <button className='button_corazon' onClick={onClick}><AiFillCloseCircle size={20}/></button>
                    </div>
                ) : (null)
            }
            </div>
            <img className='img_pais' src={bandera} alt={name} />
            <div className='nombre_pais'>
                <NavLink className='navlink' to={`/countries/${id}`}><h2 className='h2_paisycontinente'>{name} - {continente}</h2></NavLink>
            </div>
        </StyledPais>
    )
}

