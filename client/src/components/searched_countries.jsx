import React from 'react'
import Pais from './pais';
import Filtro from './filtro';

export default function SearchedCountries (props) {


    if (props.searchedCountries === 'No hay coincidencias')  return (<h1>No hay coincidencias</h1>)        
    if (props.searchedCountries){
        if(props.continente) {
            return (
                <Filtro continente={props.continente} array='searchedCountries'/>
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