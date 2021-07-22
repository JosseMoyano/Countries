import React, { useEffect } from 'react'
import Pais from './pais';
import FiltroContinente from './filtro_continente';
import FiltroActividad from './filtro_actividad';
import { useDispatch } from 'react-redux';
import { order } from '../redux/action';
import { orderByAZ, orderByZA, orderMayorMenor, orderMenorMayor } from '../utils';

export default function SearchedCountries (props) {

    const { ABC, AZ, ZA, menorMayor, mayorMenor, poblacion, searchedCountries, continente, actividad } = props

    const dispatch = useDispatch();

    useEffect(() => {
        if(ABC === true) {
            if(AZ === true) return dispatch(order(orderByAZ));
            if(ZA === true) return dispatch(order(orderByZA))};        
        if(poblacion === true){
            if(menorMayor === true) return dispatch(order(orderMenorMayor))
            if(mayorMenor === true) return dispatch(order(orderMayorMenor))};       
        
    }, [dispatch, ABC, AZ, ZA, mayorMenor, menorMayor, poblacion, continente])

    return (
        <>
            {
                Array.isArray(searchedCountries) ? (
                    continente ? (
                        <FiltroContinente continente={continente} array='searchedCountries' countries={searchedCountries} ABC={ABC} poblacion={poblacion} />
                    ) : actividad.length > 0 ? (
                        <FiltroActividad actividad={parseInt(actividad.toString())}  ABC={ABC} AZ={AZ} ZA={ZA} poblacion={poblacion} menorMayor={menorMayor} mayorMenor={mayorMenor} />
                    ) : (
                        searchedCountries?.map(
                            country => <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />)
                    )
                ) : (<h1>No se encontro el pais</h1>)
            }
        </>
    )

    // if (searchedCountries === 'No hay coincidencias') return <h1>No hay coincidencias</h1>        
    // if (searchedCountries){
    //         if(continente) return <FiltroContinente continente={continente} array='searchedCountries' countries={searchedCountries} ABC={ABC} poblacion={poblacion} /* AZ={props.AZ} ZA={props.ZA} */ />
    //         if(actividad.length > 0) return <FiltroActividad actividad={parseInt(actividad.toString())} />
    //         return searchedCountries?.map(country => <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />)}  
    // return <h1>Cargando</h1>
}
    
