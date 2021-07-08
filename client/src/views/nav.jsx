import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {

    return (
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/activities' >Activites</NavLink>
            <NavLink to='/perfil' >Mi Perfil</NavLink>
        </div>
    )
}