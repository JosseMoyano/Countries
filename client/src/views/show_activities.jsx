import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../components/activity';
import { addFavouriteActivity,  getActivities  } from '../redux/action';

export default function ShowActivities(){

    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities())        
    }, [dispatch])

    const onClick = (name,id,countries,temporada,duracion,dificultad) => {
        dispatch(addFavouriteActivity({ name, id, countries, temporada, duracion, dificultad}))
    }

    return(
        <>
        {
           activities ? (activities?.map(actividad => (
               <Activity key={actividad.id} onClick={onClick} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.dificultad}/>
           ))
           ) : (<h1>Cargando</h1>)
        }
        </>
    )
}