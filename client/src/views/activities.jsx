import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Activities () {

    return (
        <div>
            {/* <h1>Hola</h1> */}
            <NavLink to= '/activities/add' >Añadir actividades</NavLink>
            <NavLink to='/activities/show' >Mostrar actividades</NavLink>
        </div>
    )
}