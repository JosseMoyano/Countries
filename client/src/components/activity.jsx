import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavouriteActivity } from '../redux/action';

export default function Activity (props) {   
    
    const {name, id, countries, temporada, duracion, dificultad, onClick, remove} = props;

    const dispatch = useDispatch()

    const onClick2 = () => {
        if(!remove){
        dispatch(addFavouriteActivity({ name, id, countries, temporada, duracion, dificultad}))
    } }

    return (
        <div key={id}>
            {
                !remove ? (
                    <button onClick={() => onClick2()}>corazon</button>
                ) : (null)
            }
            {
                remove ? (
                    <button onClick={onClick}>X</button>
                ):(null)
            }
            <h1>{name}</h1>
            {
                props.countries?.map(country => (
                    <div key={country.id}>
                    <NavLink to={`/countries/${country.id}`}>{`${country.name} `}</NavLink>                    
                    </div>
                ))
            }            
            <p>Temporada: {temporada}</p>
            <p>Duración: {duracion} minutos</p>
            <p>Dificultad: {dificultad} de 5</p>
        </div>
    )
}
