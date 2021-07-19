import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Activity from '../components/activity';
import {  getActivities  } from '../redux/action';

export default function ShowActivities(){

    const activities = useSelector(state => state.activities.todo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities())        
    }, [dispatch])

    return(
        <>
        {
            activities.length > 0 ? (
                activities?.map(actividad => (
                    <Activity key={actividad.id} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.dificultad}/> ))
            ) : ( <h1>No hay actividades para Mostrar, primero crealas aqui: <NavLink to='/activities/add'>Add Activities</NavLink></h1> )
        }
        </>
    )
}