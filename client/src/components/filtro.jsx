import React, { useEffect } from 'react'
import Pais from './pais';
import { useDispatch, useSelector } from 'react-redux'
import { filterContinent} from '../redux/action';

export default function Filtro (props) {
    
    const dispatch = useDispatch()
    const countriesFilter = useSelector(state => state.countriesFilter)

    useEffect(() => {
        dispatch(filterContinent(props.array, props.continente))
    }, [dispatch, props.array, props.continente, props.countries]) 

    if (countriesFilter?.length === 0) return (<h1>No hay paises que coincidan con el filtro</h1>)
    if (props.ABC || props.poblacion){
        return countriesFilter.todo.map(
            (country => (
                <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
            ))
        )
    } else if (!props.ABC && !props.poblacion){
        return countriesFilter.actual?.map(
            (country => (
                <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
            ))
        )
    } else {
        return (<h1>cargando...</h1>)
    }

}