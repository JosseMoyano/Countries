import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledActividades } from './Actividades/actividades';
import Nav from '../views/nav'


export default function Activities () {

    return (
        <>
        <Nav className='nav'/>
        <StyledActividades>
            <div className='div_container'>
                <div className='div_link div_link1'>
                    <NavLink className='Navlink' to= '/activities/add' >Añadir actividades</NavLink>
                </div>
                <div  className='div_link div_link2'>
                    <NavLink className='Navlink' to='/activities/show' >Mostrar actividades</NavLink>
                </div>
            </div>
        </StyledActividades>
        </>
    )
}