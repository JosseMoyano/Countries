import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivity } from '../redux/action'
// import ActivitiesFiltro from './activities'
import Activity from './activity'

export default function FiltroActividad (props) {

    const { actividad } = props;

    const dispatch = useDispatch()
    const countriesFilterByActivity = useSelector(state => state.countriesFilterByActivity)     

    useEffect(() => {
        dispatch(filterActivity(actividad))
    },[dispatch, actividad])

    return (
        <>
            {   
                countriesFilterByActivity ? (
                    countriesFilterByActivity.length > 0 ? (
                        countriesFilterByActivity?.map(actividad => (
                            <Activity key={actividad.id} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.duracion}/>))
                    ) : (<h1>No hay actividades que coincidan con las busqueda</h1>)
                ) : (<h1>Cargando</h1>)
            }
        </>
    )

    // if(!countriesFilterByActivity) return <h1>Cargando</h1>
    // if(countriesFilterByActivity.length === 0) return <h1>No hay actividades que coincidan con las busqueda</h1>
    // return countriesFilterByActivity?.map(actividad => <Activity key={actividad.id} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.duracion}/>)
}