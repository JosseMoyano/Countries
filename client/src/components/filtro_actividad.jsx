import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivity } from '../redux/action'
import Pais from './pais'

export default function FiltroActividad (props) {

    const { actividad, ABC, poblacion  } = props

    const dispatch = useDispatch()
    const countriesFilterByActivity = useSelector(state => state.countriesFilterByActivity)     

    useEffect(() => {
        dispatch(filterActivity(actividad))
    },[dispatch, actividad])

    return (
        <>
            {
                Array.isArray(countriesFilterByActivity.todo) ? (
                    ABC || poblacion ? (
                        countriesFilterByActivity.todo[0]?.countries?.map(country => 
                            <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                        )
                    ) : !ABC && !poblacion ? (
                        countriesFilterByActivity.actual[0]?.countries?.map(country => 
                            <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                        )
                    ) : (<h1>Cargando</h1>)
                ) : (<h1>No hay actividades que coincidan con las busqueda</h1>)
                        
            } 
        </>
    )
}