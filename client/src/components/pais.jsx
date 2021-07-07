import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/action';
import { NavLink } from 'react-router-dom';

export default function Pais (props){

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addFavourite({
            name:props.name,
            bandera: props.bandera,
            continente: props.continente,
            id: props.id
        }));
    }

    return (
        <div>
            <div>
                <button onClick={handleOnClick}>corazon</button>
            </div>
            <img src={props.bandera} alt={props.name} />
            <NavLink to={`/countries/${props.id}`}><h2>{props.name}</h2></NavLink>
            <h2>{props.continente}</h2>
        </div>
    )
}

