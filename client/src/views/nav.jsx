import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCountriesSearched } from '../redux/action';
import { StyledNav } from './Nav/nav.js'

export default function Nav () {

    const dispatch = useDispatch()

    return (
        <StyledNav>
            <NavLink className='navlink' onClick={() => dispatch(clearCountriesSearched())} to='/home' >Home</NavLink>
            <NavLink className='navlink' to='/activities' >Activites</NavLink>
            <NavLink className='navlink' to='/perfil' >Mi Perfil</NavLink>
        </StyledNav>
    )
}