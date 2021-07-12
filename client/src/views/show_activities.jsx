import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showActivities } from '../redux/action';

export default function ShowActivities(){
    
    console.log('holies')
    const dispatch = useDispatch()

    const activities = useSelector(state => state.activities)

    
    useEffect(() => {
        dispatch(showActivities())        
    }, [dispatch])
    
    console.log(activities)
    return (
        activities ? (
            activities.map(activity => (
                <>
                    <p>{activity.name}</p>
                    <p>{activity.dificultad}</p>
                    <p>{activity.duracion}</p>
                    <p>{activity.temporada}</p>
               </>
            ))
        ) : activities === undefined ? (
        <h1>Cargando actividades</h1>
        ) : ( <h1> No hay actividades para mostrar, agrega primeramente una actividad </h1>)
    )
}