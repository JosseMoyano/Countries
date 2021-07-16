import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCountriesSearched } from '../redux/action';

export default function Nav () {

    const dispatch = useDispatch()

    return (
        <div>
            <NavLink onClick={() => dispatch(clearCountriesSearched())} to='/' >Home</NavLink>
            <NavLink to='/activities' >Activites</NavLink>
            <NavLink to='/perfil' >Mi Perfil</NavLink>
        </div>
    )
}