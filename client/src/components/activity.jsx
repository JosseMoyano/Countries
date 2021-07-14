import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Activity (props) {     

    return (
        <div key={props.id}>
            <button onClick={() => props.onClick(props.name, props.id, props.countries, props.temporada, props.duracion, props.dificultad )}>corazon</button>
            <h1>{props.name}</h1>
            {
                props.countries?.map(country => (
                    <div key={country.id}>
                    <NavLink to={`/countries/${country.id}`}>{`${country.name} `}</NavLink>                    
                    </div>
                ))
            }            
            <p>temporada: {props.temporada}</p>
            <p>duracion: {props.duracion}</p>
            <p>dificultad: {props.dificultad}</p>
        </div>
    )
}
