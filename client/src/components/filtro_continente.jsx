import React, { useEffect } from 'react'
import Pais from './pais';
import { useDispatch, useSelector } from 'react-redux'
import {  filterContinent} from '../redux/action';

export default function FiltroContinente (props) {

    const { array, continente, countries, ABC, poblacion } = props
    
    const dispatch = useDispatch()
    const countriesFilter = useSelector(state => state.countriesFilter)

    useEffect(() => {
        dispatch(filterContinent(array, continente))
    }, [dispatch, array, continente, countries]) 

    return (
        <>
            {
                countriesFilter.todo?.length > 0 ? (
                    ABC || poblacion ? (
                        countriesFilter.todo.map(country => (
                                <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />))
                    ) : !ABC && !poblacion ? (
                            countriesFilter.actual?.map(country => (
                                <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />))
                    ) : (<h1>cargando...</h1>)
                ) : (<h1>No hay paises que coincidan con el filtro</h1>)
            }
        </>
    )

    
}