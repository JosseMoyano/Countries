import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../components/activity';
import Nav from '../components/nav';
import Pais from '../components/pais';
import { removeFavourite, removeFavouriteActivity } from '../redux/action';
import { StyledPerfil } from './StyledComponents/favoritos'

export default function Favoritos (){

    const activitiesFavourite = useSelector(state => state.activitiesFavourite)
    const countriesFavorites = useSelector(state => state.countriesFavorites)

    const dispatch = useDispatch()
    
    return (
        <>
            <Nav/>
            <StyledPerfil>
                <div className='div_container1'>
                    {
                        activitiesFavourite?.length > 0 ? (
                            <>
                            <h2 className='h2'>Mis actividades favoritas: </h2>
                            <div className='div_actividades'>
                        {
                            activitiesFavourite?.map(actividad => (
                                <Activity key={actividad.id} remove={true} onClick={() => dispatch(removeFavouriteActivity(actividad.id))} id={actividad.id} name={actividad.name} countries={actividad.countries} temporada={actividad.temporada} duracion={actividad.duracion} dificultad={actividad.dificultad}/>
                            ))
                        }
                            </div>
                            </>
                        ) : (<div className='div_sin_actividades'><h2 className='h2_1'>No tienes actividades favoritas</h2></div>)
                    }
                    {
                        countriesFavorites?.length > 0 ? (
                            <>
                            <h2 className='h2'>Mis países favoritos: </h2> 
                            <div className='div_paises'>
                        {
                                countriesFavorites?.map(country => (
                                    <Pais key={country.id} remove={true} onClick={() => dispatch(removeFavourite(country.id))} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />
                                ))
                        }
                            </div>
                            </>
                        ) : (<div className='div_sin_paises'><h2 className='h2_1'>No tienes países favoritos</h2></div>)
                    }
                </div>
            </StyledPerfil>
        </>
    )
}