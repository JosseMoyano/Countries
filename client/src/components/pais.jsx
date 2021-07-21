import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/action';
import { NavLink } from 'react-router-dom';
import {StyledPais} from './Pais/pais'
import { FaHeart } from 'react-icons/fa'

export default function Pais (props){

    const {name, bandera, continente, id, remove, onClick} = props;

    const dispatch = useDispatch();
    
    const onClick2 = () => {
        if(!remove){
        dispatch(addFavourite({name, bandera, continente, id}));
    }}

    return (
        <StyledPais>
            {
                !remove ? (
                    <div className='button_pais'> 
                        <button className='button_corazon' onClick={onClick2}><FaHeart size={20} className='corazon'/></button>
                    </div>
                    ) : (null)
            }
            {
                remove ? (
                    <div className='button_pais'>
                        <button className='button_corazon' onClick={onClick}>x</button>
                    </div>
                ) : (null)
            }
            <img className='img_pais' src={bandera} alt={name} />
            <div className='nombre_pais'>
                <NavLink className='navlink' to={`/countries/${id}`}><h2 className='h2_paisycontinente'>{name} - {continente}</h2></NavLink>
            </div>
        </StyledPais>
    )
}

