import React, { useEffect } from 'react'
import Pais from './pais';
import Filtro from './filtro';
import FiltroActividad from './filtro_actividad';
import { useDispatch } from 'react-redux';
import { order } from '../redux/action';
import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils';

export default function SearchedCountries (props) {

    const dispatch = useDispatch()

    useEffect(() => {
        if(props.ABC === true) {
            if(props.AZ === true) return dispatch(order(orderByAZ))
            if(props.ZA === true) return dispatch(order(orderByZA))
        }         
        if(props.poblacion === true){
            if(props.menorMayor === true) return dispatch(order(orderMenorMayor))
            if(props.mayorMenor === true) return dispatch(order(orderMayorMenor))
        }        
        
    }, [dispatch, props.ABC, props.AZ, props.ZA, props.mayorMenor, props.menorMayor, props.poblacion])

    if (props.searchedCountries === 'No hay coincidencias')  return (<h1>No hay coincidencias</h1>)        
    if (props.searchedCountries){
            if(props.continente) {
                return (
                    <Filtro continente={props.continente} array='searchedCountries' countries={props.searchedCountries} ABC={props.ABC} poblacion={props.poblacion} AZ={props.AZ} ZA={props.ZA} />
                ) 
            }
            if(props.actividad.length > 0) {
                return(
                    <FiltroActividad actividad={parseInt(props.actividad.toString())} />
                )
            }  
            return (
                props.searchedCountries?.map(country => (
                <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
            )))
    }  
        return (
            <h1>Cargando</h1>)
}
    
