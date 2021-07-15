import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivity } from '../redux/action'
import ActivitiesFiltro from './activities'

export default function FiltroActividad (props) {

    const dispatch = useDispatch()
    const countriesFilterByActivity = useSelector(state => state.countriesFilterByActivity)     

    useEffect(() => {
        dispatch(filterActivity(props.actividad))
    },[dispatch, props.actividad])

    if (props.actividad !== undefined){
        if(countriesFilterByActivity){
            if(countriesFilterByActivity.length === 0){
                return (<h1>No hay actividades que coincidan con las busqueda</h1>)
            }  else {
                return countriesFilterByActivity?.map(actividad => (
                    <ActivitiesFiltro key={actividad.id} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.duracion}  />
                ))
            }    
        } else {
            return (<h1>Cargando</h1>)
        }
    } else {
        return (<h1>No hay Actividades Cargadas</h1>)
    }
}
