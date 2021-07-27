import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/nav';
import { StyledActividades } from './StyledComponents/actividades'


export default function Actividades () {

    return (
        <>
        <Nav className='nav'/>
        <StyledActividades>
            <div className='div_container'>
                <div className='div_link div_link1'>
                    <NavLink className='Navlink' to= '/actividades/añadir' >Añadir actividades</NavLink>
                </div>
                <div  className='div_link div_link2'>
                    <NavLink className='Navlink' to='/actividades/mostrar' >Mostrar actividades</NavLink>
                </div>
            </div>
        </StyledActividades>
        </>
    )
}