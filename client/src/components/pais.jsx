import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/action';
import { NavLink } from 'react-router-dom';

export default function Pais (props){

    const {name, bandera, continente, id, remove, onClick} = props;

    const dispatch = useDispatch();
    
    const onClick2 = () => {
        if(!remove){
        dispatch(addFavourite({name, bandera, continente, id}));
    }}

    return (
        <div>
            {
                !remove ? (
                    <button onClick={onClick2}>corazon</button>
                    ) : (null)
            }
            {
                remove ? (
                    <button onClick={onClick}>x</button>
                ) : (null)
            }
            <img src={bandera} alt={name} />
            <NavLink to={`/countries/${id}`}><h2>{name}</h2></NavLink>
            <h2>{continente}</h2>
        </div>
    )
}

