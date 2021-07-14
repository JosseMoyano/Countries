import React from 'react';
import Pais from './pais';

export default function ActivitiesFiltro (props) {

    return (
        <div key={props.id}>
            {/* <button onClick={() => props.onClick(props.name, props.id, props.countries, props.temporada, props.duracion, props.dificultad )}>corazon</button> */}
            <h1>{props.name}</h1>
            {
                props.countries?.map(country => (                    
                    <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />                    
                ))
            }            
            <p>temporada: {props.temporada}</p>
            <p>duracion: {props.duracion}</p>
            <p>dificultad: {props.dificultad}</p>
        </div>
    )
}