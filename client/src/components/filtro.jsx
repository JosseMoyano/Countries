import React, { useEffect } from 'react'
import Pais from './pais';
import { useDispatch, useSelector } from 'react-redux'
import { filterContinent, order } from '../redux/action';
import { orderByAZ, orderByZA } from '../utils';

export default function Filtro (props) {
    
    const dispatch = useDispatch()
    const countriesFilter = useSelector(state => state.countriesFilter)

    useEffect(() => {
        dispatch(filterContinent(props.array, props.continente))
    }, [dispatch, props.array, props.continente, props.countries]) 

    useEffect(()=>{
        if(props.AZ || props.ZA){
            if(countriesFilter/* [props.continente] */?.length > 0){
                if(props.AZ === true) return dispatch(order(orderByAZ))
                if(props.ZA === true) return dispatch(order(orderByZA))
            }
        }
    },[countriesFilter, dispatch, props.AZ, props.ZA/* , props.continente */])

    console.log('countriesFilter: ',countriesFilter)
    console.log('countriesFilter?.length: ',countriesFilter?.length)
        
    if(props.countries?.length > 0){
        if(countriesFilter){
            if (countriesFilter/* [props.continente] */?.length === 0){   
                return (
                    <h1>No hay paises que coincidan con el filtro</h1>
                    ) 
            } else if (countriesFilter/* [props.continente] */?.length > 0) {
                return countriesFilter/* [props.continente] */?.map(country => (
                    <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                    ))
            } else {
                return (
            <h1>Cargando</h1>)
            }
        } else {
            return (
                <h1>No hay paises que coincidan con el filtro</h1>)
        }
    } else {
        return <h1>No se encontro ningun país</h1>
    }
}

/*
Cuando se desactivan los filtros no vuelven a la normalidad, habria que arreglar esa parte 
*/