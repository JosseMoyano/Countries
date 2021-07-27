import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Activity from '../components/activity';
import Nav from '../components/nav';
import {  getActivities  } from '../redux/action';
import { StyledActividades } from './StyledComponents/mostrar_actividades';

export default function MostrarActividades(){

    const activities = useSelector(state => state.activities.todo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities())        
    }, [dispatch])

    return(
        <>
        <Nav />
        <StyledActividades>
        {
            activities.length > 0 ? (
                activities?.map(actividad => (
                    <Activity key={actividad.id} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.dificultad}/> ))
            ) : ( <h1>No hay actividades para ver, primero crealas aquí: <NavLink to='/activities/add'>Añadir Actividad</NavLink></h1> )
        }
        </StyledActividades>
        </>
    )
}