import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../components/activity';
import Pais from '../components/pais';
import { removeFavourite, removeFavouriteActivity } from '../redux/action';

export default function MiPerfil (){

    const activitiesFavourite = useSelector(state => state.activitiesFavourite)
    const countriesFavorites = useSelector(state => state.countriesFavorites.actual)

    const dispatch = useDispatch()
    
    return (
        <>
        <h1>Mi Perfil</h1>
        <h1>Mis actividades Favoritas: </h1>
        {
            activitiesFavourite?.length > 0 ? (
                activitiesFavourite?.map(actividad => (
                    <Activity key={actividad.id} remove={true} onClick={() => dispatch(removeFavouriteActivity(actividad.id))} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.dificultad}/>
                ))
            ) : (<h1>No tienes actividades favoritas</h1>)
        }
            <h1>Mis paises favoritos: </h1> 
        {
            countriesFavorites?.length > 0 ? (
                countriesFavorites?.map(country => (
                    <Pais key={country.id} remove={true} onClick={() => dispatch(removeFavourite(country.id))} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                ))
            ) : (<h1>No tienes paises favoritos</h1>)
        }
        </>

    )
}